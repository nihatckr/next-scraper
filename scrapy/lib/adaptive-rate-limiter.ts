import { logger } from './logger'

export interface RateLimiterConfig {
  initialDelayMs: number
  maxDelayMs: number
  backoffMultiplier: number
  maxConcurrency: number
  brand: string
}

export class AdaptiveRateLimiter {
  private currentDelayMs: number
  private activeTasks: number = 0
  private consecutiveErrors: number = 0
  private lastSuccess: number = Date.now()
  private config: RateLimiterConfig

  constructor(config: RateLimiterConfig) {
    this.config = config
    this.currentDelayMs = config.initialDelayMs
  }

  async execute<T>(task: () => Promise<T>): Promise<T> {
    await this.waitForSlot()
    
    this.activeTasks++
    const startTime = Date.now()
    
    try {
      const result = await task()
      this.onSuccess()
      return result
    } catch (error: any) {
      this.onError(error)
      throw error
    } finally {
      this.activeTasks--
      const duration = Date.now() - startTime
      logger.debug(`${this.config.brand} task completed`, { 
        duration,
        currentDelay: this.currentDelayMs,
        activeTasks: this.activeTasks,
        consecutiveErrors: this.consecutiveErrors
      })
    }
  }

  private async waitForSlot(): Promise<void> {
    // Wait for concurrency slot
    while (this.activeTasks >= this.config.maxConcurrency) {
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    // Adaptive delay based on error rate
    if (this.currentDelayMs > 0) {
      const jitter = Math.random() * 200 // Add 0-200ms jitter
      await new Promise(resolve => setTimeout(resolve, this.currentDelayMs + jitter))
    }
  }

  private onSuccess(): void {
    this.consecutiveErrors = 0
    this.lastSuccess = Date.now()
    
    // Gradually reduce delay on success
    if (this.currentDelayMs > this.config.initialDelayMs) {
      this.currentDelayMs = Math.max(
        this.config.initialDelayMs,
        this.currentDelayMs * 0.8
      )
    }
  }

  private onError(error: any): void {
    this.consecutiveErrors++
    
    // Check if it's a rate limiting error
    const isRateLimit = this.isRateLimitError(error)
    const is5xxError = this.is5xxError(error)
    
    if (isRateLimit || is5xxError) {
      // Exponential backoff for rate limits and server errors
      this.currentDelayMs = Math.min(
        this.config.maxDelayMs,
        this.currentDelayMs * this.config.backoffMultiplier
      )
      
      logger.warn(`${this.config.brand} rate limit or server error detected`, {
        error: error.message,
        newDelay: this.currentDelayMs,
        consecutiveErrors: this.consecutiveErrors
      })
    } else if (this.consecutiveErrors >= 5) {
      // Too many consecutive errors, slow down
      this.currentDelayMs = Math.min(
        this.config.maxDelayMs,
        this.currentDelayMs * 1.5
      )
      
      logger.warn(`${this.config.brand} too many consecutive errors`, {
        consecutiveErrors: this.consecutiveErrors,
        newDelay: this.currentDelayMs
      })
    }
  }

  private isRateLimitError(error: any): boolean {
    const message = error.message?.toLowerCase() || ''
    const status = error.status || error.response?.status
    
    return status === 429 || 
           message.includes('rate limit') ||
           message.includes('too many requests')
  }

  private is5xxError(error: any): boolean {
    const status = error.status || error.response?.status
    return status >= 500 && status < 600
  }

  getStats() {
    return {
      brand: this.config.brand,
      currentDelayMs: this.currentDelayMs,
      activeTasks: this.activeTasks,
      consecutiveErrors: this.consecutiveErrors,
      timeSinceLastSuccess: Date.now() - this.lastSuccess
    }
  }
}
