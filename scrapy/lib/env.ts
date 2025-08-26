import 'dotenv/config'
import { logger } from './logger'

// Environment configuration type
export interface Env {
  NODE_ENV: 'development' | 'production' | 'test'
  DATABASE_URL: string
  PORT: number
  JWT_SECRET: string
  JWT_EXPIRES_IN: string

  // API Configuration
  MAX_RETRIES: number
  RETRY_DELAY: number
  REQUEST_TIMEOUT: number

  // Database Configuration
  DB_CONNECTION_TIMEOUT: number
  DB_POOL_SIZE: number

  // Batch Processing
  BATCH_SIZE: number
  PRODUCT_LIMIT_DEV: number
  PRODUCT_LIMIT_PROD: number
}

function validateEnv(): Env {
  try {
    const requiredVars = ['DATABASE_URL', 'JWT_SECRET']
    const missing = requiredVars.filter((key) => !process.env[key])

    if (missing.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missing.join(', ')}`,
      )
    }

    const env: Env = {
      NODE_ENV: (process.env.NODE_ENV as any) || 'development',
      DATABASE_URL: process.env.DATABASE_URL!,
      PORT: parseInt(process.env.PORT || '3002'),
      JWT_SECRET: process.env.JWT_SECRET!,
      JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',

      // API Configuration
      MAX_RETRIES: parseInt(process.env.MAX_RETRIES || '3'),
      RETRY_DELAY: parseInt(process.env.RETRY_DELAY || '1000'),
      REQUEST_TIMEOUT: parseInt(process.env.REQUEST_TIMEOUT || '30000'),

      // Database Configuration
      DB_CONNECTION_TIMEOUT: parseInt(
        process.env.DB_CONNECTION_TIMEOUT || '60000',
      ),
      DB_POOL_SIZE: parseInt(process.env.DB_POOL_SIZE || '10'),

      // Batch Processing
      BATCH_SIZE: parseInt(process.env.BATCH_SIZE || '100'),
      PRODUCT_LIMIT_DEV: parseInt(process.env.PRODUCT_LIMIT_DEV || '3'),
      PRODUCT_LIMIT_PROD: parseInt(process.env.PRODUCT_LIMIT_PROD || '50'),
    }

    // Helper functions
    const isProduction = () => env.NODE_ENV === 'production'

    if (isProduction()) {
      logger.info('Production environment detected', { env: env.NODE_ENV })
    } else {
      logger.debug('Environment configuration loaded', {
        env: env.NODE_ENV,
        productLimit: isProduction()
          ? env.PRODUCT_LIMIT_PROD
          : env.PRODUCT_LIMIT_DEV,
      })
    }

    return env
  } catch (error) {
    logger.error('Environment validation failed', { error })
    process.exit(1)
  }
}

export const env = validateEnv()

// Helper functions
export const isDevelopment = () => env.NODE_ENV === 'development'
export const isProduction = () => env.NODE_ENV === 'production'
export const getProductLimit = () =>
  isProduction() ? env.PRODUCT_LIMIT_PROD : env.PRODUCT_LIMIT_DEV
