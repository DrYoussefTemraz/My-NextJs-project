/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // OLD VERSION
        // domains:['images.pexels.com', 'example.com']
        // NEW VERSION
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
                pathname: "/**"
            }
        ]

    }


};

export default nextConfig;
