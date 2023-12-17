/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    ROOT: __dirname,
  }
}

module.exports = nextConfig
