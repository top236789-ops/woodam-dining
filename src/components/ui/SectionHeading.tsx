import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  /** aria-labelledby 연결용 제목 id */
  id?: string;
  eyebrow: string;
  title: string;
  /** 제목 아래 리드 문단 */
  lead?: string | readonly string[];
  align?: "left" | "center";
  className?: string;
  /** 페이지 내 h2 로 사용 (기본값) */
  as?: "h2" | "h3";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const paragraphs = typeof lead === "string" ? [lead] : (lead ?? []);

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <Tag id={id} className="mt-5 text-3xl leading-[1.35] text-cream sm:text-4xl md:text-[2.75rem] md:leading-[1.3]">
        {title}
      </Tag>
      {paragraphs.length > 0 && (
        <div className="mt-7 space-y-4 text-[0.9375rem] leading-[1.9] text-warm-300 md:text-base">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </Reveal>
  );
}
