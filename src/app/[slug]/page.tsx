import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyableCode } from "@/components/copyable-code";
import { getArticleBySlug, getArticlePath, longTailArticles, type LongTailArticle } from "@/lib/articles";
import { getLegalPagePath, legalPages } from "@/lib/legal-pages";
import {
  getRelatedTikTokEmojis,
  getTikTokEmojiBySlug,
  getTikTokEmojiPath,
  getTikTokEmojiSeoContent,
  getTikTokEmojiSlug,
  tiktokEmojis,
} from "@/lib/tiktok-emojis";
import { absoluteUrl, siteName } from "@/lib/site";

type EmojiPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...tiktokEmojis.map((item) => ({
      slug: getTikTokEmojiSlug(item),
    })),
    ...longTailArticles.map((article) => ({
      slug: article.slug,
    })),
  ];
}

export async function generateMetadata({ params }: EmojiPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getTikTokEmojiBySlug(slug);
  const article = getArticleBySlug(slug);

  if (item) {
    const content = getTikTokEmojiSeoContent(item);
    const path = getTikTokEmojiPath(item) ?? "/";
    const image = item.image ? absoluteUrl(item.image) : undefined;

    return {
      title: {
        absolute: content.title,
      },
      description: content.description,
      alternates: {
        canonical: path,
      },
      openGraph: {
        title: content.title,
        description: content.description,
        url: path,
        siteName,
        type: "article",
        images: image
          ? [
              {
                url: image,
                width: 256,
                height: 256,
                alt: content.keyword,
              },
            ]
          : undefined,
      },
      twitter: {
        card: "summary",
        title: content.title,
        description: content.description,
        images: image ? [image] : undefined,
      },
    };
  }

  if (article) {
    const path = getArticlePath(article);

    return {
      title: {
        absolute: article.title,
      },
      description: article.description,
      alternates: {
        canonical: path,
      },
      openGraph: {
        title: article.title,
        description: article.description,
        url: path,
        siteName,
        type: "article",
      },
      twitter: {
        card: "summary",
        title: article.title,
        description: article.description,
      },
    };
  }

  return {
    title: "TikTok Emoji Not Found",
  };
}

export default async function EmojiDetailPage({ params }: EmojiPageProps) {
  const { slug } = await params;
  const item = getTikTokEmojiBySlug(slug);

  if (item) {
    return <TikTokEmojiDetailPage item={item} />;
  }

  const article = getArticleBySlug(slug);

  if (article) {
    return <TikTokArticlePage article={article} />;
  }

  notFound();
}

function TikTokEmojiDetailPage({ item }: { item: NonNullable<ReturnType<typeof getTikTokEmojiBySlug>> }) {
  const content = getTikTokEmojiSeoContent(item);
  const related = getRelatedTikTokEmojis(item);
  const path = getTikTokEmojiPath(item) ?? "/";
  const accentStyle = { "--accent": item.accent } as CSSProperties;
  const pageUrl = absoluteUrl(path);
  const imageUrl = item.image ? absoluteUrl(item.image) : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.keyword,
    headline: content.title,
    description: content.description,
    url: pageUrl,
    image: imageUrl,
    mainEntity: {
      "@type": "DefinedTerm",
      name: content.keyword,
      termCode: item.code,
      inDefinedTermSet: "TikTok emoji shortcode",
      description: content.meaning,
    },
  };

  return (
    <main suppressHydrationWarning className="lab-shell min-h-screen" style={accentStyle}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="lab-topbar">
        <div className="lab-wrap flex items-center justify-between gap-6 py-3.5">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="lab-mark" aria-hidden="true">
              :)
            </span>
            <span className="lab-mono truncate text-[11px] font-bold tracking-[0.24em] text-[var(--ink)]">
              TIKTOK EMOJI LAB
            </span>
          </Link>
          <Link href="/#library" className="lab-cta">
            All codes
          </Link>
        </div>
      </header>

      <article className="lab-wrap pb-20 pt-10 lg:pt-14">
        <nav className="emoji-breadcrumb lab-mono" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{content.keyword}</span>
        </nav>

        <div className="emoji-detail-hero">
          <div className="min-w-0">
            <p className="lab-eyebrow">
              <span className="lab-dot" aria-hidden="true" />
              TikTok shortcode guide
            </p>
            <h1 className="emoji-detail-title">{content.keyword}</h1>
            <p className="emoji-detail-lede">{content.description}</p>

            <div className="emoji-detail-actions">
              <CopyableCode
                value={item.code}
                label={`${item.name} shortcode`}
                className="emoji-detail-code-copy"
                codeClassName="emoji-detail-code"
              />
              <span className="emoji-detail-pill lab-mono">{item.category}</span>
              <span className="emoji-detail-pill lab-mono">{item.tone}</span>
            </div>
          </div>

          <aside className="emoji-detail-card" aria-label={`${item.name} emoji facts`}>
            <div className="emoji-detail-visual">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={`${item.name} TikTok emoji`}
                  width={160}
                  height={160}
                  priority
                  className="h-28 w-28 object-contain drop-shadow-[0_18px_22px_rgba(13,16,23,0.2)]"
                />
              ) : (
                <span>{item.glyph}</span>
              )}
            </div>

            <dl className="emoji-facts">
              <div>
                <dt>Shortcode</dt>
                <dd>
                  <CopyableCode
                    value={item.code}
                    label={`${item.name} shortcode`}
                    as="span"
                    className="emoji-fact-code-copy"
                    codeClassName="emoji-fact-code lab-mono"
                  />
                </dd>
              </div>
              <div>
                <dt>Name</dt>
                <dd>{item.name}</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{item.category}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="emoji-detail-grid">
          <section className="emoji-copy-block">
            <span className="emoji-section-kicker lab-mono">Meaning</span>
            <h2>What does {content.keyword} mean?</h2>
            <p>{content.meaning}</p>
          </section>

          <section className="emoji-copy-block">
            <span className="emoji-section-kicker lab-mono">Usage</span>
            <h2>How to use {item.code}</h2>
            <ul className="emoji-list">
              {content.usage.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="emoji-copy-block">
            <span className="emoji-section-kicker lab-mono">Examples</span>
            <h2>{item.name} TikTok emoji captions</h2>
            <ul className="emoji-example-list">
              {content.examples.map((example) => (
                <li key={example}>
                  <CopyableCode value={example} label={`${item.name} caption`} className="emoji-example-copy" />
                </li>
              ))}
            </ul>
          </section>

          <section className="emoji-copy-block">
            <span className="emoji-section-kicker lab-mono">Related</span>
            <h2>More {item.category.toLowerCase()} TikTok emojis</h2>
            <div className="emoji-related-grid">
              {related.map((relatedItem) => {
                const relatedPath = getTikTokEmojiPath(relatedItem);

                if (!relatedPath) {
                  return null;
                }

                return (
                  <article
                    key={relatedItem.code}
                    className="emoji-related-row"
                    style={{ "--accent": relatedItem.accent } as CSSProperties}
                  >
                    <Link href={relatedPath} className="emoji-related-card">
                      <span className="emoji-related-visual">
                        {relatedItem.image ? (
                          <Image
                            src={relatedItem.image}
                            alt={`${relatedItem.name} TikTok emoji`}
                            width={56}
                            height={56}
                            className="h-10 w-10 object-contain"
                          />
                        ) : (
                          relatedItem.glyph
                        )}
                      </span>
                      <strong>{relatedItem.name}</strong>
                    </Link>
                    <CopyableCode
                      value={relatedItem.code}
                      label={`${relatedItem.name} shortcode`}
                      as="span"
                      className="emoji-related-code-copy"
                      codeClassName="emoji-related-code lab-mono"
                    />
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        <footer className="article-footer">
          <Link href="/#library" className="lab-cta">
            Copy TikTok emoji codes
          </Link>
          <nav className="article-legal-links" aria-label="Site policies">
            {legalPages.map((page) => (
              <Link key={page.slug} href={getLegalPagePath(page)}>
                {page.label}
              </Link>
            ))}
          </nav>
        </footer>
      </article>
    </main>
  );
}

function TikTokArticlePage({ article }: { article: LongTailArticle }) {
  const path = getArticlePath(article);
  const accentStyle = { "--accent": article.accent } as CSSProperties;
  const pageUrl = absoluteUrl(path);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: pageUrl,
    dateModified: article.updatedIso,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: siteName,
    },
  };

  return (
    <main suppressHydrationWarning className="lab-shell min-h-screen" style={accentStyle}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="lab-topbar">
        <div className="lab-wrap flex items-center justify-between gap-6 py-3.5">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="lab-mark" aria-hidden="true">
              :)
            </span>
            <span className="lab-mono truncate text-[11px] font-bold tracking-[0.24em] text-[var(--ink)]">
              TIKTOK EMOJI LAB
            </span>
          </Link>
          <Link href="/#seo-guides" className="lab-cta">
            Guides
          </Link>
        </div>
      </header>

      <article className="article-shell lab-wrap pb-20 pt-10 lg:pt-14">
        <nav className="emoji-breadcrumb lab-mono" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{article.keyword}</span>
        </nav>

        <header className="article-hero">
          <p className="lab-eyebrow">
            <span className="lab-dot" aria-hidden="true" />
            TikTok emoji guide
          </p>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-lede">{article.lede}</p>
          <div className="article-meta">
            <span>{article.keyword}</span>
            <span>{article.readTime}</span>
            <span>{article.updated}</span>
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-note" aria-label="Quick answer">
            <span className="emoji-section-kicker lab-mono">Quick answer</span>
            <p>{article.quickAnswer}</p>
          </aside>

          <div className="article-body">
            {article.sections.map((section) => (
              <section className="article-section" key={section.heading}>
                <h2>{section.heading}</h2>

                {section.body?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.steps ? (
                  <ol>
                    {section.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                ) : null}

                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {section.examples ? (
                  <div className="article-examples" aria-label={`${section.heading} examples`}>
                    {section.examples.map((example) => (
                      <CopyableCode key={example} value={example} label={`${section.heading} example`} />
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>

        <footer className="article-footer">
          <Link href="/#library" className="lab-cta">
            Copy TikTok emoji codes
          </Link>
          <Link href="/#seo-guides" className="article-back-link">
            More TikTok emoji guides
          </Link>
          <nav className="article-legal-links" aria-label="Site policies">
            {legalPages.map((page) => (
              <Link key={page.slug} href={getLegalPagePath(page)}>
                {page.label}
              </Link>
            ))}
          </nav>
        </footer>
      </article>
    </main>
  );
}
