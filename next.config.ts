import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enables SWC compiler minification (faster builds & smaller bundles)

  images: {
    formats: ["image/avif", "image/webp"], // Modern formats for faster loading
    minimumCacheTTL: 60, // Cache images for at least 60s on CDN
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console.logs in prod
  },

  experimental: {
    optimizeCss: true, // Reduces CSS blocking render time
    scrollRestoration: true,
  },

  webpack(config, { dev, isServer }) {
    // Disable large unnecessary polyfills in client bundle
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
