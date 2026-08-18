"use client";

import type { ImageLoaderProps } from "next/image";

/**
 * 외부(Unsplash) 임시 이미지 전용 로더
 * -----------------------------------------------------------------------------
 * Unsplash CDN이 직접 리사이즈·포맷 변환(webp/avif)을 처리하도록 위임합니다.
 *
 * 이유:
 * 1. 원본이 2~3MB에 달해 서버에서 다시 최적화하는 비용이 큽니다.
 * 2. Vercel 이미지 최적화 사용량(Hobby 플랜 한도)을 소모하지 않습니다.
 *
 * 로컬 이미지(`/images/...`)는 이 로더를 거치지 않고
 * Next.js 기본 최적화를 그대로 사용합니다. (SmartImage 참고)
 */
export function unsplashLoader({ src, width, quality }: ImageLoaderProps): string {
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  return url.toString();
}

/** 외부 이미지 여부 판별 — 로컬 경로(`/images/...`)는 false */
export function isRemoteImage(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}
