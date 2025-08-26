import { PrismaClient } from '../generated/prisma'

const globalForPrisma = global as unknown as {
  prisma: PrismaClient
}

const prisma = globalForPrisma.prisma || new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  // Connection pool optimizasyonu
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  errorFormat: 'pretty',
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function connectPrisma() {
  try {
    await prisma.$connect()
    console.log('✅ Prisma connected successfully')
  } catch (e) {
    console.error('❌ Prisma connection failed:', e)
    // ignore: callers will handle errors
  }
}

export async function disconnectPrisma() {
  try {
    await prisma.$disconnect()
    console.log('✅ Prisma disconnected successfully')
  } catch (e) {
    console.error('❌ Prisma disconnection failed:', e)
    // ignore
  }
}

export default prisma
