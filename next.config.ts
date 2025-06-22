import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gymbeam.sk',
        pathname: '/media/logo/stores/**'
      }
    ]
  }
}

export default nextConfig