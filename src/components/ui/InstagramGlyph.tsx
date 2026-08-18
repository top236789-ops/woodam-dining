import type { SVGProps } from "react";

/**
 * 인스타그램 링크용 아이콘.
 * lucide-react v1 에서 브랜드 아이콘이 제외되어 동일한 스트로크 규격(24px, 2px)으로 직접 그렸습니다.
 */
export function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
