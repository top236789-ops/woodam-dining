"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { spaceItems } from "@/data/spaces";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { cn } from "@/lib/cn";

/** 데스크톱 비대칭 그리드 배치 (모바일은 단순 세로 정렬) */
const layout = [
  "lg:col-span-7 lg:col-start-1",
  "lg:col-span-5 lg:col-start-8 lg:mt-16",
  "lg:col-span-4 lg:col-start-1",
  "lg:col-span-7 lg:col-start-6 lg:mt-20",
  "lg:col-span-4 lg:col-start-2",
  "lg:col-span-6 lg:col-start-7 lg:mt-16",
];

export function SpaceGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const isOpen = openIndex !== null;

  useBodyScrollLock(isOpen);

  const close = useCallback(() => {
    const previous = openIndex;
    setOpenIndex(null);
    if (previous !== null) triggerRefs.current[previous]?.focus();
  }, [openIndex]);

  const step = useCallback((direction: 1 | -1) => {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + direction + spaceItems.length) % spaceItems.length;
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowRight") {
        step(1);
      } else if (event.key === "ArrowLeft") {
        step(-1);
      } else if (event.key === "Tab") {
        const focusables =
          dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close, step]);

  const active = openIndex !== null ? spaceItems[openIndex] : null;

  return (
    <>
      <ul className="mt-16 grid gap-8 sm:grid-cols-2 md:mt-20 lg:grid-cols-12 lg:items-start lg:gap-10">
        {spaceItems.map((item, index) => (
          <li key={item.id} className={cn(layout[index])}>
            <Reveal delay={(index % 2) * 120}>
              <button
                type="button"
                ref={(node) => {
                  triggerRefs.current[index] = node;
                }}
                onClick={() => setOpenIndex(index)}
                aria-label={`${item.title} 이미지 크게 보기`}
                className="group block w-full text-left"
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    image={item.image}
                    sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                    imageClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-ink-950/25 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-4 bottom-4 inline-flex h-10 w-10 translate-y-2 items-center justify-center border border-cream/30 text-cream opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-5 flex items-baseline gap-4">
                  <h3 className="text-lg text-cream transition-colors duration-500 group-hover:text-gold-soft">
                    {item.title}
                  </h3>
                  <span className="hairline flex-1" aria-hidden="true" />
                </div>
                <p className="mt-2.5 max-w-sm text-sm leading-[1.9] text-warm-400">
                  {item.description}
                </p>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* 라이트박스 */}
      {isOpen && active && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} 확대 이미지`}
          className="fixed inset-0 z-60 flex flex-col bg-ink-950/97 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <p className="font-serif-ko text-base text-cream sm:text-lg">
              {active.title}
            </p>
            <button
              type="button"
              onClick={close}
              className="inline-flex h-11 w-11 items-center justify-center text-warm-200 transition-colors duration-300 hover:text-gold-soft"
            >
              <X className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">닫기</span>
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-16">
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute left-1 z-10 inline-flex h-12 w-12 items-center justify-center text-warm-200 transition-colors duration-300 hover:text-gold-soft sm:left-4"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">이전 이미지</span>
            </button>

            <div className="relative h-full max-h-[76vh] w-full max-w-5xl">
              <SmartImage
                image={active.image}
                sizes="(min-width: 1024px) 70vw, 100vw"
                fillParent
                fit="contain"
                quality={85}
                className="h-full w-full bg-transparent"
              />
            </div>

            <button
              type="button"
              onClick={() => step(1)}
              className="absolute right-1 z-10 inline-flex h-12 w-12 items-center justify-center text-warm-200 transition-colors duration-300 hover:text-gold-soft sm:right-4"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">다음 이미지</span>
            </button>
          </div>

          <p className="px-5 pb-8 text-center text-sm leading-relaxed text-warm-400 sm:px-8">
            {active.description}
          </p>
        </div>
      )}
    </>
  );
}
