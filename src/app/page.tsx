import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { Quality } from "@/components/sections/Quality";
import { MenuSection } from "@/components/sections/MenuSection";
import { Spaces } from "@/components/sections/Spaces";
import { Reservation } from "@/components/sections/Reservation";
import { Location } from "@/components/sections/Location";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <BrandStory />
      <Quality />
      <MenuSection />
      <Spaces />
      <Reservation />
      <Location />
    </main>
  );
}
