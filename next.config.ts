import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"], 
    minimumCacheTTL: 60, 
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production", 
  },

  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
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

    // Optimize CSS delivery - reduce chunk sizes
    config.optimization.splitChunks.cacheGroups.styles = {
      name: 'styles',
      test: /\.(css|scss)$/,
      chunks: 'all',
      enforce: true,
      maxSize: 20000, // Limit CSS chunk size to 20KB
    };

    // Add CSS optimization
    config.optimization.splitChunks.cacheGroups.vendor = {
      test: /[\\/]node_modules[\\/]/,
      name: 'vendors',
      chunks: 'all',
      maxSize: 100000, // Limit vendor chunks
    };

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
