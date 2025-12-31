import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.shopify.com",
				port: "",
				pathname: "/s/files/**",
			},
		],
	},
	experimental: {
		optimizePackageImports: ["@phosphor-icons/react"],
	},
};

export default nextConfig;
