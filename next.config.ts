// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    // این تنظیم به توربوپک می‌گوید که لوسید آیکون را به صورت بهینه و بدون خطای رزولوشن ماژول لود کند
    optimizePackageImports: ['lucide-react'],
  },
  
  // تنظیمات تصاویر
  images: {
    domains: [],
    unoptimized: false,
  },

  // هدرهای امنیتی
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;