import { ChevronDown } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import {
  formatPrice,
  menuNotice,
  otherMenuItems,
  signatureMenuItems,
} from "@/data/menu";
import { cn } from "@/lib/cn";

/** 대표 메뉴 3종은 세로 위치를 달리해 에디토리얼 리듬을 만듭니다. */
const signatureOffsets = ["lg:mt-0", "lg:mt-20", "lg:mt-10"];

export function MenuSection() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="bg-ink-900 py-24 md:py-section"
    >
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <SectionHeading
              id="menu-heading"
              eyebrow="Signature"
              title="대표 메뉴"
              lead="그날의 원육에 따라 구성이 조금씩 달라집니다. 가장 좋은 상태의 세 가지를 먼저 권해 드립니다."
            />
          </div>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <ul className="space-y-2 text-xs leading-relaxed text-warm-500">
              {menuNotice.map((notice) => (
                <li key={notice} className="flex gap-2">
                  <span aria-hidden="true" className="text-gold">
                    —
                  </span>
                  <span>{notice}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* 대표 메뉴 */}
        <ul className="mt-16 grid gap-14 sm:grid-cols-2 sm:gap-8 md:mt-20 lg:grid-cols-3 lg:gap-10">
          {signatureMenuItems.map((item, index) => (
            <li key={item.id} className={cn(signatureOffsets[index])}>
              <Reveal delay={index * 120}>
                <article>
                  <SmartImage
                    image={item.image}
                    sizes="(min-width: 768px) 32vw, 100vw"
                    className="[&_img]:transition-transform [&_img]:duration-[1200ms] [&_img]:ease-out hover:[&_img]:scale-[1.04]"
                  />

                  <div className="mt-7 flex items-center gap-4">
                    <span className="text-[0.6875rem] font-medium tracking-[0.24em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="hairline flex-1" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl leading-[1.45] text-cream md:text-[1.375rem]">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-[0.6875rem] tracking-[0.2em] text-warm-500 uppercase">
                    {item.nameEn}
                  </p>
                  <p className="mt-4 text-sm leading-[1.95] text-warm-300">
                    {item.description}
                  </p>
                  <p className="mt-5 font-serif-ko text-lg text-gold-soft">
                    {formatPrice(item.price)}
                    {item.unit && (
                      <span className="ml-2 font-sans-ko text-xs tracking-wide text-warm-500">
                        / {item.unit}
                      </span>
                    )}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* 그 외 메뉴 — JS 없이도 동작하는 details/summary */}
        <Reveal className="mt-20 md:mt-24">
          <details className="group border-t border-warm-500/15">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm tracking-[0.14em] text-warm-200 transition-colors duration-500 hover:text-gold-soft [&::-webkit-details-marker]:hidden">
              <span>
                <span className="group-open:hidden">전체 메뉴 보기</span>
                <span className="hidden group-open:inline">메뉴 접기</span>
              </span>
              <ChevronDown
                className="h-4 w-4 flex-none text-gold transition-transform duration-500 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>

            <ul className="pb-4">
              {otherMenuItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-5 border-t border-warm-500/12 py-6 sm:gap-8"
                >
                  <SmartImage
                    image={item.image}
                    sizes="(min-width: 640px) 112px, 80px"
                    fillParent
                    className="h-20 w-20 flex-none sm:h-24 sm:w-28"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base text-cream sm:text-lg">{item.name}</h3>
                    <p className="mt-1 text-[0.625rem] tracking-[0.2em] text-warm-500 uppercase">
                      {item.nameEn}
                    </p>
                    <p className="mt-2.5 text-sm leading-[1.9] text-warm-400">
                      {item.description}
                    </p>
                  </div>
                  <p className="flex-none self-start pt-1 font-serif-ko text-base text-gold-soft sm:text-lg">
                    {formatPrice(item.price)}
                  </p>
                </li>
              ))}
            </ul>
          </details>
        </Reveal>

        <Reveal className="mt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <ActionLink href="#reservation" variant="solid">
              예약 문의하기
            </ActionLink>
            <p className="text-xs leading-relaxed text-warm-500">
              코스 구성과 단체 메뉴는 전화로 상담해 드립니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
