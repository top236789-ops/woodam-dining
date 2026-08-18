import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type LegalSection = {
  title: string;
  body: readonly string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  notice: string;
  sections: readonly LegalSection[];
};

/** 개인정보처리방침 · 이용약관 공통 레이아웃 */
export function LegalPage({ eyebrow, title, notice, sections }: LegalPageProps) {
  return (
    <main id="main" className="bg-ink-900">
      <div className="mx-auto max-w-3xl px-5 pt-36 pb-32 sm:px-8 md:pt-44 lg:pb-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-3xl leading-[1.35] text-cream md:text-4xl">
          {title}
        </h1>

        <p className="mt-8 border-l border-gold/50 py-1 pl-5 text-sm leading-[1.9] text-warm-400">
          {notice}
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg text-cream md:text-xl">{section.title}</h2>
              <div className="mt-4 space-y-3.5 text-sm leading-[1.95] text-warm-300">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Link
          href="/"
          className="mt-16 inline-flex min-h-11 items-center gap-3 border-b border-warm-500/40 pb-2 text-sm tracking-[0.12em] text-warm-200 transition-colors duration-500 hover:border-gold hover:text-gold-soft"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
