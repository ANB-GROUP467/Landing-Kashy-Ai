/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kashy.ai",
      },
    ],
  },
};

export default nextConfig;