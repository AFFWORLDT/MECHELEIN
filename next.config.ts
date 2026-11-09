import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `next build` prerenders every page into out/,
  // which any static host can serve.
  output: "export",
  // every page is a folder (/about/ -> about/index.html), so direct visits work on any static host
  trailingSlash: true,
};

export default nextConfig;
