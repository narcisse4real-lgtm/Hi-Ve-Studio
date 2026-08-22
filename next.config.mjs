/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/runway",
          destination: "/runway/v3.html",
        },
      ],
    };
  },
};

export default nextConfig;
