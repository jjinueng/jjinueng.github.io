/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/jjinueng.github.io',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;