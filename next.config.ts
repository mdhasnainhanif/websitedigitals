/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize CSS delivery
  webpack: (config: any) => {
    config.optimization.splitChunks.cacheGroups.styles = {
      name: 'styles',
      test: /\.(css|scss)$/,
      chunks: 'all',
      enforce: true,
    };
    return config;
  },
};

export default nextConfig;