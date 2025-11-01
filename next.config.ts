import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Compiler
  reactCompiler: true,
  // Silence turbopack root warning when multiple lockfiles exist on the machine
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
  // Note: This is safe and ensures Turbopack treats this project directory as the workspace root.
  turbopack: { root: __dirname },
};

export default nextConfig;
