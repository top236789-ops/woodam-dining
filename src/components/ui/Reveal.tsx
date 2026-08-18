"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * IntersectionObserver 가 한 번이라도 콜백을 전달했는지 추적합니다.
 * 일정 시간 안에 전혀 동작하지 않으면(구형·제한 환경) 숨김 자체를 해제해
 * 콘텐츠가 보이지 않는 상황을 방지합니다.
 */
let observerDelivered = false;
let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleVisibilityFallback() {
  if (observerDelivered || fallbackTimer !== null) return;

  fallbackTimer = setTimeout(() => {
    fallbackTimer = null;
    if (!observerDelivered) {
      document.documentElement.removeAttribute("data-reveal-ready");
    }
  }, 1600);
}

function markObserverDelivered() {
  observerDelivered = true;
  if (fallbackTimer !== null) {
    clearTimeout(fallbackTimer);
    fallbackTimer = null;
  }
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** 페이드 인 지연 시간(ms) — 순차 등장 연출용 */
  delay?: number;
};

/**
 * 뷰포트에 들어올 때 한 번만 부드럽게 나타납니다.
 * - JS가 없거나 실패하면 콘텐츠는 처음부터 그대로 보입니다.
 * - `prefers-reduced-motion` 이 켜져 있으면 애니메이션 없이 즉시 표시됩니다.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      element.dataset.revealed = "true";
      return;
    }

    scheduleVisibilityFallback();

    const observer = new IntersectionObserver(
      (entries) => {
        markObserverDelivered();
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={
        delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined
      }
    >
      {children}
    </div>
  );
}
