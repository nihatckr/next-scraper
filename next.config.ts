import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.pullandbear.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
