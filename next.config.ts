import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        as: '*.js',
        loaders: ['./next/turbopack/svg-loader.mjs'],
      },
    },
  },
};

export default nextConfig;
