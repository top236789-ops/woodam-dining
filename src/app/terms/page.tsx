import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { brand, hours, reservation } from "@/config/site";

export const metadata: Metadata = {
  title: "이용약관",
  description: "우담(WOO DAM) 홈페이지 및 예약 이용약관 안내입니다.",
  robots: { index: false, follow: true },
};

/** TEMP: 실제 운영 정책에 맞게 법무 검토를 거친 내용으로 교체해 주세요. */
const sections = [
  {
    title: "1. 목적",
    body: [
      `본 약관은 ${brand.nameKo}(${brand.nameEn}) 홈페이지 이용과 매장 예약에 관한 기본 사항을 정합니다.`,
    ],
  },
  {
    title: "2. 홈페이지 이용",
    body: [
      "홈페이지에 게시된 메뉴, 가격, 이미지, 운영 정보는 사정에 따라 사전 고지 없이 변경될 수 있습니다.",
      "홈페이지의 콘텐츠에 대한 저작권은 매장에 있으며, 무단 복제 및 상업적 이용을 금합니다.",
    ],
  },
  {
    title: "3. 예약",
    body: [
      "예약은 전화 또는 외부 예약 플랫폼을 통해 접수됩니다.",
      reservation.roomNotice,
      `운영시간은 ${hours.open}–${hours.close}이며, 브레이크 타임은 ${hours.breakStart}–${hours.breakEnd}, 라스트 오더는 ${hours.lastOrder}입니다. 정기 휴무는 ${hours.closedDayLabel}입니다.`,
    ],
  },
  {
    title: "4. 예약 변경 및 취소",
    body: [
      "예약 변경과 취소는 방문 예정 시각 이전에 전화로 알려주시기 바랍니다.",
      "사전 연락 없는 미방문이 반복될 경우 이후 예약이 제한될 수 있습니다.",
    ],
  },
  {
    title: "5. 책임의 한계",
    body: [
      "천재지변, 정전, 통신 장애 등 불가항력으로 인한 서비스 중단에 대해서는 책임을 지지 않습니다.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="이용약관"
      notice="아래 내용은 임시 문안입니다. 실제 서비스 오픈 전 법무 검토를 거친 내용으로 교체해 주세요."
      sections={sections}
    />
  );
}
