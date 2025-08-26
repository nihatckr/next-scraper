import { logger } from './logger'
import { env } from './env'

export interface RetryOptions {
  maxRetries?: number
  delay?: number
  backoffFactor?: number
  timeout?: number
  retryCondition?: (error: any) => boolean
}

export class RetryableError extends Error {
  constructor(message: string, public readonly originalError?: Error) {
    super(message)
    this.name = 'RetryableError'
  }
}

export class NonRetryableError extends Error {
  constructor(message: string, public readonly originalError?: Error) {
    super(message)
    this.name = 'NonRetryableError'
  }
}

export async function withRetry<T>(
  operation: () => Promise<T>,
  options: RetryOptions = {},
  operationName?: string,
): Promise<T> {
  const {
    maxRetries = env.MAX_RETRIES,
    delay = env.RETRY_DELAY,
    backoffFactor = 2,
    timeout = env.REQUEST_TIMEOUT,
    retryCondition = defaultRetryCondition,
  } = options

  let lastError: Error

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      // Timeout wrapper
      const result = await Promise.race([
        operation(),
        new Promise<never>((_, reject) => {
          setTimeout(() => {
            reject(new Error(`Operation timed out after ${timeout}ms`))
          }, timeout)
        }),
      ])

      if (attempt > 0) {
        logger.info(`Operation succeeded after ${attempt} retries`, {
          operationName,
          attempt: attempt + 1,
        })
      }

      return result
    } catch (error: any) {
      lastError = error

      if (error instanceof NonRetryableError) {
        logger.error('Non-retryable error occurred', {
          operationName,
          error: error.message,
          originalError: error.originalError?.message,
        })
        throw error
      }

      if (attempt === maxRetries || !retryCondition(error)) {
        logger.error('Max retries exceeded or non-retryable condition', {
          operationName,
          attempts: attempt + 1,
          maxRetries: maxRetries + 1,
          error: error.message,
        })
        throw error
      }

      const currentDelay = delay * Math.pow(backoffFactor, attempt)
      logger.warn(
        `Retry ${attempt + 1}/${maxRetries + 1} in ${currentDelay}ms`,
        {
          operationName,
          error: error.message,
        },
      )

      await sleep(currentDelay)
    }
  }

  throw lastError!
}

function defaultRetryCondition(error: any): boolean {
  // Network errors
  if (
    error.code === 'ECONNRESET' ||
    error.code === 'ENOTFOUND' ||
    error.code === 'ETIMEDOUT'
  ) {
    return true
  }

  // HTTP status codes that should be retried
  if (error.response?.status) {
    const status = error.response.status
    return status >= 500 || status === 429 || status === 408
  }

  // Database connection errors
  if (
    error.code === 'P1001' ||
    error.code === 'P1008' ||
    error.code === 'P1017'
  ) {
    return true
  }

  // Rate limiting
  if (error.message?.includes('rate limit')) {
    return true
  }

  return false
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// HTTP specific retry helper
export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retryOptions: RetryOptions = {},
): Promise<Response> {
  return withRetry(
    async () => {
      const response = await fetch(url, options)

      // Check if response should trigger a retry
      if (!response.ok && shouldRetryStatus(response.status)) {
        throw new RetryableError(
          `HTTP ${response.status}: ${response.statusText}`,
        )
      }

      if (!response.ok) {
        throw new NonRetryableError(
          `HTTP ${response.status}: ${response.statusText}`,
        )
      }

      return response
    },
    retryOptions,
    `fetch-${url}`,
  )
}

function shouldRetryStatus(status: number): boolean {
  return status >= 500 || status === 429 || status === 408
}
