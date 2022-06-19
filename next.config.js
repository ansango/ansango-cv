/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  swcMinify: true,
  reactStrictMode: true,
  webpack: (config) => {
    return config;
  },
});
