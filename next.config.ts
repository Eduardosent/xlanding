import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.openai.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Solo en desarrollo, permites esta IP local (ajusta el puerto si usas otro)
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: ['http://192.168.1.72:3000'],
  }),
};

export default nextConfig;
