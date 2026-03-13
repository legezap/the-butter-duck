import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/perduck-next" : "",
  assetPrefix: isProd ? "/perduck-next/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
