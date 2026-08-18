import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { business, contact } from "@/config/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "우담(WOO DAM) 개인정보처리방침 안내입니다.",
  robots: { index: false, follow: true },
};

/** TEMP: 실제 운영 정책에 맞게 법무 검토를 거친 내용으로 교체해 주세요. */
const sections = [
  {
    title: "1. 수집하는 개인정보 항목",
    body: [
      "우담 홈페이지는 회원가입, 로그인, 온라인 문의 폼을 운영하지 않으며 웹사이트에서 직접 개인정보를 수집하지 않습니다.",
      "전화 예약 시에는 예약자 성함, 연락처, 방문 일시, 인원 등 예약 이행에 필요한 최소한의 정보를 수집합니다.",
    ],
  },
  {
    title: "2. 개인정보의 이용 목적",
    body: [
      "수집한 정보는 예약 확인, 변경 및 취소 안내, 방문 당일 응대 등 예약 서비스 제공 목적에만 이용합니다.",
    ],
  },
  {
    title: "3. 보유 및 이용 기간",
    body: [
      "예약 목적이 달성된 후에는 관계 법령에서 정한 보존 기간을 제외하고 지체 없이 파기합니다.",
    ],
  },
  {
    title: "4. 제3자 제공",
    body: [
      "법령에 근거한 경우를 제외하고 이용자의 개인정보를 제3자에게 제공하지 않습니다.",
      "외부 예약 플랫폼(네이버 예약 등)을 통해 예약하실 경우, 해당 플랫폼의 개인정보처리방침이 함께 적용됩니다.",
    ],
  },
  {
    title: "5. 문의처",
    body: [
      `개인정보 관련 문의는 ${contact.phoneDisplay} 로 연락해 주시기 바랍니다.`,
      `개인정보 보호책임자: ${business.ceo}`,
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="개인정보처리방침"
      notice="아래 내용은 임시 문안입니다. 실제 서비스 오픈 전 법무 검토를 거친 내용으로 교체해 주세요."
      sections={sections}
    />
  );
}
