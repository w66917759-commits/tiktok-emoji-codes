export type LongTailArticleSection = {
  heading: string;
  body?: string[];
  steps?: string[];
  bullets?: string[];
  examples?: string[];
};

export type LongTailArticle = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  lede: string;
  quickAnswer: string;
  accent: string;
  updated: string;
  updatedIso: string;
  readTime: string;
  sections: LongTailArticleSection[];
};

export const longTailArticles: LongTailArticle[] = [
  {
    slug: "how-to-use-tiktok-emojis",
    keyword: "how to use tiktok emojis",
    title: "How to Use TikTok Emojis Without Guessing the Codes",
    description:
      "A plain guide to using TikTok emoji shortcodes in comments and captions, with bracket examples, mistakes to avoid, and copy-ready codes.",
    lede:
      "TikTok emojis are not hiding inside your normal emoji keyboard. They are shortcodes. Type a code like [happy] or paste it into a comment, and TikTok can turn it into one of its own custom faces.",
    quickAnswer:
      "To use TikTok emojis, copy a square-bracket shortcode such as [happy], paste it into a TikTok comment or caption, and keep the code lowercase with both brackets in place.",
    accent: "#06c6bf",
    updated: "June 17, 2026",
    updatedIso: "2026-06-17",
    readTime: "4 min read",
    sections: [
      {
        heading: "Start with the code, not the keyboard",
        body: [
          "The mistake most people make is opening the phone emoji keyboard and hunting for a TikTok tab. There usually is not one. TikTok's hidden emoji set works through text codes wrapped in square brackets.",
          "That means [smile] is not a regular Unicode emoji. It is a shortcode. TikTok reads the bracketed word and, when the code is supported, swaps it for the matching TikTok-style emoji.",
        ],
      },
      {
        heading: "The quick way to use one",
        steps: [
          "Pick a shortcode from a list, for example [happy], [shock], [cry], or [loveface].",
          "Copy the full code, including the opening [ and closing ] brackets.",
          "Paste it into a TikTok comment or caption.",
          "Check the preview or posted text. If TikTok recognizes the code, it should render as a custom emoji.",
        ],
      },
      {
        heading: "Where TikTok emojis feel natural",
        body: [
          "They work best when the comment is already short. A single line like \"that ending [shock]\" reads better than a paragraph with five different reaction faces.",
          "For captions, use them as a final beat. Put the sentence first, then the shortcode. The emoji should make the tone clearer, not carry the whole post.",
        ],
        examples: [
          "that plot twist [shock]",
          "saved this sound immediately [happy]",
          "me pretending I did not see the comments [facewithrollingeyes]",
          "this edit is too clean [cool]",
        ],
      },
      {
        heading: "Small details that break the emoji",
        bullets: [
          "Use square brackets, not parentheses or curly brackets.",
          "Keep the shortcode lowercase.",
          "Do not add a space inside the brackets.",
          "If a code stays as plain text, TikTok may not support that code in the place you are typing.",
          "If you are testing on desktop, try the mobile app before assuming the code is dead.",
        ],
      },
      {
        heading: "A small set is easier than the whole list",
        body: [
          "You do not need to memorize every TikTok emoji. Start with six that cover common comment moods: [happy], [shock], [cry], [cool], [wronged], and [laughwithtears].",
          "Once those feel automatic, add more specific ones like [disdain] for dry replies, [wicked] for playful trouble, and [speechless] when the comment needs a blank stare.",
        ],
      },
    ],
  },
  {
    slug: "how-to-do-tiktok-emojis",
    keyword: "how to do tiktok emojis",
    title: "How to Do TikTok Emojis When the Keyboard Does Not Show Them",
    description:
      "Learn how to do TikTok emojis by typing bracket shortcodes manually, copying reliable codes, and checking why a code might stay as text.",
    lede:
      "When people ask how to do TikTok emojis, they usually mean one thing: how do you make those small TikTok-only faces show up in comments? The answer is simpler than the app makes it look.",
    quickAnswer:
      "To do TikTok emojis, type the exact shortcode in square brackets, like [smile] or [wronged], directly into a TikTok comment or caption.",
    accent: "#ff2d6b",
    updated: "June 17, 2026",
    updatedIso: "2026-06-17",
    readTime: "4 min read",
    sections: [
      {
        heading: "Type the brackets yourself",
        body: [
          "The TikTok emoji trick is not a filter, a sticker tray, or a special keyboard download. It is just text. The shortcode has three parts: an opening bracket, the emoji name, and a closing bracket.",
          "For example, [happy] is the whole code. If you type happy without brackets, TikTok sees a word. If you type [ happy ], the extra spaces can stop it from working.",
        ],
      },
      {
        heading: "Do one by hand",
        steps: [
          "Open a TikTok comment box or caption field.",
          "Switch to the numbers or symbols keyboard on your phone.",
          "Type [happy] exactly like that.",
          "Post or preview the text to see whether TikTok converts it.",
        ],
      },
      {
        heading: "Copying is faster for longer codes",
        body: [
          "Some shortcodes are easy to remember. [cry], [wow], and [cool] are hard to mess up. Others are longer, like [facewithrollingeyes] or [laughwithtears]. Those are better copied from a list.",
          "Copying also prevents the most common typo: replacing square brackets with regular parentheses. TikTok is looking for the bracket pattern.",
        ],
        examples: [
          "I was fine until the last clip [wronged]",
          "the timing on this transition [wow]",
          "comment section doing too much [speechless]",
          "this is exactly my humor [laughwithtears]",
        ],
      },
      {
        heading: "Do not over-stack them",
        body: [
          "One TikTok emoji can make a comment feel native. Four in a row can make it look like spam. For most comments, one shortcode at the end is enough.",
          "If you want a stronger reaction, pair two that have a reason to sit together, such as [shock] [speechless] for a reveal or [happy] [loveface] for a warm reply.",
        ],
      },
      {
        heading: "If it does not work",
        bullets: [
          "Check that every letter is lowercase.",
          "Remove spaces from inside the brackets.",
          "Try a known code such as [smile] before testing a rare one.",
          "Use the TikTok mobile app if the web version leaves the code untouched.",
          "Update the app if several common shortcodes stop converting.",
        ],
      },
    ],
  },
  {
    slug: "how-to-get-tiktok-emojis",
    keyword: "how to get tiktok emojis",
    title: "How to Get TikTok Emojis: Codes, Comments, and PNGs",
    description:
      "Find out how to get TikTok emojis by using shortcode lists, copying bracket codes, and downloading PNG versions for edits outside the app.",
    lede:
      "You do not unlock TikTok emojis from a hidden settings screen. You get them by using the right shortcode list, then copying the bracketed code into TikTok.",
    quickAnswer:
      "To get TikTok emojis, use a list of hidden shortcode names, copy codes like [smile] or [proud], and paste them where TikTok supports emoji conversion.",
    accent: "#ffb000",
    updated: "June 17, 2026",
    updatedIso: "2026-06-17",
    readTime: "4 min read",
    sections: [
      {
        heading: "There is no secret menu to unlock",
        body: [
          "TikTok's hidden emojis are not usually exposed as a normal picker. The practical way to get them is to keep a shortcode list nearby and copy the code you want.",
          "A shortcode list gives you two things at once: the exact spelling and a preview of the face. That matters because [smile], [smileface], and [happy] are different codes with different moods.",
        ],
      },
      {
        heading: "Get the code first",
        steps: [
          "Choose the TikTok emoji you want from a list.",
          "Copy the bracketed shortcode, such as [proud] or [cute].",
          "Paste it into your TikTok comment or caption.",
          "Post a quick test if you are using a code you have not tried before.",
        ],
      },
      {
        heading: "Get PNGs when you are editing outside TikTok",
        body: [
          "Shortcodes are for TikTok text fields. PNG files are useful when you want the same visual style in a thumbnail, meme, carousel, or video edit.",
          "Do not confuse the two. Pasting [happy] into a design app will stay text. Downloading the PNG gives you the image asset, but it will not act like a live TikTok emoji inside comments.",
        ],
      },
      {
        heading: "Build a small personal set",
        body: [
          "The fastest setup is a saved note with your favorites. Put the code, the mood, and one sample comment on each line. After a week, you will know which ones you actually use.",
          "For most creators, a practical starter set is more useful than a giant list. Keep one happy reaction, one shocked reaction, one soft reaction, one side-eye reaction, and one laugh reaction.",
        ],
        examples: [
          "[happy] - upbeat reply",
          "[shock] - reveal or plot twist",
          "[wronged] - soft or embarrassed reaction",
          "[disdain] - dry side-eye",
          "[laughwithtears] - comment-section joke",
        ],
      },
      {
        heading: "What to check before posting",
        bullets: [
          "Use the exact code from the list.",
          "Keep both square brackets.",
          "Do not capitalize the shortcode.",
          "Use a mobile app test for comments if desktop does not render it.",
          "Keep one emoji per short comment unless the extra one changes the joke.",
        ],
      },
    ],
  },
];

export function getArticlePath(article: LongTailArticle) {
  return `/${article.slug}`;
}

export function getArticleBySlug(slug: string) {
  return longTailArticles.find((article) => article.slug === slug) ?? null;
}
