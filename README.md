# TikTok Emoji Lab

TikTok Emoji Lab is a public, SEO-focused reference site for TikTok hidden emoji shortcodes. It helps creators search, copy, understand, and download TikTok-style emoji codes such as `[happy]`, `[shock]`, `[wronged]`, and `[laughwithtears]`.

Live site: [https://tiktokemojicodes.com](https://tiktokemojicodes.com)

GitHub: [w66917759-commits/tiktok-emoji-codes](https://github.com/w66917759-commits/tiktok-emoji-codes)

## What It Includes

- 46 TikTok hidden emoji shortcode entries with PNG references.
- Dedicated static SEO pages for each shortcode, such as `/happy-tiktok-emoji`.
- Copy-ready shortcode UI for creator comments and captions.
- Emoji pack, recipe, use-case, and PNG download sections.
- Long-tail guides for common searches like how to use TikTok emojis.
- Legal and trust pages: About, Privacy, Contact, and Terms.
- Dynamic sitemap and robots routes built from the project data sources.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react icons
- Vercel production deployment

## Project Structure

```text
src/app/                 App Router pages, metadata, sitemap, and robots routes
src/components/          Homepage, legal page, and copy-code UI components
src/lib/tiktok-emojis.ts TikTok emoji data, SEO helpers, packs, and recipes
src/lib/articles.ts      Long-tail guide content
src/lib/legal-pages.ts   About, privacy, contact, and terms content
src/lib/site.ts          Site name, description, and absolute URL helpers
public/emojis/tiktok/    Emoji PNG assets
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run lint checks:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```

## Environment

Set the canonical production URL so metadata, sitemap, robots, and structured links resolve to the apex domain:

```bash
NEXT_PUBLIC_SITE_URL=https://tiktokemojicodes.com
```

If `NEXT_PUBLIC_SITE_URL` is not set, the app falls back to Vercel URL variables and then `http://localhost:3000`.

## Content Model

The main content source is `src/lib/tiktok-emojis.ts`. Adding or editing a TikTok emoji there affects:

- homepage search and category browsing
- shortcode copy surfaces
- `/xxx-tiktok-emoji` static pages
- sitemap entries
- related emoji recommendations
- PNG download naming

Long-tail editorial guides live in `src/lib/articles.ts`, and legal pages live in `src/lib/legal-pages.ts`.

## Deployment Notes

The production project is deployed on Vercel with the apex domain as the canonical host:

- Canonical site: [https://tiktokemojicodes.com](https://tiktokemojicodes.com)
- Sitemap: [https://tiktokemojicodes.com/sitemap.xml](https://tiktokemojicodes.com/sitemap.xml)
- Robots: [https://tiktokemojicodes.com/robots.txt](https://tiktokemojicodes.com/robots.txt)

This project is independent and is not affiliated with, endorsed by, or sponsored by TikTok, ByteDance, or any related company.

## License

No open-source license has been declared yet. Until a license is added, the code is public for viewing but not automatically licensed for reuse.
