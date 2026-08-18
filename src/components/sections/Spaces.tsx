import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpaceGallery } from "@/components/sections/SpaceGallery";
import { spaceOccasions } from "@/data/spaces";

export function Spaces() {
  return (
    <section
      id="space"
      aria-labelledby="space-heading"
      className="border-t border-warm-500/10 bg-ink-950 py-24 md:py-section"
    >
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <SectionHeading
              id="space-heading"
              eyebrow="The Space"
              title="자리의 목적에 맞춘 공간"
              lead="조도와 간격, 소리까지 고려했습니다. 어떤 자리든 대화가 중심에 놓이도록 준비합니다."
            />
          </div>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <ul className="flex flex-wrap gap-x-3 gap-y-2.5">
              {spaceOccasions.map((occasion) => (
                <li
                  key={occasion}
                  className="border border-warm-500/25 px-3.5 py-2 text-xs tracking-[0.08em] text-warm-300"
                >
                  {occasion}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <SpaceGallery />
      </div>
    </section>
  );
}
