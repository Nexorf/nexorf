import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: false,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "unsplash.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "logos-world.net",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;