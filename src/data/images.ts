/**
 * 임시 이미지 정의
 * -----------------------------------------------------------------------------
 * 현재는 Unsplash의 무료 이미지(별도 출처 표기 불필요)를 사용합니다.
 * 실제 매장 사진이 준비되면 아래 `src` 값을 `/images/...` 경로로 바꾸기만 하면 됩니다.
 * 예) src: "/images/hero.jpg"
 *
 * 외부 도메인은 next.config.ts의 images.remotePatterns 에 등록되어 있습니다.
 */

export type SiteImage = {
  /** 이미지 주소 (외부 URL 또는 /images/... 로컬 경로) */
  src: string;
  /** 한국어 대체 텍스트 — 스크린리더 및 이미지 로딩 실패 시 노출 */
  alt: string;
  /** 원본 비율 (레이아웃 이동 방지용) */
  width: number;
  height: number;
};

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const images = {
  hero: {
    src: unsplash("1773902665665-0f3077aa9355"),
    alt: "은은한 조명 아래 나무 트레이에 정갈하게 담긴 최상급 한우 모둠",
    width: 1920,
    height: 1280,
  },
  /** 브랜드 스토리 */
  storySourcing: {
    src: unsplash("1603048297172-c92544798d5a"),
    alt: "짙은 색 도마 위에 놓인 두툼한 한우 원육 두 덩이",
    width: 1600,
    height: 1067,
  },
  storyAging: {
    src: unsplash("1606677661991-446cea8ee182"),
    alt: "숙성고에 걸려 천천히 숙성되고 있는 한우 원육",
    width: 1600,
    height: 2000,
  },
  storyFire: {
    src: unsplash("1709433420574-7e8b97952eed"),
    alt: "붉은 숯불 위에서 노릇하게 구워지는 한우 스테이크",
    width: 1600,
    height: 2000,
  },
  storySpace: {
    src: unsplash("1517248135467-4c7edcad34c4"),
    alt: "어두운 톤의 목재와 검은 의자로 정돈된 우담의 다이닝 공간",
    width: 1600,
    height: 1067,
  },
  /** 한우 품질 섹션 */
  quality: {
    src: unsplash("1708388464912-d4ad82dca990"),
    alt: "흑돌판 위에 펼쳐진 마블링이 선명한 한우와 유기 반상기",
    width: 1400,
    height: 1867,
  },
  /** 메뉴 */
  menuCourse: {
    src: unsplash("1663530761401-15eefb544889"),
    alt: "셰프가 접시에 소스를 끼얹어 한우 코스 요리를 완성하는 모습",
    width: 1400,
    height: 933,
  },
  menuAssorted: {
    src: unsplash("1709433420612-8cad609df914"),
    alt: "불판 위 한우 모둠과 둘러놓은 유기 그릇의 계절 찬",
    width: 1400,
    height: 1867,
  },
  menuTenderloin: {
    src: unsplash("1615937691194-97dbd3f3dc29"),
    alt: "종이 위에 놓인 결이 고운 한우 안심 두 조각",
    width: 1400,
    height: 933,
  },
  menuStriploin: {
    src: unsplash("1602470521006-59ab77068b0d"),
    alt: "지방층이 곱게 자리한 한우 채끝 원육 클로즈업",
    width: 1400,
    height: 933,
  },
  menuTartare: {
    src: unsplash("1764994880917-b46601e402ab"),
    alt: "검은 접시에 얇게 저며 담은 마블링 고운 한우",
    width: 1400,
    height: 2100,
  },
  menuSeasonal: {
    src: unsplash("1635363638580-c2809d049eee"),
    alt: "검은 돌판 위에 단정하게 차려낸 계절 식사 한 그릇",
    width: 1400,
    height: 933,
  },
  /** 다이닝 공간 갤러리 */
  spaceHall: {
    src: unsplash("1552960226-639240203497"),
    alt: "따뜻한 조명 아래 테이블이 여유롭게 배치된 우담의 메인 홀",
    width: 1600,
    height: 1067,
  },
  spacePrivate: {
    src: unsplash("1701722952679-beffce26d77a"),
    alt: "짙은 벽과 벨벳 의자로 아늑하게 꾸며진 프라이빗 룸",
    width: 1400,
    height: 2100,
  },
  spaceWine: {
    src: unsplash("1547595628-c61a29f496f0"),
    alt: "어두운 바 위에서 잔에 따라지는 와인",
    width: 1400,
    height: 2100,
  },
  spaceTable: {
    src: unsplash("1731941465921-eb4285693713"),
    alt: "와인잔과 접시가 단정하게 놓인 저녁 테이블 세팅",
    width: 1600,
    height: 1067,
  },
  spaceChef: {
    src: unsplash("1577219491135-ce391730fb2c"),
    alt: "구리빛 열등 아래에서 요리를 마무리하는 셰프",
    width: 1400,
    height: 2100,
  },
  spaceLounge: {
    src: unsplash("1414235077428-338989a2e8c0"),
    alt: "잔과 접시가 놓인 테이블 너머로 이어지는 저녁 다이닝 풍경",
    width: 1600,
    height: 1067,
  },
  /** 예약 안내 */
  reservation: {
    src: unsplash("1709548145082-04d0cde481d4"),
    alt: "조도를 낮춘 우담의 저녁 다이닝 홀",
    width: 1600,
    height: 1067,
  },
  /** 오시는 길 · 산지 이미지 */
  origin: {
    src: unsplash("1500534314209-a25ddb2bd429"),
    alt: "옅은 안개가 겹겹이 내려앉은 산지의 능선",
    width: 1600,
    height: 2400,
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
