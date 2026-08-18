/**
 * 다이닝 공간 데이터
 * -----------------------------------------------------------------------------
 * 갤러리 순서와 그리드 배치를 함께 관리합니다.
 */

import { images, type SiteImage } from "@/data/images";

export type SpaceItem = {
  id: string;
  title: string;
  description: string;
  image: SiteImage;
  /** 데스크톱 비대칭 그리드에서 세로로 긴 칸을 차지할지 여부 */
  tall: boolean;
};

export const spaceItems: readonly SpaceItem[] = [
  {
    id: "main-hall",
    title: "메인 홀",
    description: "테이블 간격을 넓게 두어 대화가 흐트러지지 않습니다.",
    image: images.spaceHall,
    tall: false,
  },
  {
    id: "private-room",
    title: "프라이빗 룸",
    description: "4인부터 12인까지, 문을 닫으면 온전히 한 팀의 공간이 됩니다.",
    image: images.spacePrivate,
    tall: true,
  },
  {
    id: "wine",
    title: "와인 셀렉션",
    description: "한우의 결에 맞춰 고른 레드와 스파클링을 준비했습니다.",
    image: images.spaceWine,
    tall: true,
  },
  {
    id: "table-setting",
    title: "테이블 세팅",
    description: "유기와 백자, 그리고 낮은 조도. 한 상의 인상을 정돈합니다.",
    image: images.spaceTable,
    tall: false,
  },
  {
    id: "chef",
    title: "셰프의 조리 공간",
    description: "손질부터 마무리까지, 시선이 닿는 자리에서 진행됩니다.",
    image: images.spaceChef,
    tall: true,
  },
  {
    id: "lounge",
    title: "저녁의 라운지",
    description: "식사 전후로 가볍게 머무를 수 있는 자리를 두었습니다.",
    image: images.spaceLounge,
    tall: false,
  },
] as const;

/** 이용 목적 안내 */
export const spaceOccasions = [
  "비즈니스 접대",
  "가족 모임",
  "기념일",
  "데이트",
  "소규모 프라이빗 모임",
] as const;
