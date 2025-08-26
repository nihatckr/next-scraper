import prisma from './prisma'
import { logger } from './logger'
import { env } from './env'

export interface HealthStatus {
  status: 'healthy' | 'unhealthy' | 'degraded'
  timestamp: Date
  checks: {
    database: HealthCheck
    environment: HealthCheck
    disk: HealthCheck
  }
}

export interface HealthCheck {
  status: 'pass' | 'fail' | 'warn'
  responseTime?: number
  message?: string
}

export async function performHealthCheck(): Promise<HealthStatus> {
  const startTime = Date.now()

  try {
    const checks = await Promise.allSettled([
      checkDatabase(),
      checkEnvironment(),
      checkDisk(),
    ])

    const database =
      checks[0].status === 'fulfilled'
        ? checks[0].value
        : {
            status: 'fail' as const,
            message: 'Database check failed',
          }
    const environment =
      checks[1].status === 'fulfilled'
        ? checks[1].value
        : {
            status: 'fail' as const,
            message: 'Environment check failed',
          }
    const disk =
      checks[2].status === 'fulfilled'
        ? checks[2].value
        : {
            status: 'fail' as const,
            message: 'Disk check failed',
          }

    const overallStatus = determineOverallStatus([database, environment, disk])

    const healthStatus: HealthStatus = {
      status: overallStatus,
      timestamp: new Date(),
      checks: { database, environment, disk },
    }

    const totalTime = Date.now() - startTime
    logger.info('Health check completed', {
      status: overallStatus,
      responseTime: totalTime,
      checks: Object.entries(healthStatus.checks).map(([name, check]) => ({
        name,
        status: check.status,
        responseTime: check.responseTime,
      })),
    })

    return healthStatus
  } catch (error) {
    logger.error('Health check failed', { error })
    return {
      status: 'unhealthy',
      timestamp: new Date(),
      checks: {
        database: { status: 'fail', message: 'Health check error' },
        environment: { status: 'fail', message: 'Health check error' },
        disk: { status: 'fail', message: 'Health check error' },
      },
    }
  }
}

async function checkDatabase(): Promise<HealthCheck> {
  const startTime = Date.now()

  try {
    // Simple query to check connection
    await prisma.$queryRaw`SELECT 1`

    const responseTime = Date.now() - startTime
    const status = responseTime > 1000 ? 'warn' : 'pass'

    return {
      status,
      responseTime,
      message:
        status === 'warn' ? 'Database response slow' : 'Database connected',
    }
  } catch (error: any) {
    return {
      status: 'fail',
      responseTime: Date.now() - startTime,
      message: `Database connection failed: ${error.message}`,
    }
  }
}

async function checkEnvironment(): Promise<HealthCheck> {
  try {
    // Check required environment variables
    const requiredVars = ['DATABASE_URL']
    const missing = requiredVars.filter((key) => !process.env[key])

    if (missing.length > 0) {
      return {
        status: 'fail',
        message: `Missing environment variables: ${missing.join(', ')}`,
      }
    }

    // Check if we're in a valid environment
    if (!['development', 'production', 'test'].includes(env.NODE_ENV)) {
      return {
        status: 'warn',
        message: `Unexpected NODE_ENV: ${env.NODE_ENV}`,
      }
    }

    return {
      status: 'pass',
      message: 'Environment configuration valid',
    }
  } catch (error: any) {
    return {
      status: 'fail',
      message: `Environment check failed: ${error.message}`,
    }
  }
}

async function checkDisk(): Promise<HealthCheck> {
  try {
    const { execSync } = await import('child_process')

    // Check disk usage (Unix/macOS)
    try {
      const output = execSync('df -h / | tail -1').toString()
      const usage = output.split(/\s+/)[4]

      if (!usage) {
        throw new Error('Could not parse disk usage')
      }

      const percentage = parseInt(usage.replace('%', ''))

      if (percentage > 90) {
        return {
          status: 'fail',
          message: `Disk usage critical: ${percentage}%`,
        }
      } else if (percentage > 80) {
        return {
          status: 'warn',
          message: `Disk usage high: ${percentage}%`,
        }
      }

      return {
        status: 'pass',
        message: `Disk usage normal: ${percentage}%`,
      }
    } catch {
      // If df command fails, just return a basic pass
      return {
        status: 'pass',
        message: 'Disk check skipped (command not available)',
      }
    }
  } catch (error: any) {
    return {
      status: 'warn',
      message: `Disk check failed: ${error.message}`,
    }
  }
}

function determineOverallStatus(checks: HealthCheck[]): HealthStatus['status'] {
  const hasFail = checks.some((check) => check.status === 'fail')
  const hasWarn = checks.some((check) => check.status === 'warn')

  if (hasFail) return 'unhealthy'
  if (hasWarn) return 'degraded'
  return 'healthy'
}

// Scheduled health check for monitoring
export function startHealthCheckSchedule(intervalMs: number = 30000) {
  if (env.NODE_ENV === 'production') {
    logger.info('Starting health check schedule', { intervalMs })

    setInterval(async () => {
      const health = await performHealthCheck()

      if (health.status === 'unhealthy') {
        logger.error('System health check failed', { health })
      } else if (health.status === 'degraded') {
        logger.warn('System health degraded', { health })
      }
    }, intervalMs)
  }
}
