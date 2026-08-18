import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { images } from "@/data/images";
import { qualityPoints, qualityStats } from "@/data/quality";

export function Quality() {
  return (
    <section
      id="hanwoo"
      aria-labelledby="hanwoo-heading"
      className="border-t border-warm-500/10 bg-ink-950 py-24 md:py-section"
    >
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* 좌측: 이미지 + 지표 */}
          <div className="lg:col-span-5 lg:col-start-1">
            <Reveal>
              <SmartImage
                image={images.quality}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </Reveal>

            <Reveal delay={120}>
              <dl className="mt-10 grid grid-cols-3 border-t border-warm-500/15">
                {qualityStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-r border-warm-500/15 py-6 pr-4 last:border-r-0"
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-serif-ko text-2xl text-gold-soft md:text-[1.75rem]">
                        {stat.value}
                      </span>
                      <span className="mt-2 block text-[0.6875rem] leading-relaxed tracking-[0.06em] text-warm-400">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* 우측: 품질 기준 */}
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading
              id="hanwoo-heading"
              eyebrow="Hanwoo Standard"
              title="한 점의 기준을 정하는 다섯 가지"
              lead="화려한 수식 대신, 지키는 순서를 적었습니다."
              as="h2"
              className="max-w-xl"
            />

            <ol className="mt-12 md:mt-14">
              {qualityPoints.map((point, index) => (
                <Reveal key={point.index} delay={index * 90}>
                  <li className="grid grid-cols-[3.5rem_1fr] gap-x-2 border-t border-warm-500/12 py-7 last:border-b last:border-warm-500/12 sm:grid-cols-[5rem_1fr] md:py-8">
                    <span className="pt-1 text-[0.6875rem] font-medium tracking-[0.24em] text-gold">
                      {point.index}
                    </span>
                    <div>
                      <h3 className="text-lg text-cream md:text-xl">{point.title}</h3>
                      <p className="mt-3 max-w-md text-sm leading-[1.95] text-warm-300 md:text-[0.9375rem]">
                        {point.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal>
              <p className="mt-8 text-xs leading-relaxed text-warm-500">
                등급과 산지 정보는 입고 현황에 따라 달라질 수 있으며, 매장에서
                확인하실 수 있습니다.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
