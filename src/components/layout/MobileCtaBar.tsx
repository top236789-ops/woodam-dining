"use client";

import { useEffect, useState } from "react";
import { Phone, CalendarCheck } from "lucide-react";
import { contact, reservation } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * 모바일 하단 고정 CTA.
 * 히어로를 지나 스크롤하면 나타나며, 데스크톱에서는 표시하지 않습니다.
 * (푸터에는 동일 높이의 하단 여백을 두어 콘텐츠를 가리지 않습니다.)
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);
  const isExternalReservation = reservation.naverUrl.startsWith("http");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-warm-500/20 bg-ink-950/95 backdrop-blur-md transition-transform duration-500 ease-out lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2">
        <a
          href={contact.phoneHref}
          className="flex min-h-14 items-center justify-center gap-2 border-r border-warm-500/20 text-[0.8125rem] font-medium tracking-[0.14em] text-cream transition-colors duration-300 active:text-gold-soft"
        >
          <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
          전화하기
        </a>
        <a
          href={reservation.naverUrl}
          {...(isExternalReservation
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="flex min-h-14 items-center justify-center gap-2 bg-gold text-[0.8125rem] font-medium tracking-[0.14em] text-ink-950 transition-colors duration-300 active:bg-gold-soft"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          예약하기
          {isExternalReservation && <span className="sr-only">(새 창에서 열림)</span>}
        </a>
      </div>
    </div>
  );
}
