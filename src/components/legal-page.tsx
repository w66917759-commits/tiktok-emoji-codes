import type { CSSProperties } from "react";
import Link from "next/link";
import { contactEmail, getLegalPagePath, legalPages, type LegalPage } from "@/lib/legal-pages";
import { siteName } from "@/lib/site";

export function LegalPageView({ page }: { page: LegalPage }) {
  const accentStyle = { "--accent": page.accent } as CSSProperties;

  return (
    <main suppressHydrationWarning className="lab-shell min-h-screen" style={accentStyle}>
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
            Open library
          </Link>
        </div>
      </header>

      <article className="legal-page lab-wrap pb-20 pt-10 lg:pt-14">
        <nav className="emoji-breadcrumb lab-mono" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{page.label}</span>
        </nav>

        <header className="legal-hero">
          <p className="lab-eyebrow">
            <span className="lab-dot" aria-hidden="true" />
            Site information
          </p>
          <h1 className="legal-title">{page.title}</h1>
          <p className="legal-lede">{page.lede}</p>
          <div className="article-meta">
            <span>Last updated {page.updated}</span>
            <span>{siteName}</span>
          </div>
        </header>

        <div className="legal-layout">
          <aside className="legal-aside" aria-label="Site policy links">
            <p className="lab-mono legal-aside-label">Site pages</p>
            <nav className="legal-aside-nav">
              {legalPages.map((item) => (
                <Link
                  key={item.slug}
                  href={getLegalPagePath(item)}
                  aria-current={item.slug === page.slug ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a className="legal-email" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </aside>

          <div className="legal-body">
            {page.sections.map((section) => (
              <section key={section.heading} className="article-section legal-section">
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>

        <footer className="article-footer">
          <Link href="/" className="lab-cta">
            Back to emoji library
          </Link>
          <nav className="article-legal-links" aria-label="Site policies">
            {legalPages.map((item) => (
              <Link key={item.slug} href={getLegalPagePath(item)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </footer>
      </article>
    </main>
  );
}
