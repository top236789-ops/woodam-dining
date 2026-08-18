import { Car, KeyRound, TrainFront } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { CopyAddressButton } from "@/components/ui/CopyAddressButton";
import { MapPlaceholder } from "@/components/ui/MapPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { address, map } from "@/config/site";

const accessRows = [
  { icon: TrainFront, label: "지하철", value: address.subway },
  { icon: Car, label: "주차", value: address.parking },
  { icon: KeyRound, label: "발렛", value: address.valet },
] as const;

export function Location() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="border-t border-warm-500/10 bg-ink-950 py-24 md:py-section"
    >
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:col-start-1">
            <SectionHeading
              id="location-heading"
              eyebrow="Location"
              title="오시는 길"
            />

            <Reveal delay={100}>
              <address className="mt-10 not-italic">
                <p className="font-serif-ko text-xl leading-[1.6] text-cream md:text-2xl">
                  {address.full}
                </p>
              </address>
            </Reveal>

            <Reveal delay={140}>
              <CopyAddressButton value={address.full} className="mt-7" />
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-10 border-t border-warm-500/15">
                {accessRows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-start gap-4 border-b border-warm-500/12 py-5"
                  >
                    <row.icon
                      className="mt-0.5 h-4 w-4 flex-none text-gold"
                      aria-hidden="true"
                    />
                    <span className="w-14 flex-none text-[0.75rem] tracking-[0.14em] text-warm-500">
                      {row.label}
                    </span>
                    <span className="text-sm text-ivory sm:text-[0.9375rem]">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <ActionLink href={map.naverMapUrl} variant="outline">
                  네이버 지도
                </ActionLink>
                <ActionLink href={map.kakaoMapUrl} variant="quiet">
                  카카오맵 길찾기
                </ActionLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <MapPlaceholder />
            <p className="mt-4 text-xs leading-relaxed text-warm-500">
              지도는 실제 매장 위치 확정 후 네이버 지도 또는 카카오맵으로 연동될
              예정입니다.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
