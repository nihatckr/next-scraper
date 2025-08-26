import prisma from './prisma'
import { logger } from './logger'

type ShutdownHandler = () => Promise<void> | void

class GracefulShutdown {
  private handlers: ShutdownHandler[] = []
  private isShuttingDown = false
  private shutdownTimeoutMs = 30000 // 30 seconds

  constructor() {
    this.setupSignalHandlers()
  }

  private setupSignalHandlers() {
    // Handle different shutdown signals
    process.on('SIGTERM', () => this.handleShutdown('SIGTERM'))
    process.on('SIGINT', () => this.handleShutdown('SIGINT'))
    process.on('SIGUSR2', () => this.handleShutdown('SIGUSR2')) // Nodemon

    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      logger.error('Uncaught Exception', { error })
      this.handleShutdown('uncaughtException')
    })

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
      logger.error('Unhandled Rejection', { reason, promise })
      this.handleShutdown('unhandledRejection')
    })
  }

  private async handleShutdown(signal: string) {
    if (this.isShuttingDown) {
      logger.warn(`Shutdown already in progress, ignoring ${signal}`)
      return
    }

    this.isShuttingDown = true
    logger.info(`Graceful shutdown initiated by ${signal}`)

    // Set a timeout for the shutdown process
    const shutdownTimer = setTimeout(() => {
      logger.error(
        `Shutdown timeout exceeded (${this.shutdownTimeoutMs}ms), forcing exit`,
      )
      process.exit(1)
    }, this.shutdownTimeoutMs)

    try {
      // Run shutdown handlers in reverse order (LIFO)
      const reversedHandlers = [...this.handlers].reverse()

      for (const handler of reversedHandlers) {
        try {
          await Promise.resolve(handler())
        } catch (error) {
          logger.error('Error in shutdown handler', { error })
        }
      }

      // Close database connection
      await prisma.$disconnect()
      logger.info('Database connection closed')

      clearTimeout(shutdownTimer)
      logger.info('Graceful shutdown completed')
      process.exit(0)
    } catch (error) {
      clearTimeout(shutdownTimer)
      logger.error('Error during shutdown', { error })
      process.exit(1)
    }
  }

  public addHandler(handler: ShutdownHandler) {
    this.handlers.push(handler)
    logger.debug('Shutdown handler added', {
      totalHandlers: this.handlers.length,
    })
  }

  public removeHandler(handler: ShutdownHandler) {
    const index = this.handlers.indexOf(handler)
    if (index > -1) {
      this.handlers.splice(index, 1)
      logger.debug('Shutdown handler removed', {
        totalHandlers: this.handlers.length,
      })
    }
  }
}

// Singleton instance
export const gracefulShutdown = new GracefulShutdown()

// Helper function for easier usage
export function onShutdown(handler: ShutdownHandler) {
  gracefulShutdown.addHandler(handler)
}
