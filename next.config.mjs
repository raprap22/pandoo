/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    domains: ["images.unsplash.com", "ik.imagekit.io"],
  },
  output: "standalone",
};

export default nextConfig;
