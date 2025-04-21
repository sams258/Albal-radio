import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dione.shoutca.st',
      },
      {
        protocol: 'https',
        hostname: 'is2-ssl.mzstatic.com',
      },
    ],
  },
};

export default nextConfig;
