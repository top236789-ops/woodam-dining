"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, navItems } from "@/config/site";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(menuOpen);

  /* 스크롤 위치에 따라 헤더 배경 전환 */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  /* ESC 로 닫기 + 패널 안에서 포커스 순환 */
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
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
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  /* 데스크톱 폭으로 넓어지면 모바일 메뉴는 자동으로 닫습니다 */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-700 ease-out",
        scrolled || menuOpen
          ? "border-b border-warm-500/15 bg-ink-950/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-[100rem] items-center justify-between px-5 sm:px-8 md:h-22 lg:px-12">
        <Link
          href="#top"
          className="group -my-2 flex min-h-11 items-center gap-2.5 py-2"
          aria-label={`${brand.nameKo} 홈으로 이동`}
        >
          <span className="font-serif-ko text-xl leading-none tracking-[0.08em] text-cream transition-colors duration-500 group-hover:text-gold-soft md:text-[1.375rem]">
            {brand.nameKo}
          </span>
          <span className="text-[0.625rem] leading-none font-medium tracking-[0.34em] text-warm-400 transition-colors duration-500 group-hover:text-gold">
            {brand.nameEn}
          </span>
        </Link>

        <nav aria-label="주요 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative inline-flex py-2 text-[0.8125rem] font-medium tracking-[0.14em] text-warm-200 transition-colors duration-500 hover:text-gold-soft"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#reservation"
            className="hidden min-h-10 items-center border border-gold/70 px-5 text-[0.75rem] font-medium tracking-[0.18em] text-gold-soft transition-colors duration-500 hover:bg-gold hover:text-ink-950 lg:inline-flex"
          >
            예약하기
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-cream transition-colors duration-300 hover:text-gold-soft lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!menuOpen}
        className="lg:hidden"
      >
        <div
          className={cn(
            "fixed inset-0 top-18 bg-ink-950/97 backdrop-blur-xl transition-opacity duration-500 ease-out",
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          {/* 패널 바깥(하단 여백) 클릭 시 닫힘 */}
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={closeMenu}
            className="absolute inset-0 h-full w-full cursor-default"
          />

          <nav
            aria-label="모바일 주요 메뉴"
            className="relative flex h-full flex-col justify-between overflow-y-auto px-6 pt-10 pb-12"
          >
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 border-b border-warm-500/12 py-5 text-2xl text-cream transition-colors duration-300 hover:text-gold-soft"
                  >
                    <span className="font-sans-ko text-[0.625rem] tracking-[0.2em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif-ko">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#reservation"
              onClick={() => setMenuOpen(false)}
              className="mt-10 inline-flex min-h-13 w-full items-center justify-center bg-gold text-[0.8125rem] font-medium tracking-[0.18em] text-ink-950 uppercase transition-colors duration-500 hover:bg-gold-soft"
            >
              예약하기
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
