"use client";

import Image from "next/image";
import { useState } from "react";
import type { SiteImage } from "@/data/images";
import { cn } from "@/lib/cn";

type SmartImageProps = {
  image: SiteImage;
  /** 반응형 크기 힌트 */
  sizes: string;
  /** 래퍼 클래스 */
  className?: string;
  /** <img> 클래스 (object-position 등) */
  imageClassName?: string;
  /** true면 원본 비율을 적용하지 않습니다. 크기는 className 으로 지정하세요. */
  fillParent?: boolean;
  /** 히어로 등 LCP 이미지에만 사용 */
  preload?: boolean;
  quality?: number;
  /** 이미지 채움 방식 */
  fit?: "cover" | "contain";
};

/**
 * next/image 래퍼.
 * - 항상 비율이 고정된 박스 안에서 렌더링해 레이아웃 이동(CLS)을 방지합니다.
 * - 외부 이미지 로딩이 실패해도 같은 크기의 어두운 플레이스홀더가 자리를 지킵니다.
 */
export function SmartImage({
  image,
  sizes,
  className,
  imageClassName,
  fillParent = false,
  preload = false,
  quality = 75,
  fit = "cover",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden bg-ink-850", className)}
      style={
        fillParent ? undefined : { aspectRatio: `${image.width} / ${image.height}` }
      }
    >
      {failed ? (
        <div
          role="img"
          aria-label={image.alt}
          className="absolute inset-0 bg-[linear-gradient(140deg,var(--color-ink-800),var(--color-ink-850)_45%,var(--color-ink-900))]"
        >
          <span className="absolute inset-x-6 bottom-6 text-[0.6875rem] leading-relaxed tracking-wide text-warm-400">
            {image.alt}
          </span>
        </div>
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          quality={quality}
          preload={preload}
          onError={() => setFailed(true)}
          className={cn(fit === "contain" ? "object-contain" : "object-cover", imageClassName)}
        />
      )}
    </div>
  );
}
