import type { NextConfig } from "next";

const path = require("path");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
