/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "via.placeholder.com" },
      { hostname: "localhost" },
      {
        protocol: "https",
        hostname: "**.graphassets.com",
      },
    ],
  },
};

export default nextConfig;
