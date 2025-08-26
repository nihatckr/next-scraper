import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import * as rfs from 'rotating-file-stream'

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export interface LogEntry {
  timestamp: Date
  level: LogLevel
  message: string
  data?: any
  source?: string | undefined
  requestId?: string
  userId?: number
}

interface LoggerConfig {
  logLevel: LogLevel
  logDir: string
  enableRotation: boolean
  maxSize: string
  maxFiles: number
  enableAsync: boolean
}

class EnhancedLogger {
  private config: LoggerConfig
  private rotatingStream?: any
  private pendingLogs: string[] = []
  private flushInterval?: NodeJS.Timeout
  private isShuttingDown = false

  constructor(config?: Partial<LoggerConfig>) {
    this.config = {
      logLevel: process.env.NODE_ENV === 'production' ? LogLevel.INFO : LogLevel.DEBUG,
      logDir: join(process.cwd(), 'logs'),
      enableRotation: true,
      maxSize: '10M',
      maxFiles: 14, // Keep 14 days
      enableAsync: true,
      ...config
    }

    this.init()
  }

  private init() {
    // Logs klasörünü oluştur
    if (!existsSync(this.config.logDir)) {
      mkdirSync(this.config.logDir, { recursive: true })
    }

    if (this.config.enableRotation) {
      // Rotating file stream (daily rotation)
      this.rotatingStream = rfs.createStream('app.log', {
        path: this.config.logDir,
        size: this.config.maxSize,
        interval: '1d', // Daily rotation
        maxFiles: this.config.maxFiles,
        compress: 'gzip'
      })

      this.rotatingStream.on('error', (err: Error) => {
        console.error('Rotating file stream error:', err)
      })

      this.rotatingStream.on('rotation', (filename: string) => {
        console.log(`Log rotated: ${filename}`)
      })
    }

    // Async yazma için flush interval
    if (this.config.enableAsync) {
      this.flushInterval = setInterval(() => {
        this.flushPendingLogs()
      }, 1000) // Flush every second
    }

    // Graceful shutdown
    process.on('SIGINT', () => this.shutdown())
    process.on('SIGTERM', () => this.shutdown())
    process.on('SIGHUP', () => this.shutdown())
  }

  private formatLogEntry(entry: LogEntry): string {
    const levelName = LogLevel[entry.level]
    const timestamp = entry.timestamp.toISOString()
    const source = entry.source ? `[${entry.source}] ` : ''
    const requestId = entry.requestId ? `[req:${entry.requestId}] ` : ''
    const userId = entry.userId ? `[user:${entry.userId}] ` : ''
    const data = entry.data ? ` | Data: ${JSON.stringify(entry.data)}` : ''
    
    return `${timestamp} [${levelName}] ${source}${requestId}${userId}${entry.message}${data}\n`
  }

  private async writeLog(entry: LogEntry) {
    if (entry.level < this.config.logLevel) return

    const logLine = this.formatLogEntry(entry)

    // Console output with colors
    this.writeToConsole(entry, logLine)

    // File output
    if (this.config.enableAsync) {
      this.pendingLogs.push(logLine)
    } else {
      this.writeToFile(logLine)
    }
  }

  private writeToConsole(entry: LogEntry, logLine: string) {
    const emoji = this.getEmojiForLevel(entry.level)
    const color = this.getColorForLevel(entry.level)
    
    if (process.env.NODE_ENV !== 'production') {
      console.log(`${emoji} ${color}${logLine.trim()}\x1b[0m`)
    } else {
      console.log(`${emoji} ${logLine.trim()}`)
    }
  }

  private writeToFile(logLine: string) {
    try {
      if (this.rotatingStream) {
        this.rotatingStream.write(logLine)
      } else {
        // Fallback to regular file
        const logFile = join(
          this.config.logDir,
          `app-${new Date().toISOString().split('T')[0]}.log`,
        )
        const fs = require('fs')
        fs.appendFileSync(logFile, logLine)
      }
    } catch (error) {
      console.error('Log yazma hatası:', error)
    }
  }

  private flushPendingLogs() {
    if (this.pendingLogs.length === 0) return

    const logsToFlush = [...this.pendingLogs]
    this.pendingLogs = []

    logsToFlush.forEach(logLine => {
      this.writeToFile(logLine)
    })
  }

  private getEmojiForLevel(level: LogLevel): string {
    switch (level) {
      case LogLevel.ERROR: return '❌'
      case LogLevel.WARN: return '⚠️ '
      case LogLevel.INFO: return '✅'
      case LogLevel.DEBUG: return '🔍'
      default: return '📝'
    }
  }

  private getColorForLevel(level: LogLevel): string {
    switch (level) {
      case LogLevel.ERROR: return '\x1b[31m' // Red
      case LogLevel.WARN: return '\x1b[33m'  // Yellow
      case LogLevel.INFO: return '\x1b[32m'  // Green
      case LogLevel.DEBUG: return '\x1b[36m' // Cyan
      default: return '\x1b[0m'
    }
  }

  private log(level: LogLevel, message: string, data?: any, source?: string, requestId?: string, userId?: number) {
    if (this.isShuttingDown) return

    const entry: LogEntry = {
      timestamp: new Date(),
      level,
      message,
      data,
      source,
      requestId,
      userId
    }

    this.writeLog(entry)
  }

  debug(message: string, data?: any, source?: string, requestId?: string, userId?: number) {
    this.log(LogLevel.DEBUG, message, data, source, requestId, userId)
  }

  info(message: string, data?: any, source?: string, requestId?: string, userId?: number) {
    this.log(LogLevel.INFO, message, data, source, requestId, userId)
  }

  warn(message: string, data?: any, source?: string, requestId?: string, userId?: number) {
    this.log(LogLevel.WARN, message, data, source, requestId, userId)
  }

  error(message: string, data?: any, source?: string, requestId?: string, userId?: number) {
    this.log(LogLevel.ERROR, message, data, source, requestId, userId)
  }

  // Request-specific logging
  request(requestId: string, method: string, url: string, userId?: number) {
    this.info(`${method} ${url}`, { requestId, userId }, 'REQUEST', requestId, userId)
  }

  response(requestId: string, method: string, url: string, status: number, duration: number, userId?: number) {
    const level = status >= 400 ? LogLevel.ERROR : status >= 300 ? LogLevel.WARN : LogLevel.INFO
    this.log(level, `${method} ${url} ${status} - ${duration}ms`, 
      { requestId, status, duration }, 'RESPONSE', requestId, userId)
  }

  // Performance logging
  performance(operation: string, duration: number, data?: any, source?: string) {
    this.info(`Performance: ${operation} completed in ${duration}ms`, 
      { operation, duration, ...data }, source || 'PERF')
  }

  // Security logging
  security(event: string, data?: any, userId?: number, requestId?: string) {
    this.warn(`Security Event: ${event}`, data, 'SECURITY', requestId, userId)
  }

  // Async flush for immediate write
  async flush(): Promise<void> {
    return new Promise((resolve) => {
      this.flushPendingLogs()
      if (this.rotatingStream) {
        this.rotatingStream.write('', () => resolve())
      } else {
        resolve()
      }
    })
  }

  // Graceful shutdown
  async shutdown(): Promise<void> {
    if (this.isShuttingDown) return
    
    this.isShuttingDown = true
    console.log('🔄 Logger shutting down...')

    // Clear interval
    if (this.flushInterval) {
      clearInterval(this.flushInterval)
    }

    // Flush pending logs
    this.flushPendingLogs()

    // Close rotating stream
    if (this.rotatingStream) {
      await new Promise<void>((resolve) => {
        this.rotatingStream.end(() => {
          console.log('✅ Logger shutdown complete')
          resolve()
        })
      })
    }
  }

  // Get log stats
  getStats() {
    return {
      pendingLogs: this.pendingLogs.length,
      config: this.config,
      isShuttingDown: this.isShuttingDown
    }
  }
}

// Singleton instance
export const enhancedLogger = new EnhancedLogger()

// Backwards compatibility with old logger
export const logger = {
  debug: (msg: string, data?: any, source?: string) => enhancedLogger.debug(msg, data, source),
  info: (msg: string, data?: any, source?: string) => enhancedLogger.info(msg, data, source),
  warn: (msg: string, data?: any, source?: string) => enhancedLogger.warn(msg, data, source),
  error: (msg: string, data?: any, source?: string) => enhancedLogger.error(msg, data, source),
}

export default enhancedLogger
