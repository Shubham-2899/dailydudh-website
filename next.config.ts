import type { NextConfig } from "next";

// Fully static site: `next build` writes plain HTML/CSS/JS to ./out (hosted on Netlify, no server).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
};

export default nextConfig;
