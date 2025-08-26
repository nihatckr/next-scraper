import { logger } from './logger'

export type RouteKey = string // e.g. "GET /api/products"

export interface RouteMetric {
  method: string
  path: string
  count: number
  totalMs: number
  minMs: number
  maxMs: number
  p95Ms: number
  avgMs: number
  lastStatus?: number | undefined
}

export interface ErrorRecord {
  message: string
  path?: string
  status?: number
  timestamp: Date
}

class MetricsStore {
  private routeDurations: Map<RouteKey, number[]> = new Map()
  private routeMeta: Map<RouteKey, { method: string; path: string; lastStatus?: number }> = new Map()
  private errors: ErrorRecord[] = []

  recordRequest(method: string, path: string, status: number, durationMs: number): void {
    const key = `${method.toUpperCase()} ${path}`
    if (!this.routeDurations.has(key)) {
      this.routeDurations.set(key, [])
      this.routeMeta.set(key, { method: method.toUpperCase(), path })
    }
    const arr = this.routeDurations.get(key)!
    arr.push(durationMs)
    // Sadece son 5000 örneği sakla
    if (arr.length > 5000) {
      arr.splice(0, arr.length - 5000)
    }
    const meta = this.routeMeta.get(key)!
    meta.lastStatus = status
  }

  recordError(err: any, path?: string, status?: number): void {
    const message = err?.message || String(err)
    const entry: ErrorRecord = { message, timestamp: new Date() }
    if (path !== undefined) entry.path = path
    if (typeof status === 'number') entry.status = status
    this.errors.push(entry)
    if (this.errors.length > 500) {
      this.errors.splice(0, this.errors.length - 500)
    }
  }

  private percentile(sorted: number[], p: number): number {
    if (sorted.length === 0) return 0
    const idx = Math.ceil((p / 100) * sorted.length) - 1
    return sorted[Math.max(0, Math.min(idx, sorted.length - 1))]
  }

  getRoutes(): RouteMetric[] {
    const result: RouteMetric[] = []
    for (const [key, durations] of this.routeDurations.entries()) {
      const meta = this.routeMeta.get(key)!
      const sorted = durations.slice().sort((a, b) => a - b)
      const count = durations.length
      const totalMs = durations.reduce((s, v) => s + v, 0)
      const avgMs = count > 0 ? totalMs / count : 0
      const route: RouteMetric = {
        method: meta.method,
        path: meta.path,
        count,
        totalMs,
        minMs: sorted[0] || 0,
        maxMs: sorted[sorted.length - 1] || 0,
        p95Ms: this.percentile(sorted, 95),
        avgMs,
      }
      if (typeof meta.lastStatus === 'number') {
        route.lastStatus = meta.lastStatus
      }
      result.push(route)
    }
    // En çok kullanılanları öne getir
    result.sort((a, b) => b.count - a.count)
    return result
  }

  getErrors(limit = 100): ErrorRecord[] {
    return this.errors.slice(-limit).reverse()
  }

  getSnapshot() {
    const routes = this.getRoutes()
    const totalRequests = routes.reduce((s, r) => s + r.count, 0)
    const avgLatency = routes.length > 0 ? routes.reduce((s, r) => s + r.avgMs, 0) / routes.length : 0
    return {
      totalRequests,
      routeCount: routes.length,
      avgLatency,
      topRoutes: routes.slice(0, 10),
      errors: this.getErrors(50),
      timestamp: new Date(),
    }
  }
}

export const metrics = new MetricsStore()

// Small helper to time async handlers
export async function time<T>(label: string, fn: () => Promise<T>): Promise<T> {
  const start = process.hrtime.bigint()
  try {
    const result = await fn()
    return result
  } finally {
    const end = process.hrtime.bigint()
    const ms = Number(end - start) / 1_000_000
    logger.debug(`[metrics] ${label} ${ms.toFixed(2)}ms`)
  }
}


