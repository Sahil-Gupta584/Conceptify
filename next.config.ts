import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  theme: {
    extend: {
      animation: {
        "bounce-fast": "bounce 0.3s infinite", // Custom animation with a 0.3s duration
      },
    },
  },
  
  future: { webpack5: true },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
