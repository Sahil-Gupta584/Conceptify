import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // theme: {
  //   extend: {
  //     animation: {
  //       "bounce-fast": "bounce 0.3s infinite", 
  //     },
  //   },
  // },
  experimental: {
    serverActions:{
      allowedOrigins:['bookish-space-broccoli-975jgrr7pj6v3p5v4-3000.app.github.dev']
    }
  }
};

export default nextConfig;
