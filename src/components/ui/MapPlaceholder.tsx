import { MapPin } from "lucide-react";
import { address, brand } from "@/config/site";

/**
 * 지도 플레이스홀더.
 * -----------------------------------------------------------------------------
 * 현재 단계에서는 지도 API와 환경변수를 사용하지 않습니다.
 * 추후 네이버 지도 / 카카오맵을 붙일 때는 이 컴포넌트의 내부만 교체하면 되며,
 * 바깥 레이아웃(비율·여백)은 그대로 유지됩니다.
 */
export function MapPlaceholder() {
  return (
    <div
      className="relative aspect-4/3 w-full overflow-hidden border border-warm-500/20 bg-ink-850 sm:aspect-16/10"
      role="img"
      aria-label={`${brand.nameKo} 위치 안내 이미지 자리 — ${address.full}`}
    >
      {/* 격자 패턴 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--color-warm-500)_16%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-warm-500)_16%,transparent)_1px,transparent_1px)] [background-size:44px_44px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_10%,var(--color-ink-900)_78%)]"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <MapPin className="h-6 w-6 text-gold" aria-hidden="true" />
        <p className="font-serif-ko text-lg text-cream">{address.full}</p>
        <p className="text-xs tracking-[0.14em] text-warm-500 uppercase">
          Map coming soon
        </p>
      </div>
    </div>
  );
}
