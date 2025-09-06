import type { NextConfig } from "next";

module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
};
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
