import jwt, { type SignOptions, type Secret } from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { env } from './env'

export interface JwtPayload {
  sub: number
  email: string
  role: string
}

export function signToken(payload: JwtPayload): string {
  const options: SignOptions = { expiresIn: env.JWT_EXPIRES_IN as any }
  return jwt.sign(payload as any, env.JWT_SECRET as unknown as Secret, options)
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, env.JWT_SECRET) as unknown as JwtPayload
}

export async function hashPassword(plain: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(plain, salt)
}

export async function comparePassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash)
}

export function authMiddleware(requiredRole?: 'admin' | 'user') {
  return (req: any, res: any, next: any) => {
    try {
      const authHeader = req.get('Authorization') || ''
      const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null
      if (!token) return res.status(401).json({ error: 'Unauthorized' })
      const payload = verifyToken(token)
      req.user = payload
      if (requiredRole && payload.role !== requiredRole) {
        return res.status(403).json({ error: 'Forbidden' })
      }
      next()
    } catch (err) {
      return res.status(401).json({ error: 'Invalid token' })
    }
  }
}


