import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use webpack bundler (avoids Turbopack OS resource limits on Windows)
  turbopack: undefined,
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
