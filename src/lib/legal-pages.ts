export type LegalPageSection = {
  heading: string;
  body: readonly string[];
  bullets?: readonly string[];
};

export type LegalPageContent = {
  slug: string;
  label: string;
  title: string;
  description: string;
  lede: string;
  accent: string;
  updated: string;
  updatedIso: string;
  sections: readonly LegalPageSection[];
};

export const contactEmail = "hello@tiktokemojilab.com";

export const legalPages = [
  {
    slug: "about",
    label: "About",
    title: "About TikTok Emoji Lab",
    description:
      "Learn what TikTok Emoji Lab does, how the shortcode reference is maintained, and how it stays independent from TikTok.",
    lede:
      "TikTok Emoji Lab is an independent reference for TikTok-style shortcode emojis, creator reaction packs, and copy-ready emoji guides.",
    accent: "#06c6bf",
    updated: "June 18, 2026",
    updatedIso: "2026-06-18",
    sections: [
      {
        heading: "What this site does",
        body: [
          "The site collects TikTok emoji shortcodes in one place so creators can search, compare, copy, and understand how each code is normally used.",
          "It also provides short practical guides for common questions, such as how to type hidden TikTok emojis and how to use PNG references outside the app.",
        ],
      },
      {
        heading: "Editorial standard",
        body: [
          "Pages are written to be useful first: exact codes, plain meanings, realistic examples, and notes about common mistakes.",
          "When a shortcode or visual reference changes, the goal is to update the affected page rather than inflate the site with unrelated content.",
        ],
      },
      {
        heading: "Independence",
        body: [
          "TikTok Emoji Lab is not affiliated with, endorsed by, or sponsored by TikTok, ByteDance, or any related company.",
          "Names, marks, app references, and emoji visuals belong to their respective owners and are used here for identification and reference.",
        ],
      },
    ],
  },
  {
    slug: "privacy",
    label: "Privacy",
    title: "Privacy Policy",
    description:
      "Privacy information for TikTok Emoji Lab, including basic site logs, contact messages, and how privacy requests are handled.",
    lede:
      "TikTok Emoji Lab is designed as a lightweight reference site. You can browse emoji codes without creating an account or submitting personal details.",
    accent: "#ff2d6b",
    updated: "June 18, 2026",
    updatedIso: "2026-06-18",
    sections: [
      {
        heading: "Information you provide",
        body: [
          "If you contact the site operator by email, the message may include your email address, name, and any details you choose to share.",
          "That information is used to reply to your request, investigate corrections, handle privacy questions, or manage site operations.",
        ],
      },
      {
        heading: "Automatic information",
        body: [
          "Like most websites, the hosting provider may process standard technical data such as IP address, browser type, device information, referring pages, requested URLs, and timestamps.",
          "This data is used for security, debugging, abuse prevention, performance monitoring, and basic traffic understanding.",
        ],
      },
      {
        heading: "Cookies and analytics",
        body: [
          "The emoji copy tools do not require a user account, payment profile, or tracking cookie to work.",
          "If analytics or security tooling is enabled, it should be used to understand aggregate site performance and protect the service, not to sell personal information.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          `For privacy questions, correction requests, or deletion requests about messages you sent to the site operator, contact ${contactEmail}.`,
          "You can also use browser controls to block cookies, clear local storage, or limit referrer information.",
        ],
      },
    ],
  },
  {
    slug: "contact",
    label: "Contact",
    title: "Contact TikTok Emoji Lab",
    description:
      "Contact TikTok Emoji Lab for shortcode corrections, privacy requests, accessibility issues, or site feedback.",
    lede:
      "Use this page for correction requests, privacy questions, accessibility reports, and practical feedback about the emoji reference.",
    accent: "#ffb000",
    updated: "June 18, 2026",
    updatedIso: "2026-06-18",
    sections: [
      {
        heading: "Email",
        body: [
          `Send site questions and requests to ${contactEmail}.`,
          "For faster handling, include the page URL, the emoji shortcode involved, and a short description of what should be reviewed.",
        ],
      },
      {
        heading: "Good reasons to contact",
        body: ["The site operator reviews messages related to the accuracy, safety, accessibility, and operation of this reference."],
        bullets: [
          "A shortcode appears outdated, duplicated, or incorrectly described.",
          "A page has a broken image, broken link, typo, or accessibility issue.",
          "You have a privacy, removal, attribution, or rights-related request.",
          "You want to report spam, scraping abuse, or a security concern.",
        ],
      },
      {
        heading: "What not to send",
        body: [
          "Do not send passwords, payment details, private TikTok account data, or sensitive personal information.",
          "TikTok Emoji Lab cannot recover TikTok accounts, change TikTok app behavior, or provide official TikTok support.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    label: "Terms",
    title: "Terms of Use",
    description:
      "Terms for using TikTok Emoji Lab, including acceptable use, independence, reference-only content, and limitations.",
    lede:
      "These terms explain the basic rules for using TikTok Emoji Lab as an independent shortcode and creator reference.",
    accent: "#8b5cf6",
    updated: "June 18, 2026",
    updatedIso: "2026-06-18",
    sections: [
      {
        heading: "Reference-only content",
        body: [
          "The site provides practical reference content for TikTok emoji shortcodes, examples, and creator workflows.",
          "Information is provided for general use and may change as TikTok updates its app, supported shortcodes, or rendering behavior.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "You may use the site to browse, copy, compare, and learn about emoji shortcodes.",
          "Do not use the site to abuse TikTok features, mislead users, scrape at disruptive scale, interfere with the service, or violate another platform's rules.",
        ],
      },
      {
        heading: "Ownership and trademarks",
        body: [
          "TikTok, ByteDance, related names, and emoji assets are the property of their respective owners.",
          "TikTok Emoji Lab is independent and does not claim ownership of third-party marks or official app assets.",
        ],
      },
      {
        heading: "No warranty",
        body: [
          "The site is provided as is, without guarantees that every shortcode will work in every region, device, TikTok version, comment field, or caption field.",
          `For questions about these terms, contact ${contactEmail}.`,
        ],
      },
    ],
  },
] as const satisfies readonly LegalPageContent[];

export type LegalPage = LegalPageContent;
export type LegalPageSlug = (typeof legalPages)[number]["slug"];

export function getLegalPage(slug: LegalPageSlug): LegalPage {
  const page = legalPages.find((item) => item.slug === slug);

  if (!page) {
    throw new Error(`Unknown legal page: ${slug}`);
  }

  return page;
}

export function getLegalPagePath(page: Pick<LegalPageContent, "slug">) {
  return `/${page.slug}`;
}
