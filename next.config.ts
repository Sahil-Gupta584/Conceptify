import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  theme: {
    extend: {
      animation: {
        'bounce-fast': 'bounce 0.3s infinite', // Custom animation with a 0.3s duration
      },
    },
  },
};

export default nextConfig;
