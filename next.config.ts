import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted on Vercel, Netlify or Cloudflare Pages.
  output: "export",
  // Emit /about/index.html instead of /about.html, which every static host serves cleanly.
  trailingSlash: true,
  images: {
    // The default image loader needs a server, which a static export does not have.
    unoptimized: true,
  },
};

export default nextConfig;
