import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
