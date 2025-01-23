import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images:{
  remotePatterns:[{
    hostname:'lh3.googleusercontent.com'
  }]
},
  experimental: {
    serverActions:{
      allowedOrigins:['bookish-space-broccoli-975jgrr7pj6v3p5v4-3000.app.github.dev']
    }
  }
};

export default nextConfig;
