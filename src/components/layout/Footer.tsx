import Link from "next/link";
import { MapPin } from "lucide-react";
import { InstagramGlyph } from "@/components/ui/InstagramGlyph";
import {
  address,
  brand,
  business,
  contact,
  copyright,
  hours,
  navItems,
  policyLinks,
  social,
} from "@/config/site";

const businessRows = [
  { label: "상호명", value: business.legalName },
  { label: "대표자명", value: business.ceo },
  { label: "사업자등록번호", value: business.registrationNumber },
  { label: "주소", value: address.full },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-warm-500/12 bg-ink-950">
      {/* 모바일 하단 고정 CTA 높이만큼 여백 확보 */}
      <div className="mx-auto max-w-[100rem] px-5 pt-20 pb-32 sm:px-8 md:pt-24 lg:px-12 lg:pb-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif-ko text-2xl tracking-[0.08em] text-cream">
                {brand.nameKo}
              </span>
              <span className="text-[0.625rem] font-medium tracking-[0.34em] text-gold">
                {brand.nameEn}
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-[1.9] text-warm-400">
              {brand.description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center border border-warm-500/25 text-warm-300 transition-colors duration-500 hover:border-gold hover:text-gold-soft"
              >
                <InstagramGlyph className="h-4 w-4" />
                <span className="sr-only">인스타그램 (새 창에서 열림)</span>
              </a>
              <a
                href={social.naverPlace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center border border-warm-500/25 text-warm-300 transition-colors duration-500 hover:border-gold hover:text-gold-soft"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">네이버 플레이스 (새 창에서 열림)</span>
              </a>
            </div>
          </div>

          <nav aria-label="푸터 메뉴" className="lg:col-span-2">
            <h2 className="text-[0.6875rem] font-medium tracking-[0.28em] text-gold uppercase">
              Menu
            </h2>
            <ul className="mt-6 space-y-3.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-warm-300 transition-colors duration-500 hover:text-gold-soft"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-[0.6875rem] font-medium tracking-[0.28em] text-gold uppercase">
              Contact
            </h2>
            <ul className="mt-6 space-y-3.5 text-sm text-warm-300">
              <li>
                <a
                  href={contact.phoneHref}
                  className="inline-flex min-h-11 items-center transition-colors duration-500 hover:text-gold-soft"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="leading-[1.9]">{address.full}</li>
              <li className="leading-[1.9]">
                {hours.open}–{hours.close}
                <br />
                <span className="text-warm-400">
                  브레이크 {hours.breakStart}–{hours.breakEnd} · 라스트 오더{" "}
                  {hours.lastOrder}
                </span>
                <br />
                <span className="text-warm-400">휴무 {hours.closedDayLabel}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.6875rem] font-medium tracking-[0.28em] text-gold uppercase">
              Business
            </h2>
            <dl className="mt-6 space-y-3 text-sm">
              {businessRows.map((row) => (
                <div key={row.label} className="flex gap-3">
                  <dt className="w-24 shrink-0 text-warm-500">{row.label}</dt>
                  <dd className="text-warm-300">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-warm-500/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex items-center gap-6">
            {policyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-xs tracking-wide text-warm-400 transition-colors duration-500 hover:text-gold-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs tracking-[0.08em] text-warm-500">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
