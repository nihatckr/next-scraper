import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import { Request, Response } from 'express'

// Global rate limiter
export const globalRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req: Request) => {
    // Skip rate limiting for health checks
    return req.path === '/api/health'
  }
})

// Auth rate limiter (more restrictive)
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 auth requests per windowMs
  message: {
    error: 'Too many authentication attempts, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true
})

// API-specific rate limiter (moderate)
export const apiRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60, // limit each IP to 60 requests per minute
  message: {
    error: 'API rate limit exceeded, please slow down.',
    retryAfter: '1 minute'
  },
  standardHeaders: true,
  legacyHeaders: false
})

// Heavy operations rate limiter (very restrictive)
export const heavyRateLimit = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // limit each IP to 5 heavy requests per 5 minutes
  message: {
    error: 'Heavy operation rate limit exceeded, please wait.',
    retryAfter: '5 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false
})

// Helmet configuration for security headers
export const helmetConfig = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false,
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
})

// Request size limiter
export function requestSizeLimit(req: Request, res: Response, next: any) {
  const contentLength = req.get('content-length')
  if (contentLength && parseInt(contentLength) > 10 * 1024 * 1024) { // 10MB
    return res.status(413).json({
      error: 'Request entity too large',
      maxSize: '10MB'
    })
  }
  next()
}

// IP whitelist for admin operations (optional)
export function adminIPWhitelist(allowedIPs: string[] = []) {
  return (req: Request, res: Response, next: any) => {
    if (allowedIPs.length === 0) {
      return next() // No IP restriction if list is empty
    }

    const clientIP = req.ip || req.connection.remoteAddress
    if (!clientIP || !allowedIPs.includes(clientIP)) {
      return res.status(403).json({
        error: 'Access denied from this IP address'
      })
    }
    next()
  }
}
