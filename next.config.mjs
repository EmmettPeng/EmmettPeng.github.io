const nextConfig = {
  output: 'export',
  distDir: process.env.NEXT_DIST_DIR || '.next',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
