import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  theme: {
    extend: {
      animation: {
        "bounce-fast": "bounce 0.3s infinite", // Custom animation with a 0.3s duration
      },
    },
    experimental: {
      serverActions: true, // Ensure server actions are enabled
      allowedOrigins: [
        "localhost:3000", // localhost
        "bookish-space-broccoli-975jgrr7pj6v3p5v4-3000.app.github.dev", // Codespaces
      ],
    },
  },
};

export default nextConfig;
