import type { MetadataRoute } from "next";
import { siteContent } from "@/src/content/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://reelsinminutes.com";

  const caseStudyUrls = Object.keys(siteContent.caseStudiesData).map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...caseStudyUrls,
  ];
}
