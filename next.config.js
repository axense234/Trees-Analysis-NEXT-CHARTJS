/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
