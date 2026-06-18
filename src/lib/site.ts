export const siteName = "TikTok Emoji Lab";

export const siteDescription =
  "Search, copy, and understand TikTok hidden emoji shortcodes with TikTok-only reaction packs and dedicated emoji guides.";

export function getSiteUrl() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

  if (!rawUrl) {
    return "http://localhost:3000";
  }

  const withProtocol = rawUrl.startsWith("http://") || rawUrl.startsWith("https://") ? rawUrl : `https://${rawUrl}`;

  return withProtocol.replace(/\/+$/, "");
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, `${getSiteUrl()}/`).toString();
}
