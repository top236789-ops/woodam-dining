/**
 * 음식점 구조화 데이터(JSON-LD)
 * -----------------------------------------------------------------------------
 * 여기에 들어가는 상호 · 주소 · 전화번호 · 영업시간 · 가격대는 모두 임시값입니다.
 * 값은 src/config/site.ts 한 곳에서만 수정하면 됩니다.
 */

import {
  address,
  brand,
  business,
  contact,
  hours,
  map,
  reservation,
  seo,
  social,
} from "@/config/site";
import { menuItems } from "@/data/menu";

export function buildRestaurantJsonLd() {
  const sameAs = [social.instagram, social.naverPlace].filter(
    (url) => url && !url.startsWith("#"),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${seo.siteUrl}/#restaurant`,
    name: brand.nameKo,
    alternateName: brand.nameEn,
    legalName: business.legalName,
    description: brand.description,
    url: seo.siteUrl,
    image: [`${seo.siteUrl}${seo.ogImage}`],
    telephone: contact.phoneDisplay,
    priceRange: seo.priceRange,
    servesCuisine: [...seo.servesCuisine],
    currenciesAccepted: "KRW",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: map.latitude,
      longitude: map.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...hours.openDayCodes],
        opens: hours.open,
        closes: hours.breakStart,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...hours.openDayCodes],
        opens: hours.breakEnd,
        closes: hours.close,
      },
    ],
    acceptsReservations: reservation.naverUrl.startsWith("http")
      ? reservation.naverUrl
      : "True",
    hasMenu: {
      "@type": "Menu",
      name: "우담 메뉴",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "대표 메뉴",
          hasMenuItem: menuItems.map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            description: item.description,
            offers: {
              "@type": "Offer",
              price: item.price,
              priceCurrency: "KRW",
            },
          })),
        },
      ],
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seo.siteUrl}/#website`,
    name: brand.title,
    url: seo.siteUrl,
    inLanguage: "ko-KR",
    publisher: { "@id": `${seo.siteUrl}/#restaurant` },
  };
}
