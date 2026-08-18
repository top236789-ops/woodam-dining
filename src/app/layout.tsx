import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { brand, seo } from "@/config/site";
import { buildRestaurantJsonLd, buildWebSiteJsonLd } from "@/lib/jsonld";
import "./globals.css";

/**
 * 한글 웹폰트
 * CJK 폰트는 용량이 크므로 subsets 지정 없이 preload 를 끄고,
 * display: swap 으로 텍스트가 먼저 보이도록 합니다(폰트 깜빡임 최소화).
 */
const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  display: "swap",
  preload: false,
  weight: ["300", "400", "500", "600"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  display: "swap",
  preload: false,
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: brand.title,
    template: `%s | ${brand.nameKo}`,
  },
  description: brand.description,
  keywords: [...seo.keywords],
  applicationName: brand.nameKo,
  authors: [{ name: brand.nameEn }],
  creator: brand.nameEn,
  publisher: brand.nameEn,
  alternates: {
    // TEMP: 실제 도메인 확정 시 src/config/site.ts 의 seo.siteUrl 만 교체하면 됩니다.
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: seo.siteUrl,
    siteName: brand.title,
    title: brand.title,
    description: brand.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.title,
    description: brand.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0c0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${notoSerifKr.variable} ${notoSansKr.variable}`}
      /* 아래 인라인 스크립트가 <html>에 data-reveal-ready 를 추가하므로 하이드레이션 경고를 무시합니다 */
      suppressHydrationWarning
    >
      <head>
        {/* JS가 준비된 경우에만 스크롤 페이드 인을 활성화합니다.
            (JS가 없으면 모든 콘텐츠가 처음부터 그대로 보입니다) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'document.documentElement.setAttribute("data-reveal-ready","true")',
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildRestaurantJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildWebSiteJsonLd()),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-70 focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:text-ink-950"
        >
          본문으로 건너뛰기
        </a>
        <Header />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
