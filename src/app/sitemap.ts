import type { MetadataRoute } from "next";
import { seo } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-01-01");

  return [
    {
      url: seo.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${seo.siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${seo.siteUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
