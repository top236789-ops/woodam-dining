/**
 * 메뉴 데이터 — TEMP: 실제 메뉴 구성과 가격으로 교체
 * -----------------------------------------------------------------------------
 * 가격은 원 단위 숫자로 관리하고, 화면에는 formatPrice()로 `₩150,000` 형태로 표기합니다.
 * `signature: true` 인 항목이 대표 메뉴로 우선 노출됩니다.
 */

import { images, type SiteImage } from "@/data/images";

export type MenuItem = {
  id: string;
  name: string;
  /** 영문/로마자 표기 — 에디토리얼 레이아웃의 보조 라인 */
  nameEn: string;
  /** 한 줄 설명 */
  description: string;
  /** 가격(원). 코스 등 1인 기준 항목은 unit으로 구분합니다. */
  price: number;
  /** 가격 단위 표기 (예: 1인) */
  unit?: string;
  /** 대표 메뉴 여부 */
  signature: boolean;
  image: SiteImage;
};

/** 가격 표기 — 예: 150000 → "₩150,000" */
export function formatPrice(price: number): string {
  return `₩${price.toLocaleString("ko-KR")}`;
}

export const menuItems: readonly MenuItem[] = [
  {
    id: "signature-course",
    name: "우담 시그니처 한우 코스",
    nameEn: "Signature Hanwoo Course",
    description: "육회부터 등심, 식사까지 한 흐름으로 잇는 우담의 기준.",
    price: 150000,
    unit: "1인",
    signature: true,
    image: images.menuCourse,
  },
  {
    id: "premium-assorted",
    name: "1++ 한우 모둠",
    nameEn: "Premium Assorted Cuts",
    description: "그날의 가장 좋은 세 부위를 한 접시에 담아냅니다.",
    price: 128000,
    signature: true,
    image: images.menuAssorted,
  },
  {
    id: "tenderloin",
    name: "한우 안심",
    nameEn: "Tenderloin",
    description: "결이 부드럽고 담백한 부위. 낮은 불에서 천천히 굽습니다.",
    price: 98000,
    signature: true,
    image: images.menuTenderloin,
  },
  {
    id: "striploin",
    name: "한우 채끝",
    nameEn: "Striploin",
    description: "고소한 지방과 단단한 결이 함께 오는 부위.",
    price: 92000,
    signature: false,
    image: images.menuStriploin,
  },
  {
    id: "yukhoe",
    name: "한우 육회",
    nameEn: "Yukhoe",
    description: "당일 손질한 우둔살을 배와 참기름에 가볍게 무쳐냅니다.",
    price: 48000,
    signature: false,
    image: images.menuTartare,
  },
  {
    id: "seasonal-meal",
    name: "계절 식사",
    nameEn: "Seasonal Rice & Soup",
    description: "제철 재료로 지은 밥과 국. 식사의 끝을 정돈합니다.",
    price: 18000,
    signature: false,
    image: images.menuSeasonal,
  },
] as const;

export const signatureMenuItems = menuItems.filter((item) => item.signature);
export const otherMenuItems = menuItems.filter((item) => !item.signature);

/** 메뉴 하단 안내 — TEMP: 실제 운영 정책으로 교체 */
export const menuNotice = [
  "표기 가격은 부가세 포함 금액이며, 사정에 따라 변동될 수 있습니다.",
  "부위와 수급 상황에 따라 당일 구성이 달라질 수 있습니다.",
] as const;
