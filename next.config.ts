import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '127.0.0.1',
    '192.168.1.10'
  ],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "odoocdn.com" },
      { protocol: "https", hostname: "www.odoo.com" },
      { protocol: "https", hostname: "download.odoocdn.com" },
      { protocol: "https", hostname: "qvoo.io" },
    ],
  },
};

export default nextConfig;
