import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  }, */
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      gsap: require.resolve('gsap'), // Assure-toi que Webpack résout gsap correctement
    };
    return config;
  },
};

export default nextConfig;
