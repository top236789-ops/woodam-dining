/**
 * 한우 품질 소개 데이터 — TEMP: 실제 확인된 내용으로 교체
 * -----------------------------------------------------------------------------
 * 확정되지 않은 등급·산지 정보를 단정적으로 표기하지 않도록,
 * 문구는 '지향점' 중심으로 작성되어 있습니다. 실제 정보 확정 후 교체해 주세요.
 */

export type QualityPoint = {
  /** 좌측 인덱스 번호 */
  index: string;
  title: string;
  description: string;
};

export const qualityPoints: readonly QualityPoint[] = [
  {
    index: "01",
    title: "1++ 한우",
    description:
      "최상위 등급의 원육을 기준으로 삼습니다. 등급표는 매장에서 확인하실 수 있습니다.",
  },
  {
    index: "02",
    title: "엄선된 산지",
    description:
      "신뢰할 수 있는 농가와 직거래해 이력이 분명한 원육만 들입니다.",
  },
  {
    index: "03",
    title: "전문가의 선별",
    description:
      "매일 입고된 원육을 육류 전문가가 직접 확인하고 골라냅니다.",
  },
  {
    index: "04",
    title: "최적의 숙성",
    description:
      "부위별 성질에 맞춰 온도와 기간을 달리한 숙성을 거칩니다.",
  },
  {
    index: "05",
    title: "섬세한 커팅과 굽기",
    description:
      "결에 맞춰 두께를 정하고, 가장 좋은 순간에 맞춰 구워 냅니다.",
  },
] as const;

/** 지표 카운터 — TEMP: 실제 수치로 교체 */
export const qualityStats = [
  { value: "1++", label: "지향하는 원육 등급" },
  { value: "28일", label: "부위별 최대 숙성 기간" },
  { value: "3부위", label: "매일 선별하는 구성" },
] as const;
