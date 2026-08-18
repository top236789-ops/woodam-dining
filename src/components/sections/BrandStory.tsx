import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { storyBlocks, storyIntro } from "@/data/story";
import { cn } from "@/lib/cn";

export function BrandStory() {
  return (
    <section
      id="brand"
      aria-labelledby="brand-heading"
      className="bg-ink-900 py-24 md:py-section"
    >
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 lg:col-start-1">
            <SectionHeading
              id="brand-heading"
              eyebrow={storyIntro.eyebrow}
              title={storyIntro.title}
              lead={storyIntro.body}
            />
          </div>
        </div>

        <div className="mt-20 space-y-20 md:mt-28 md:space-y-28 lg:space-y-36">
          {storyBlocks.map((block, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={block.id}
                className="grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-16"
              >
                <Reveal
                  className={cn(
                    "md:col-span-7",
                    imageFirst
                      ? "md:col-start-1"
                      : "md:col-start-6 md:row-start-1",
                  )}
                >
                  <SmartImage
                    image={block.image}
                    sizes="(min-width: 1024px) 55vw, (min-width: 768px) 58vw, 100vw"
                    className={cn(
                      index % 3 === 1 && "md:translate-y-6 lg:translate-y-10",
                    )}
                  />
                </Reveal>

                <Reveal
                  delay={120}
                  className={cn(
                    "md:col-span-5",
                    imageFirst
                      ? "md:col-start-8"
                      : "md:col-start-1 md:row-start-1",
                  )}
                >
                  <div className="max-w-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-[0.6875rem] font-medium tracking-[0.28em] text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="hairline w-16 flex-none" aria-hidden="true" />
                      <span className="text-[0.6875rem] tracking-[0.22em] text-warm-500 uppercase">
                        {block.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl leading-[1.4] text-cream md:text-[1.75rem]">
                      {block.title}
                    </h3>
                    <p className="mt-5 text-[0.9375rem] leading-[1.95] text-warm-300">
                      {block.body}
                    </p>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
