/**
 * 브랜드 스토리 데이터
 * -----------------------------------------------------------------------------
 * 에디토리얼 레이아웃에서 이미지와 텍스트가 좌우로 교차 배치됩니다.
 */

import { images, type SiteImage } from "@/data/images";

export type StoryBlock = {
  id: string;
  /** 작은 라벨 (영문) */
  eyebrow: string;
  /** 핵심 키워드 */
  title: string;
  /** 본문 — 짧고 절제된 두세 문장 */
  body: string;
  image: SiteImage;
};

export const storyIntro = {
  eyebrow: "Our Philosophy",
  title: "본질에 집중한 한우 다이닝",
  body: [
    "좋은 원육 앞에서 요리는 겸손해집니다.",
    "우담은 더하기보다 덜어내는 방식을 택했습니다. 원육을 고르는 눈, 기다리는 시간, 불을 다루는 손, 그리고 자리를 지키는 서비스. 이 네 가지에만 집중합니다.",
  ],
} as const;

export const storyBlocks: readonly StoryBlock[] = [
  {
    id: "sourcing",
    eyebrow: "Sourcing",
    title: "엄선된 원육",
    body: "매일 아침 들어온 원육을 직접 확인합니다. 기준에 닿지 않으면 그날은 내지 않습니다.",
    image: images.storySourcing,
  },
  {
    id: "aging",
    eyebrow: "Aging",
    title: "섬세한 숙성",
    body: "부위마다 필요한 시간이 다릅니다. 온도와 습도를 나누어 관리하며, 가장 좋아지는 지점까지 기다립니다.",
    image: images.storyAging,
  },
  {
    id: "fire",
    eyebrow: "Fire",
    title: "가장 맛있는 굽기",
    body: "불의 세기와 굽는 순서를 저희가 맡습니다. 손님은 가장 좋은 한 점만 받으시면 됩니다.",
    image: images.storyFire,
  },
  {
    id: "space",
    eyebrow: "Hospitality",
    title: "품격 있는 공간",
    body: "대화가 편안한 조도와 간격을 지킵니다. 자리의 목적이 무엇이든, 그 자리가 주인공이 되도록.",
    image: images.storySpace,
  },
] as const;
