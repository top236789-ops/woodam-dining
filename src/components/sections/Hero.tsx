import { ActionLink } from "@/components/ui/ActionLink";
import { SmartImage } from "@/components/ui/SmartImage";
import { images } from "@/data/images";
import { brand } from "@/config/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="우담 소개"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* 배경 이미지 — 아주 느린 확대 */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full motion-safe:animate-hero-zoom">
          <SmartImage
            image={images.hero}
            sizes="100vw"
            fillParent
            className="h-full w-full"
            preload
            quality={85}
            imageClassName="object-center"
          />
        </div>
        {/* 텍스트 가독성 확보용 오버레이 */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-ink-950)_2%,color-mix(in_srgb,var(--color-ink-950)_72%,transparent)_38%,color-mix(in_srgb,var(--color-ink-950)_44%,transparent)_72%,color-mix(in_srgb,var(--color-ink-950)_62%,transparent)_100%)]"
        />
      </div>

      <div className="mx-auto w-full max-w-[100rem] px-5 pt-32 pb-28 sm:px-8 md:pb-32 lg:px-12 lg:pb-36">
        <p
          className="eyebrow motion-safe:animate-fade-in-up"
          style={{ animationDelay: "120ms" }}
        >
          {brand.nameEn} · Premium Hanwoo Dining
        </p>

        <h1
          className="mt-7 max-w-4xl text-[2.5rem] leading-[1.28] text-cream motion-safe:animate-fade-in-up sm:text-5xl md:text-6xl md:leading-[1.24] lg:text-[4.25rem]"
          style={{ animationDelay: "260ms" }}
        >
          한우의 깊이를
          <br />
          완성하는 시간
        </h1>

        <p
          className="mt-8 max-w-md text-[0.9375rem] leading-[1.9] text-warm-200 motion-safe:animate-fade-in-up md:text-base"
          style={{ animationDelay: "420ms" }}
        >
          엄선한 최상급 한우와 섬세한 불의 조화
        </p>

        <div
          className="mt-11 flex flex-col gap-3 motion-safe:animate-fade-in-up sm:flex-row sm:gap-4"
          style={{ animationDelay: "560ms" }}
        >
          <ActionLink href="#menu" variant="solid" size="lg">
            메뉴 살펴보기
          </ActionLink>
          <ActionLink href="#reservation" variant="outline" size="lg">
            예약 문의
          </ActionLink>
        </div>
      </div>

      {/* 스크롤 안내 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-7 hidden justify-center md:flex"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[0.5625rem] font-medium tracking-[0.32em] text-warm-300 uppercase">
            Scroll
          </span>
          <span className="relative block h-12 w-px overflow-hidden bg-warm-500/40">
            <span className="absolute inset-x-0 top-0 block h-4 bg-gold motion-safe:animate-scroll-hint" />
          </span>
        </div>
      </div>
    </section>
  );
}
