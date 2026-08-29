import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the on-screen dev route indicator. Compile/runtime errors still surface.
  devIndicators: false,
};

export default nextConfig;
