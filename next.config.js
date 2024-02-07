/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**.squadnet.dom',
      },
      {
        protocol: 'http',
        hostname: '**.squaddev.biz',
      },
      {
        protocol: 'https',
        hostname: '**.moonstride.com',
      },
      {
        protocol: "http",
        hostname: "**.moonstride.local",
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ]
  },
  env: {
    ROOT: __dirname,
  }
}

module.exports = nextConfig
