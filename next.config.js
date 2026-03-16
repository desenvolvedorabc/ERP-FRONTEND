/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: { appDir: true },
  images: {
    domains: [process.env.NEXT_PUBLIC_DOMAIN_URL || 'localhost'],
    unoptimized: true,
  },
}

module.exports = nextConfig
