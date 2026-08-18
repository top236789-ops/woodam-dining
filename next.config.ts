import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * 임시 이미지 호스트.
     * 실제 매장 사진을 public/images 로 옮기면 이 설정은 삭제해도 됩니다.
     */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Next.js 16부터 허용 품질값을 명시해야 합니다.
    qualities: [75, 85],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
