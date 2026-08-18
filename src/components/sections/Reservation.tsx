import { CalendarCheck, Phone } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { contact, hours, reservation } from "@/config/site";
import { images } from "@/data/images";

const infoRows = [
  { label: "전화번호", value: contact.phoneDisplay },
  { label: "운영시간", value: `${hours.open}–${hours.close}` },
  { label: "브레이크 타임", value: `${hours.breakStart}–${hours.breakEnd}` },
  { label: "라스트 오더", value: hours.lastOrder },
  { label: "휴무일", value: hours.closedDayLabel },
  { label: "룸 이용", value: reservation.roomNotice },
] as const;

export function Reservation() {
  return (
    <section
      id="reservation"
      aria-labelledby="reservation-heading"
      className="bg-ink-900 py-24 md:py-section"
    >
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 lg:col-start-1">
            <SectionHeading
              id="reservation-heading"
              eyebrow="Reservation"
              title="소중한 자리를 준비하겠습니다"
              lead={[
                "인원과 목적을 알려주시면 자리와 코스를 함께 맞춰 드립니다.",
                reservation.groupNotice,
              ]}
            />

            <Reveal delay={100}>
              <dl className="mt-12 border-t border-warm-500/15">
                {infoRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-warm-500/12 py-4 sm:grid-cols-[8rem_1fr]"
                  >
                    <dt className="text-[0.75rem] tracking-[0.14em] text-warm-500">
                      {row.label}
                    </dt>
                    <dd className="text-sm text-ivory sm:text-[0.9375rem]">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <ActionLink
                  href={contact.phoneHref}
                  variant="solid"
                  size="lg"
                  icon={<Phone className="h-4 w-4" aria-hidden="true" />}
                >
                  전화 예약
                </ActionLink>
                <ActionLink
                  href={reservation.naverUrl}
                  variant="outline"
                  size="lg"
                  icon={<CalendarCheck className="h-4 w-4" aria-hidden="true" />}
                >
                  네이버 예약
                </ActionLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
            <SmartImage
              image={images.reservation}
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
