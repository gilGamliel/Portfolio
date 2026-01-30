import type { NextConfig } from "next";

/**
 * Next.js configuration for Vercel deployment
 * 
 * Key decisions:
 * - reactCompiler: Enabled for React 19 compiler optimizations
 * - No output: 'export' - Using Vercel's native Next.js hosting (not static export)
 * - No basePath/assetPrefix - Deploying to root domain on Vercel
 * - No turbopack config - Let Next.js auto-detect project root
 * - Images optimized by Vercel automatically (removed unoptimized: true)
 */
const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default nextConfig;
