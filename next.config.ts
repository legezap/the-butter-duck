import type { NextConfig } from "next";

const target = process.env.DEPLOY_TARGET;

const nextConfig: NextConfig = {
  output: "export",
  basePath: target === "github" ? "/the-butter-duck" : "",
  assetPrefix: target === "github" ? "/the-butter-duck/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
