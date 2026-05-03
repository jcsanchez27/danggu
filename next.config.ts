import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: { unoptimized: true },
	trailingSlash: true,
	reactStrictMode: true,
	poweredByHeader: false,
	compress: true,
	devIndicators: false,
	allowedDevOrigins: ["192.168.1.50"],
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
