/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "images.theconversation.com",
      "cdn-icons-png.flaticon.com",
      "icons8.com",
      "thenounproject.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
