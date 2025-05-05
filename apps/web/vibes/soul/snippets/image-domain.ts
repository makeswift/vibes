import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/s.mkswft.com/**',
        port: '',
      },
    ],
  },
};

export default nextConfig;
