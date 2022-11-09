/** @type {import('next').NextConfig} */
const nextConfig =  {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
