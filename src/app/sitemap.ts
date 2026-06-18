import type { MetadataRoute } from "next";
import { getArticlePath, longTailArticles } from "@/lib/articles";
import { getLegalPagePath, legalPages } from "@/lib/legal-pages";
import { getTikTokEmojiPath, tiktokEmojis } from "@/lib/tiktok-emojis";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalPages.map((page) => ({
      url: absoluteUrl(getLegalPagePath(page)),
      lastModified: new Date(page.updatedIso),
      changeFrequency: "yearly" as const,
      priority: 0.35,
    })),
    ...longTailArticles.map((article) => ({
      url: absoluteUrl(getArticlePath(article)),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...tiktokEmojis.flatMap((item) => {
      const path = getTikTokEmojiPath(item);

      if (!path) {
        return [];
      }

      return [
        {
          url: absoluteUrl(path),
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.8,
          images: item.image ? [absoluteUrl(item.image)] : undefined,
        },
      ];
    }),
  ];
}
