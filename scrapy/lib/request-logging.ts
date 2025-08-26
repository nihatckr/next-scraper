import { Request, Response, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { enhancedLogger } from './enhanced-logger'

declare global {
  namespace Express {
    interface Request {
      requestId?: string
      userId?: number
      startTime?: number
    }
  }
}

export function requestIdMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    // Generate unique request ID
    req.requestId = uuidv4()
    req.startTime = Date.now()
    
    // Add to response headers for debugging
    res.setHeader('X-Request-ID', req.requestId)
    
    // Extract user ID from auth middleware if available
    const user = (req as any).user
    if (user && user.sub) {
      req.userId = user.sub
    }
    
    next()
  }
}

export function requestLoggingMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    const startTime = req.startTime || Date.now()
    
    // Log incoming request
    enhancedLogger.request(
      req.requestId || 'unknown',
      req.method,
      req.path,
      req.userId
    )
    
    // Capture response
    const originalSend = res.send
    res.send = function(body) {
      const duration = Date.now() - startTime
      
      // Log response
      enhancedLogger.response(
        req.requestId || 'unknown',
        req.method,
        req.path,
        res.statusCode,
        duration,
        req.userId
      )
      
      return originalSend.call(this, body)
    }
    
    next()
  }
}

export function errorLoggingMiddleware() {
  return (error: any, req: Request, res: Response, next: NextFunction) => {
    enhancedLogger.error(
      `Unhandled error: ${error.message}`,
      {
        stack: error.stack,
        method: req.method,
        path: req.path,
        body: req.body,
        query: req.query,
        params: req.params
      },
      'ERROR_HANDLER',
      req.requestId,
      req.userId
    )
    
    next(error)
  }
}
