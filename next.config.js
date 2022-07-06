/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(
  nextTranslate({
    swcMinify: true,
    reactStrictMode: true,
    webpack: (config) => {
      return config;
    },
  })
);