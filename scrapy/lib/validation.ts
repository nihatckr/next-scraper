import { z } from 'zod'
import { Request, Response, NextFunction } from 'express'

export function validateBody<T extends z.ZodTypeAny>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = schema.safeParse(req.body)
      if (!result.success) {
        return res.status(400).json({
          error: 'Validation failed',
          details: result.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        })
      }
      req.body = result.data
      next()
    } catch (error) {
      res.status(500).json({ error: 'Validation error' })
    }
  }
}

export function validateQuery<T extends z.ZodTypeAny>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = schema.safeParse(req.query)
      if (!result.success) {
        return res.status(400).json({
          error: 'Query validation failed',
          details: result.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        })
      }
      req.query = result.data as any
      next()
    } catch (error) {
      res.status(500).json({ error: 'Query validation error' })
    }
  }
}

export function validateParams<T extends z.ZodTypeAny>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = schema.safeParse(req.params)
      if (!result.success) {
        return res.status(400).json({
          error: 'Params validation failed',
          details: result.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        })
      }
      req.params = result.data as any
      next()
    } catch (error) {
      res.status(500).json({ error: 'Params validation error' })
    }
  }
}

// Common schemas
export const schemas = {
  // Auth schemas
  register: z.object({
    email: z.string().email('Valid email required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    name: z.string().optional()
  }),

  login: z.object({
    email: z.string().email('Valid email required'),
    password: z.string().min(1, 'Password required')
  }),

  updateProfile: z.object({
    name: z.string().min(1, 'Name required')
  }),

  // Query schemas
  pagination: z.object({
    page: z.string().optional().transform(val => val ? parseInt(val) : 1),
    limit: z.string().optional().transform(val => val ? parseInt(val) : 20),
    sort: z.string().optional(),
    order: z.enum(['asc', 'desc']).optional().default('asc')
  }),

  brandStats: z.object({
    period: z.enum(['7d', '30d', '90d']).optional().default('30d')
  }),

  categoryQuery: z.object({
    brand: z.string().optional(),
    leaf: z.string().optional().transform(val => val === 'true'),
    level: z.string().optional().transform(val => val ? parseInt(val) : undefined)
  }),

  brandComparison: z.object({
    metric: z.enum(['price', 'products', 'categories']).optional().default('price'),
    period: z.enum(['7d', '30d', '90d']).optional().default('30d')
  }),

  // Params schemas
  brandName: z.object({
    brandName: z.string().min(1, 'Brand name required')
  }),

  categoryId: z.object({
    categoryId: z.string().transform(val => parseInt(val))
  }),

  productId: z.object({
    productId: z.string().transform(val => parseInt(val))
  })
}
