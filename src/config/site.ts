/**
 * 우담(WOO DAM) 사이트 전역 설정
 * -----------------------------------------------------------------------------
 * 브랜드 · 연락처 · 운영시간 · 주소 · 예약 링크 · SNS · SEO 정보를 한곳에서 관리합니다.
 * 실제 오픈 전 교체가 필요한 값은 모두 `TEMP:` 주석으로 표시되어 있습니다.
 */

export type NavItem = {
  /** 헤더에 노출되는 라벨 */
  label: string;
  /** 같은 페이지 내 섹션 앵커 */
  href: string;
};

/** 브랜드 기본 정보 */
export const brand = {
  nameKo: "우담",
  nameEn: "WOO DAM",
  tagline: "프리미엄 한우 다이닝",
  /** 사이트 기본 제목 */
  title: "우담 | 프리미엄 한우 다이닝",
  description:
    "엄선한 최상급 한우와 섬세한 불의 조화. 서울 강남의 프라이빗 한우 다이닝, 우담.",
} as const;

/** 사업자 정보 — TEMP: 실제 사업자 정보로 교체 */
export const business = {
  /** TEMP: 실제 상호명 */
  legalName: "우담",
  /** TEMP: 실제 대표자명 */
  ceo: "홍길동",
  /** TEMP: 실제 사업자등록번호 */
  registrationNumber: "000-00-00000",
} as const;

/** 연락처 — TEMP: 실제 번호로 교체 */
export const contact = {
  /** 화면 표시용 전화번호 */
  phoneDisplay: "02-1234-5678",
  /** tel: 링크용 (숫자만) */
  phoneHref: "tel:0212345678",
  /** TEMP: 실제 이메일 (푸터/구조화 데이터에는 사용하지 않음) */
  email: "hello@woodam.example",
} as const;

/** 주소 — TEMP: 실제 주소로 교체 */
export const address = {
  full: "서울특별시 강남구 테헤란로 123",
  street: "테헤란로 123",
  locality: "강남구",
  region: "서울특별시",
  postalCode: "06134",
  country: "KR",
  subway: "2호선 강남역에서 도보 5분",
  parking: "건물 내 주차 가능",
  valet: "발렛파킹 가능",
} as const;

/** 운영 시간 — TEMP: 실제 운영시간으로 교체 */
export const hours = {
  open: "11:30",
  close: "22:00",
  breakStart: "15:00",
  breakEnd: "17:00",
  lastOrder: "21:00",
  /** 정기 휴무 요일 (한국어 표기) */
  closedDayLabel: "매주 월요일",
  /** 구조화 데이터(JSON-LD)용 요일 코드 */
  closedDayCode: "Monday",
  /** 영업일 요일 코드 (JSON-LD openingHoursSpecification) */
  openDayCodes: [
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
} as const;

/** 예약 관련 링크 — TEMP: 실제 예약 URL로 교체 */
export const reservation = {
  /** TEMP: 네이버 예약 실제 URL(https://booking.naver.com/...)로 교체 */
  naverUrl: "#reservation",
  /** 룸 이용 안내 문구 */
  roomNotice: "룸은 사전 예약을 권장합니다.",
  /** 단체/프라이빗 문의 안내 */
  groupNotice: "6인 이상 모임과 프라이빗 룸은 전화로 문의해 주세요.",
} as const;

/** SNS 및 외부 링크 — TEMP: 실제 계정 URL로 교체 */
export const social = {
  instagram: "https://www.instagram.com/",
  naverPlace: "https://map.naver.com/",
} as const;

/** 지도 링크 — TEMP: 실제 좌표/플레이스 URL로 교체 (현재 단계에서는 지도 API 미사용) */
export const map = {
  /** 네이버 지도에서 열기 */
  naverMapUrl: "https://map.naver.com/",
  /** 카카오맵 길찾기 */
  kakaoMapUrl: "https://map.kakao.com/",
  /** TEMP: 실제 좌표로 교체 (JSON-LD geo에 사용) */
  latitude: 37.5006,
  longitude: 127.0364,
} as const;

/** SEO / 도메인 설정 — TEMP: 실제 도메인 확정 시 siteUrl 교체 */
export const seo = {
  /** TEMP: 실제 도메인으로 교체 (예: https://woodam.co.kr) */
  siteUrl: "https://woodam-dining.vercel.app",
  ogImage: "/og-image.jpg",
  ogImageAlt: "우담 - 프리미엄 한우 다이닝",
  locale: "ko_KR",
  keywords: [
    "우담",
    "WOO DAM",
    "한우",
    "한우 다이닝",
    "프리미엄 한우",
    "강남 한우",
    "한우 오마카세",
    "룸 있는 한우",
    "기념일 식사",
    "비즈니스 접대",
  ],
  /** JSON-LD 가격대 — TEMP: 실제 객단가로 교체 */
  priceRange: "₩₩₩₩",
  /** JSON-LD 요리 종류 */
  servesCuisine: ["한우", "한식", "코리안 다이닝"],
} as const;

/** 헤더 · 푸터 내비게이션 */
export const navItems: readonly NavItem[] = [
  { label: "브랜드", href: "#brand" },
  { label: "한우", href: "#hanwoo" },
  { label: "메뉴", href: "#menu" },
  { label: "공간", href: "#space" },
  { label: "예약", href: "#reservation" },
  { label: "오시는 길", href: "#location" },
] as const;

/** 정책 페이지 링크 */
export const policyLinks = [
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
] as const;

/** 운영시간 요약 문자열 (푸터·구조화 데이터에서 재사용) */
export const hoursSummary = `${hours.open}–${hours.close} (브레이크 ${hours.breakStart}–${hours.breakEnd}) · 라스트 오더 ${hours.lastOrder}`;

export const copyright = `© 2026 ${brand.nameEn}. All rights reserved.`;
