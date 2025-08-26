import { createClient, RedisClientType } from 'redis'
import { enhancedLogger } from './enhanced-logger'

// Redis client instance
let redisClient: RedisClientType | null = null
let redisAvailable = false
let connectionAttempts = 0
const maxConnectionAttempts = 3

// Redis bağlantısını başlat
export async function initRedis(): Promise<RedisClientType> {
  if (redisClient && redisAvailable) {
    return redisClient
  }

  if (connectionAttempts >= maxConnectionAttempts) {
    enhancedLogger.warn('Redis max connection attempts reached, working without cache', 
      { attempts: connectionAttempts }, 'REDIS_FALLBACK')
    throw new Error('Redis unavailable after max attempts')
  }

  connectionAttempts++

  try {
    redisClient = createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379',
      socket: {
        connectTimeout: 5000, // Reduced timeout
        reconnectStrategy: (retries) => {
          if (retries > 3) {
            enhancedLogger.error('Redis reconnection failed after 3 attempts', 
              { retries }, 'REDIS_RECONNECT')
            return new Error('Redis reconnection failed')
          }
          return Math.min(retries * 1000, 3000)
        }
      },
    })

    // Error handling
    redisClient.on('error', (err) => {
      redisAvailable = false
      enhancedLogger.error('Redis Client Error:', { error: err.message }, 'REDIS_ERROR')
    })

    redisClient.on('connect', () => {
      redisAvailable = true
      connectionAttempts = 0 // Reset on successful connection
      enhancedLogger.info('Redis Client Connected', {}, 'REDIS_CONNECT')
    })

    redisClient.on('ready', () => {
      redisAvailable = true
      enhancedLogger.info('Redis Client Ready', {}, 'REDIS_READY')
    })

    redisClient.on('end', () => {
      redisAvailable = false
      enhancedLogger.warn('Redis Client Disconnected', {}, 'REDIS_DISCONNECT')
    })

    await redisClient.connect()
    redisAvailable = true
    return redisClient
  } catch (error) {
    redisAvailable = false
    enhancedLogger.error('Redis connection failed:', 
      { error: (error as Error).message, attempt: connectionAttempts }, 'REDIS_INIT_FAILED')
    throw error
  }
}

// Cache key'leri oluştur
export const cacheKeys = {
  productDetails: (productId: number, brand: string) => `product_details_${brand}_${productId}`,
  categoryProducts: (categoryId: number, brand: string) => `category_products_${brand}_${categoryId}`,
  brandData: (brand: string) => `brand_data_${brand}`,
  productIds: (categoryId: number, brand: string) => `product_ids_${brand}_${categoryId}`,
}

// Cache TTL (Time To Live) - 1 saat
export const CACHE_TTL = 3600

// Cache interface
export interface CacheInterface {
  get<T>(key: string): Promise<T | null>
  set<T>(key: string, value: T, ttl?: number): Promise<void>
  delete(key: string): Promise<void>
  exists(key: string): Promise<boolean>
  flush(): Promise<void>
  getStats(): Promise<{ keys: number; memory: string }>
  isAvailable(): boolean
}

// In-memory fallback cache
class MemoryCache implements CacheInterface {
  private cache = new Map<string, { value: any; expires: number }>()
  private maxSize = 1000 // Limit memory usage

  async get<T>(key: string): Promise<T | null> {
    const item = this.cache.get(key)
    if (!item) return null
    
    if (Date.now() > item.expires) {
      this.cache.delete(key)
      return null
    }
    
    return item.value as T
  }

  async set<T>(key: string, value: T, ttl: number = CACHE_TTL): Promise<void> {
    // Clean up expired items if cache is getting full
    if (this.cache.size >= this.maxSize) {
      this.cleanupExpired()
    }
    
    // If still full, remove oldest items
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value
      if (oldestKey) this.cache.delete(oldestKey)
    }
    
    this.cache.set(key, {
      value,
      expires: Date.now() + (ttl * 1000)
    })
  }

  async delete(key: string): Promise<void> {
    this.cache.delete(key)
  }

  async exists(key: string): Promise<boolean> {
    const item = this.cache.get(key)
    if (!item) return false
    
    if (Date.now() > item.expires) {
      this.cache.delete(key)
      return false
    }
    
    return true
  }

  async flush(): Promise<void> {
    this.cache.clear()
  }

  async getStats(): Promise<{ keys: number; memory: string }> {
    this.cleanupExpired()
    return {
      keys: this.cache.size,
      memory: 'Memory Cache (fallback)'
    }
  }

  isAvailable(): boolean {
    return true
  }

  private cleanupExpired(): void {
    const now = Date.now()
    for (const [key, item] of this.cache.entries()) {
      if (now > item.expires) {
        this.cache.delete(key)
      }
    }
  }
}

// Redis cache implementation
export class RedisCache implements CacheInterface {
  private client: RedisClientType

  constructor(client: RedisClientType) {
    this.client = client
  }

  async get<T>(key: string): Promise<T | null> {
    if (!redisAvailable) return null
    
    try {
      const value = await this.client.get(key)
      if (!value) return null
      
      return JSON.parse(value) as T
    } catch (error) {
      enhancedLogger.error(`Redis get error for key ${key}:`, 
        { error: (error as Error).message }, 'REDIS_GET_ERROR')
      redisAvailable = false
      return null
    }
  }

  async set<T>(key: string, value: T, ttl: number = CACHE_TTL): Promise<void> {
    if (!redisAvailable) return
    
    try {
      const serializedValue = JSON.stringify(value)
      await this.client.setEx(key, ttl, serializedValue)
      enhancedLogger.debug(`Cache set: ${key} (TTL: ${ttl}s)`, undefined, 'REDIS_CACHE')
    } catch (error) {
      enhancedLogger.error(`Redis set error for key ${key}:`, 
        { error: (error as Error).message }, 'REDIS_SET_ERROR')
      redisAvailable = false
    }
  }

  async delete(key: string): Promise<void> {
    try {
      await this.client.del(key)
      enhancedLogger.debug(`Cache deleted: ${key}`)
    } catch (error) {
      enhancedLogger.error(`Redis delete error for key ${key}:`, { error }, 'REDIS_DELETE_ERROR')
    }
  }

  async exists(key: string): Promise<boolean> {
    try {
      const result = await this.client.exists(key)
      return result === 1
    } catch (error) {
      enhancedLogger.error(`Redis exists error for key ${key}:`, { error }, 'REDIS_EXISTS_ERROR')
      return false
    }
  }

  async flush(): Promise<void> {
    try {
      await this.client.flushDb()
      enhancedLogger.info('Redis cache flushed', {}, 'REDIS_FLUSH')
    } catch (error) {
      enhancedLogger.error('Redis flush error:', { error }, 'REDIS_FLUSH_ERROR')
    }
  }

  async getStats(): Promise<{ keys: number; memory: string }> {
    try {
      const info = await this.client.info({ section: 'memory' } as any)
      const keys = await this.client.dbSize()
      
      // Memory usage'ı parse et
      const memoryMatch = info?.match(/used_memory_human:(\S+)/)
      const memory: string = memoryMatch && memoryMatch[1] ? memoryMatch[1] : 'Unknown'
      
      return { keys, memory }
    } catch (error) {
      enhancedLogger.error('Redis stats error:', { error }, 'REDIS_STATS_ERROR')
      return { keys: 0, memory: 'Unknown' }
    }
  }

  isAvailable(): boolean {
    return redisAvailable
  }
}

// Global cache instances
let cacheInstance: CacheInterface | null = null
let fallbackCache: MemoryCache | null = null

// Cache instance'ını al (fallback ile)
export async function getCache(): Promise<CacheInterface> {
  // Try Redis first
  if (!cacheInstance) {
    try {
      const client = await initRedis()
      cacheInstance = new RedisCache(client)
      enhancedLogger.info('Using Redis cache', {}, 'CACHE_INIT')
    } catch (error) {
      enhancedLogger.warn('Redis unavailable, falling back to memory cache', 
        { error: (error as Error).message }, 'CACHE_FALLBACK')
      
      // Initialize fallback cache
      if (!fallbackCache) {
        fallbackCache = new MemoryCache()
      }
      cacheInstance = fallbackCache
    }
  }
  
  // If Redis cache becomes unavailable, switch to fallback
  if (cacheInstance instanceof RedisCache && !cacheInstance.isAvailable()) {
    enhancedLogger.warn('Redis cache unavailable, switching to memory cache', {}, 'CACHE_FALLBACK_SWITCH')
    
    if (!fallbackCache) {
      fallbackCache = new MemoryCache()
    }
    cacheInstance = fallbackCache
  }
  
  return cacheInstance
}

// Cache'i kapat
export async function closeCache(): Promise<void> {
  if (redisClient) {
    await redisClient.quit()
    redisClient = null
    redisAvailable = false
  }
  
  if (fallbackCache) {
    await fallbackCache.flush()
    fallbackCache = null
  }
  
  cacheInstance = null
  enhancedLogger.info('Cache system closed', {}, 'CACHE_CLOSE')
}

// Graceful shutdown için
process.on('SIGINT', async () => {
  await closeCache()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  await closeCache()
  process.exit(0)
})
