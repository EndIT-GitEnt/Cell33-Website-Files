import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Compiler
  reactCompiler: true,

  // Static HTML export for Cloudflare Pages / static hosting
  // See: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: "export",

  // Make next/image compatible with static export (renders plain <img>)
  images: { unoptimized: true },

  // Silence turbopack root warning when multiple lockfiles exist on the machine
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
  // Note: This is safe and ensures Turbopack treats this project directory as the workspace root.
  turbopack: { root: __dirname },
};

export default nextConfig;
