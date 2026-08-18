import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "quiet";
type Size = "md" | "lg";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** 외부 사이트로 이동하는 링크 (새 창 + 안내 텍스트) */
  external?: boolean;
  /** 아이콘 등 라벨 앞 요소 */
  icon?: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-sans-ko text-[0.8125rem] font-medium tracking-[0.16em] uppercase transition-colors duration-500 ease-out";

const variants: Record<Variant, string> = {
  solid:
    "bg-gold text-ink-950 hover:bg-gold-soft border border-gold hover:border-gold-soft",
  outline:
    "border border-warm-500/70 text-cream hover:border-gold hover:text-gold-soft",
  quiet:
    "border border-transparent text-warm-300 hover:text-gold-soft underline-offset-8 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-6 py-3",
  lg: "min-h-13 px-8 py-4",
};

/**
 * 사이트 전역 버튼형 링크.
 * 최소 높이 44px 이상을 유지해 모바일 터치 영역을 확보합니다.
 */
export function ActionLink({
  href,
  children,
  variant = "outline",
  size = "md",
  className,
  external = false,
  icon,
}: ActionLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {icon}
        <span>{children}</span>
        {isHttp && <span className="sr-only">(새 창에서 열림)</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      <span>{children}</span>
    </Link>
  );
}
