export type EmojiCategory =
  | "Happy"
  | "Angry"
  | "Sad"
  | "Expression"
  | "Surprise"
  | "Love"
  | "Cool"
  | "Reaction";

export type TikTokEmoji = {
  id?: string;
  name: string;
  code: string;
  category: EmojiCategory;
  glyph: string;
  tone: string;
  accent: string;
  image?: string;
  sourceUrl?: string;
};

export type TikTokEmojiSeoContent = {
  keyword: string;
  title: string;
  description: string;
  meaning: string;
  usage: string[];
  examples: string[];
};

export const categories: Array<"All" | EmojiCategory> = [
  "All",
  "Happy",
  "Angry",
  "Sad",
  "Expression",
  "Surprise",
  "Reaction",
  "Cool",
  "Love",
];

export const tiktokEmojis: TikTokEmoji[] = [
  { id: "smile", name: "Smile", code: "[smile]", category: "Happy", glyph: "🙂", tone: "sweet", accent: "#ff5f9e", image: "/emojis/tiktok/smile.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/smile" },
  { id: "happy", name: "Happy", code: "[happy]", category: "Happy", glyph: "😄", tone: "bright", accent: "#ffb000", image: "/emojis/tiktok/happy.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/happy" },
  { id: "angry", name: "Angry", code: "[angry]", category: "Angry", glyph: "😡", tone: "hot", accent: "#ff4d4d", image: "/emojis/tiktok/angry.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/angry" },
  { id: "cry", name: "Cry", code: "[cry]", category: "Sad", glyph: "😢", tone: "soft", accent: "#4aa8ff", image: "/emojis/tiktok/cry.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/cry" },
  { id: "embarrassed", name: "Embarrassed", code: "[embarrassed]", category: "Expression", glyph: "😳", tone: "shy", accent: "#ff7ab6", image: "/emojis/tiktok/embarrassed.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/embarrassed" },
  { id: "surprised", name: "Surprised", code: "[surprised]", category: "Surprise", glyph: "😮", tone: "pop", accent: "#5ce1e6", image: "/emojis/tiktok/surprised.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/surprised" },
  { id: "wronged", name: "Wronged", code: "[wronged]", category: "Expression", glyph: "🥺", tone: "hurt", accent: "#8fb9ff", image: "/emojis/tiktok/wronged.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/wronged" },
  { id: "shout", name: "Shout", code: "[shout]", category: "Expression", glyph: "📣", tone: "loud", accent: "#ffd166", image: "/emojis/tiktok/shout.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/shout" },
  { id: "flushed", name: "Flushed", code: "[flushed]", category: "Expression", glyph: "😊", tone: "warm", accent: "#ff8fab", image: "/emojis/tiktok/flushed.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/flushed" },
  { id: "yummy", name: "Yummy", code: "[yummy]", category: "Reaction", glyph: "😋", tone: "snack", accent: "#f6d365", image: "/emojis/tiktok/yummy.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/yummy" },
  { id: "complacent", name: "Complacent", code: "[complacent]", category: "Cool", glyph: "😏", tone: "smug", accent: "#a78bfa", image: "/emojis/tiktok/complacent.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/complacent" },
  { id: "drool", name: "Drool", code: "[drool]", category: "Love", glyph: "🤤", tone: "crave", accent: "#68d391", image: "/emojis/tiktok/drool.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/drool" },
  { id: "scream", name: "Scream", code: "[scream]", category: "Surprise", glyph: "😱", tone: "panic", accent: "#64b5f6", image: "/emojis/tiktok/scream.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/scream" },
  { id: "weep", name: "Weep", code: "[weep]", category: "Sad", glyph: "😭", tone: "deep", accent: "#60a5fa", image: "/emojis/tiktok/weep.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/weep" },
  { id: "speechless", name: "Speechless", code: "[speechless]", category: "Reaction", glyph: "😶", tone: "blank", accent: "#2dd4bf", image: "/emojis/tiktok/speechless.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/speechless" },
  { id: "funnyface", name: "Funny Face", code: "[funnyface]", category: "Expression", glyph: "🤪", tone: "silly", accent: "#ff6bcb", image: "/emojis/tiktok/funnyface.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/funnyface" },
  { id: "laughwithtears", name: "Laugh With Tears", code: "[laughwithtears]", category: "Happy", glyph: "😂", tone: "lol", accent: "#38bdf8", image: "/emojis/tiktok/laughwithtears.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/laughwithtears" },
  { id: "wicked", name: "Wicked", code: "[wicked]", category: "Expression", glyph: "😈", tone: "mischief", accent: "#c084fc", image: "/emojis/tiktok/wicked.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/wicked" },
  { id: "facewithrollingeyes", name: "Face With Rolling Eyes", code: "[facewithrollingeyes]", category: "Reaction", glyph: "🙄", tone: "done", accent: "#f472b6", image: "/emojis/tiktok/facewithrollingeyes.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/facewithrollingeyes" },
  { id: "sulk", name: "Sulk", code: "[sulk]", category: "Angry", glyph: "😤", tone: "mad", accent: "#fb7185", image: "/emojis/tiktok/sulk.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/sulk" },
  { id: "thinking", name: "Thinking", code: "[thinking]", category: "Reaction", glyph: "🤔", tone: "hmm", accent: "#facc15", image: "/emojis/tiktok/thinking.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/thinking" },
  { id: "lovely", name: "Lovely", code: "[lovely]", category: "Love", glyph: "😘", tone: "kiss", accent: "#ff4fa3", image: "/emojis/tiktok/lovely.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/lovely" },
  { id: "greedy", name: "Greedy", code: "[greedy]", category: "Expression", glyph: "🤑", tone: "money", accent: "#22c55e", image: "/emojis/tiktok/greedy.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/greedy" },
  { id: "wow", name: "Wow", code: "[wow]", category: "Surprise", glyph: "😲", tone: "wide", accent: "#f97316", image: "/emojis/tiktok/wow.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/wow" },
  { id: "hehe", name: "Hehe", code: "[hehe]", category: "Happy", glyph: "😏", tone: "sneak", accent: "#34d399", image: "/emojis/tiktok/hehe.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/hehe" },
  { id: "joyful", name: "Joyful", code: "[joyful]", category: "Happy", glyph: "😁", tone: "glow", accent: "#fde047", image: "/emojis/tiktok/joyful.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/joyful" },
  { id: "slap", name: "Slap", code: "[slap]", category: "Reaction", glyph: "👋", tone: "snap", accent: "#fb923c", image: "/emojis/tiktok/slap.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/slap" },
  { id: "tears", name: "Tears", code: "[tears]", category: "Sad", glyph: "🥲", tone: "teary", accent: "#38bdf8", image: "/emojis/tiktok/tears.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/tears" },
  { id: "stun", name: "Stun", code: "[stun]", category: "Surprise", glyph: "😵", tone: "dizzy", accent: "#a3e635", image: "/emojis/tiktok/stun.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/stun" },
  { id: "cute", name: "Cute", code: "[cute]", category: "Love", glyph: "🥰", tone: "soft", accent: "#fb7185", image: "/emojis/tiktok/cute.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/cute" },
  { id: "blink", name: "Blink", code: "[blink]", category: "Expression", glyph: "😉", tone: "wink", accent: "#f0abfc", image: "/emojis/tiktok/blink.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/blink" },
  { id: "disdain", name: "Disdain", code: "[disdain]", category: "Reaction", glyph: "😒", tone: "shade", accent: "#94a3b8", image: "/emojis/tiktok/disdain.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/disdain" },
  { id: "astonish", name: "Astonish", code: "[astonish]", category: "Surprise", glyph: "😮", tone: "open", accent: "#67e8f9", image: "/emojis/tiktok/astonish.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/astonish" },
  { id: "rage", name: "Rage", code: "[rage]", category: "Angry", glyph: "😠", tone: "burn", accent: "#ef4444", image: "/emojis/tiktok/rage.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/rage" },
  { id: "cool", name: "Cool", code: "[cool]", category: "Cool", glyph: "😎", tone: "clean", accent: "#22d3ee", image: "/emojis/tiktok/cool.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/cool" },
  { id: "excited", name: "Excited", code: "[excited]", category: "Happy", glyph: "🤩", tone: "spark", accent: "#f59e0b", image: "/emojis/tiktok/excited.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/excited" },
  { id: "proud", name: "Proud", code: "[proud]", category: "Expression", glyph: "😌", tone: "calm", accent: "#818cf8", image: "/emojis/tiktok/proud.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/proud" },
  { id: "smileface", name: "Smile Face", code: "[smileface]", category: "Happy", glyph: "🙂", tone: "watch", accent: "#c4b5fd", image: "/emojis/tiktok/smileface.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/smileface" },
  { id: "evil", name: "Evil", code: "[evil]", category: "Expression", glyph: "👿", tone: "fang", accent: "#a855f7", image: "/emojis/tiktok/evil.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/evil" },
  { id: "angel", name: "Angel", code: "[angel]", category: "Expression", glyph: "😇", tone: "halo", accent: "#7dd3fc", image: "/emojis/tiktok/angel.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/angel" },
  { id: "laugh", name: "Laugh", code: "[laugh]", category: "Happy", glyph: "😆", tone: "burst", accent: "#fbbf24", image: "/emojis/tiktok/laugh.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/laugh" },
  { id: "pride", name: "Pride", code: "[pride]", category: "Expression", glyph: "🌈", tone: "bold", accent: "#e879f9", image: "/emojis/tiktok/pride.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/pride" },
  { id: "nap", name: "Nap", code: "[nap]", category: "Expression", glyph: "😴", tone: "sleep", accent: "#93c5fd", image: "/emojis/tiktok/nap.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/nap" },
  { id: "loveface", name: "Love Face", code: "[loveface]", category: "Love", glyph: "😍", tone: "heart", accent: "#f43f5e", image: "/emojis/tiktok/loveface.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/loveface" },
  { id: "awkward", name: "Awkward", code: "[awkward]", category: "Reaction", glyph: "😬", tone: "cringe", accent: "#fda4af", image: "/emojis/tiktok/awkward.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/awkward" },
  { id: "shock", name: "Shock", code: "[shock]", category: "Surprise", glyph: "😲", tone: "zap", accent: "#14b8a6", image: "/emojis/tiktok/shock.png", sourceUrl: "https://www.hooked.so/tiktok-emojis/shock" },
];

const categorySeoCopy: Record<EmojiCategory, { meaning: string; usage: string[] }> = {
  Happy: {
    meaning: "It works best for upbeat comments, playful captions, creator wins, and fast positive reactions.",
    usage: [
      "Drop it after a funny reveal, a creator milestone, or a comment that needs a light reaction.",
      "Pair it with short captions where the emoji carries the mood instead of a long explanation.",
      "Use it in replies when plain text would feel too flat or formal.",
    ],
  },
  Angry: {
    meaning: "It is useful for frustration, hard-no reactions, mock outrage, and dramatic comment-section energy.",
    usage: [
      "Use it when a video sets up a clear conflict, mistake, boundary, or annoying twist.",
      "Keep the caption short so the shortcode lands as the main punch.",
      "Pair it with a calmer line when you want the reaction to feel playful rather than hostile.",
    ],
  },
  Sad: {
    meaning: "It fits tender, disappointed, emotional, or sympathy-driven reactions without needing a long caption.",
    usage: [
      "Use it under emotional edits, nostalgic posts, soft storytimes, or comments that need empathy.",
      "Pair it with a simple sentence when you want the mood to feel sincere.",
      "Add it to replies where a standard emoji feels too generic.",
    ],
  },
  Expression: {
    meaning: "It gives a specific facial reaction for awkward, shy, mischievous, proud, or hard-to-name moments.",
    usage: [
      "Use it when the caption needs a visible facial expression instead of another word.",
      "Pair it with POV captions, reaction edits, or comment replies that need timing.",
      "Keep it near the end of a sentence so the shortcode reads like the final beat.",
    ],
  },
  Surprise: {
    meaning: "It signals shock, reveal energy, unexpected turns, and high-volume reactions.",
    usage: [
      "Use it after reveals, plot twists, big numbers, edits, and comment-section surprises.",
      "Pair it with one clear phrase so the emoji does not fight with too much text.",
      "Use it in replies when a reaction needs to feel instant.",
    ],
  },
  Love: {
    meaning: "It fits affectionate, flirty, supportive, cute, and fan-style reactions.",
    usage: [
      "Use it for compliments, soft edits, creator appreciation, and warm replies.",
      "Pair it with names, nicknames, or short captions when the tone is supportive.",
      "Use it where a regular heart would work, but a TikTok shortcode feels more native.",
    ],
  },
  Cool: {
    meaning: "It carries confident, stylish, impressed, unbothered, or high-status reaction energy.",
    usage: [
      "Use it after a clean transition, strong opinion, flex, win, or polished edit.",
      "Pair it with short lines where confidence matters more than explanation.",
      "Use it in comments when you want the response to feel sharp and composed.",
    ],
  },
  Reaction: {
    meaning: "It is built for quick replies, meme comments, inside jokes, and compact reaction captions.",
    usage: [
      "Use it as a standalone response when text would over-explain the joke.",
      "Pair it with meme captions, reaction edits, and comments that need a fast visual cue.",
      "Use it near the end of a reply to make the tone easier to read.",
    ],
  },
};

export function getTikTokEmojiKeyword(item: TikTokEmoji) {
  return `${item.name} TikTok emoji`;
}

export function getTikTokEmojiSlug(item: TikTokEmoji) {
  const base = (item.id ?? item.name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${base}-tiktok-emoji`;
}

export function getTikTokEmojiPath(item: TikTokEmoji) {
  if (!item.id) {
    return null;
  }

  return `/${getTikTokEmojiSlug(item)}`;
}

export function getTikTokEmojiBySlug(slug: string) {
  return tiktokEmojis.find((item) => getTikTokEmojiSlug(item) === slug) ?? null;
}

export function getRelatedTikTokEmojis(item: TikTokEmoji, limit = 4) {
  const sameCategory = tiktokEmojis.filter((candidate) => candidate.code !== item.code && candidate.category === item.category);
  const fallback = tiktokEmojis.filter(
    (candidate) => candidate.code !== item.code && candidate.category !== item.category,
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}

export function getTikTokEmojiSeoContent(item: TikTokEmoji): TikTokEmojiSeoContent {
  const keyword = getTikTokEmojiKeyword(item);
  const categoryCopy = categorySeoCopy[item.category];
  const title = `${keyword} ${item.code} - Copy the TikTok Shortcode`;
  const description = `Copy the ${keyword} shortcode ${item.code}. Learn what this ${item.category.toLowerCase()} TikTok emoji means, when to use it, and related secret emoji codes.`;

  return {
    keyword,
    title,
    description,
    meaning: `The ${keyword} is the ${item.code} TikTok shortcode. It has a ${item.tone} tone and belongs to the ${item.category.toLowerCase()} reaction group. ${categoryCopy.meaning}`,
    usage: categoryCopy.usage,
    examples: [
      `That comment needed ${item.code}`,
      `POV: the mood changed in one second ${item.code}`,
      `Saving this reaction for later ${item.code}`,
    ],
  };
}

export type TikTokEmojiPack = {
  name: string;
  tone: string;
  codes: string[];
  accent: string;
};

export type TikTokEmojiRecipe = {
  id: string;
  name: string;
  leftCode: string;
  rightCode: string;
  useCase: string;
  caption: string;
  accent: string;
};

export type TikTokCreatorUseCase = {
  id: string;
  name: string;
  description: string;
  codes: string[];
  recipeIds: string[];
  captions: string[];
  accent: string;
};

export const allEmojiItems = tiktokEmojis;

export function toSeoSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/\[[^\]]+\]/g, (match) => match.slice(1, -1))
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getTikTokEmojiImageDownloadName(item: TikTokEmoji) {
  return `tiktok-${toSeoSlug(item.id ?? item.name)}-emoji.png`;
}

export function getTikTokRecipeDownloadName(recipe: TikTokEmojiRecipe) {
  return `tiktok-${toSeoSlug(recipe.name)}-${toSeoSlug(recipe.leftCode)}-${toSeoSlug(recipe.rightCode)}-emoji-mix.png`;
}

export const emojiRecipes: TikTokEmojiRecipe[] = [
  {
    id: "surprise-joy",
    name: "Surprise Joy",
    leftCode: "[happy]",
    rightCode: "[shock]",
    useCase: "Use it for reveals, comment-section surprises, unboxing moments, and edits that flip from calm to loud.",
    caption: "I was not ready for this [happy] [shock]",
    accent: "#ffb000",
  },
  {
    id: "soft-crush",
    name: "Soft Crush",
    leftCode: "[cute]",
    rightCode: "[lovely]",
    useCase: "Use it for affectionate replies, creator appreciation, soft edits, and cute fan comments.",
    caption: "This is actually too cute [cute] [lovely]",
    accent: "#ff5f9e",
  },
  {
    id: "drama-reveal",
    name: "Drama Reveal",
    leftCode: "[scream]",
    rightCode: "[speechless]",
    useCase: "Use it when a storytime, duet, or reaction video lands on a dramatic twist.",
    caption: "The last part changed everything [scream] [speechless]",
    accent: "#64b5f6",
  },
  {
    id: "quiet-roast",
    name: "Quiet Roast",
    leftCode: "[disdain]",
    rightCode: "[facewithrollingeyes]",
    useCase: "Use it for subtle shade, dry comments, reply chains, and low-key callouts.",
    caption: "That answer said everything [disdain] [facewithrollingeyes]",
    accent: "#94a3b8",
  },
  {
    id: "tiny-panic",
    name: "Tiny Panic",
    leftCode: "[wronged]",
    rightCode: "[stun]",
    useCase: "Use it for nervous reactions, awkward reveals, soft chaos, and small mistakes that feel huge.",
    caption: "Me trying to act normal [wronged] [stun]",
    accent: "#8fb9ff",
  },
  {
    id: "villain-laugh",
    name: "Villain Laugh",
    leftCode: "[wicked]",
    rightCode: "[evil]",
    useCase: "Use it for playful chaos, prank reveals, villain edits, and comments with mischief.",
    caption: "This plan was a little too good [wicked] [evil]",
    accent: "#a855f7",
  },
  {
    id: "food-crave",
    name: "Food Crave",
    leftCode: "[yummy]",
    rightCode: "[drool]",
    useCase: "Use it for food reviews, craving edits, taste tests, and snack recommendations.",
    caption: "I need this immediately [yummy] [drool]",
    accent: "#68d391",
  },
  {
    id: "creator-win",
    name: "Creator Win",
    leftCode: "[proud]",
    rightCode: "[excited]",
    useCase: "Use it for milestones, glow-up edits, before-and-after posts, and polished transitions.",
    caption: "This deserved the full reaction [proud] [excited]",
    accent: "#f59e0b",
  },
  {
    id: "comment-fight",
    name: "Comment Fight",
    leftCode: "[angry]",
    rightCode: "[shout]",
    useCase: "Use it for hot takes, heated replies, boundary-setting captions, and mock outrage.",
    caption: "The comments are not surviving this [angry] [shout]",
    accent: "#ef4444",
  },
  {
    id: "late-night-scroll",
    name: "Late Night Scroll",
    leftCode: "[nap]",
    rightCode: "[thinking]",
    useCase: "Use it for tired scrolling, late-night thoughts, quiet replies, and low-energy captions.",
    caption: "Why am I still watching this [nap] [thinking]",
    accent: "#93c5fd",
  },
  {
    id: "meme-reply",
    name: "Meme Reply",
    leftCode: "[funnyface]",
    rightCode: "[laughwithtears]",
    useCase: "Use it for joke replies, meme edits, stitched reactions, and comments that need instant timing.",
    caption: "This got worse in the best way [funnyface] [laughwithtears]",
    accent: "#ff6bcb",
  },
  {
    id: "main-character",
    name: "Main Character",
    leftCode: "[cool]",
    rightCode: "[pride]",
    useCase: "Use it for confident transitions, outfit edits, clean wins, and stylish creator moments.",
    caption: "Main character energy only [cool] [pride]",
    accent: "#22d3ee",
  },
];

export const creatorUseCases: TikTokCreatorUseCase[] = [
  {
    id: "comments",
    name: "Comments",
    description: "Fast reply sets for creator comments, inside jokes, and short reactions that need a TikTok-native tone.",
    codes: ["[shock]", "[speechless]", "[laughwithtears]", "[disdain]", "[wronged]", "[happy]"],
    recipeIds: ["surprise-joy", "quiet-roast", "meme-reply"],
    captions: [
      "I opened the comments and immediately understood [shock]",
      "This reply did not need to go that hard [speechless]",
    ],
    accent: "#14b8a6",
  },
  {
    id: "captions",
    name: "Captions",
    description: "Caption-ready codes for short posts, POV setups, and creator updates where the emoji carries the mood.",
    codes: ["[happy]", "[cute]", "[proud]", "[thinking]", "[wow]", "[smileface]"],
    recipeIds: ["creator-win", "soft-crush", "late-night-scroll"],
    captions: [
      "POV: the mood changed in one second [wow]",
      "Saving this reaction for later [proud]",
    ],
    accent: "#ffb000",
  },
  {
    id: "live-chat",
    name: "Live Chat",
    description: "High-signal reactions for live streams where viewers need fast, readable, repeatable shortcode bursts.",
    codes: ["[shout]", "[wow]", "[happy]", "[slap]", "[scream]", "[cool]"],
    recipeIds: ["surprise-joy", "comment-fight", "creator-win"],
    captions: [
      "Chat saw it first [wow] [shout]",
      "That moment needed a replay [scream]",
    ],
    accent: "#fb923c",
  },
  {
    id: "meme-edits",
    name: "Meme Edits",
    description: "Comedic reactions for stitched clips, abrupt cuts, ironic edits, and captions that land on timing.",
    codes: ["[funnyface]", "[laughwithtears]", "[slap]", "[hehe]", "[speechless]", "[shock]"],
    recipeIds: ["meme-reply", "quiet-roast", "villain-laugh"],
    captions: [
      "The timing is the whole joke [laughwithtears]",
      "This edit knew exactly what it was doing [hehe]",
    ],
    accent: "#ff6bcb",
  },
  {
    id: "reaction-videos",
    name: "Reaction Videos",
    description: "Stronger visual cues for reveals, duets, stitches, and emotional turns in reaction content.",
    codes: ["[scream]", "[shock]", "[astonish]", "[surprised]", "[stun]", "[speechless]"],
    recipeIds: ["drama-reveal", "tiny-panic", "surprise-joy"],
    captions: [
      "Pause because what just happened [astonish]",
      "The reveal got me twice [shock] [scream]",
    ],
    accent: "#64b5f6",
  },
  {
    id: "storytime",
    name: "Storytime",
    description: "Narrative beats for setup, tension, twist, awkward silence, and final reaction in short story posts.",
    codes: ["[thinking]", "[awkward]", "[speechless]", "[cry]", "[wow]", "[proud]"],
    recipeIds: ["drama-reveal", "late-night-scroll", "tiny-panic"],
    captions: [
      "I should have known where this was going [thinking]",
      "The ending made the whole story worth it [wow]",
    ],
    accent: "#818cf8",
  },
];

export const quickPacks: TikTokEmojiPack[] = [
  {
    name: "Hype Burst",
    tone: "high energy",
    codes: ["[happy]", "[excited]", "[joyful]", "[wow]", "[cool]", "[laugh]"],
    accent: "#ffb000",
  },
  {
    name: "Big Laugh",
    tone: "comment lol",
    codes: ["[laughwithtears]", "[funnyface]", "[hehe]", "[laugh]", "[slap]", "[joyful]"],
    accent: "#38bdf8",
  },
  {
    name: "Soft Crush",
    tone: "warm reply",
    codes: ["[smile]", "[lovely]", "[cute]", "[wronged]", "[flushed]", "[blink]"],
    accent: "#ff5f9e",
  },
  {
    name: "Drama Drop",
    tone: "instant reaction",
    codes: ["[scream]", "[shock]", "[stun]", "[surprised]", "[speechless]", "[wow]"],
    accent: "#64b5f6",
  },
  {
    name: "Side Eye",
    tone: "dry reaction",
    codes: ["[disdain]", "[facewithrollingeyes]", "[speechless]", "[awkward]", "[thinking]", "[complacent]"],
    accent: "#94a3b8",
  },
  {
    name: "Chaos Set",
    tone: "messy fun",
    codes: ["[wicked]", "[evil]", "[shout]", "[rage]", "[scream]", "[slap]"],
    accent: "#c084fc",
  },
  {
    name: "Rage Room",
    tone: "heated",
    codes: ["[angry]", "[rage]", "[sulk]", "[shout]", "[wicked]", "[disdain]"],
    accent: "#ff4d4d",
  },
  {
    name: "Sad Edit",
    tone: "emotional",
    codes: ["[cry]", "[weep]", "[tears]", "[wronged]", "[speechless]", "[nap]"],
    accent: "#4aa8ff",
  },
  {
    name: "Cute Reply",
    tone: "sweet",
    codes: ["[cute]", "[flushed]", "[wronged]", "[smile]", "[lovely]", "[loveface]"],
    accent: "#fb7185",
  },
  {
    name: "Shock Loop",
    tone: "jaw drop",
    codes: ["[astonish]", "[surprised]", "[shock]", "[scream]", "[stun]", "[wow]"],
    accent: "#67e8f9",
  },
  {
    name: "Cool Flex",
    tone: "confident",
    codes: ["[cool]", "[complacent]", "[proud]", "[pride]", "[smileface]", "[hehe]"],
    accent: "#22d3ee",
  },
  {
    name: "Food Mood",
    tone: "craving",
    codes: ["[yummy]", "[drool]", "[greedy]", "[happy]", "[joyful]", "[lovely]"],
    accent: "#68d391",
  },
  {
    name: "Villain Mode",
    tone: "playful evil",
    codes: ["[evil]", "[wicked]", "[hehe]", "[complacent]", "[shout]", "[rage]"],
    accent: "#a855f7",
  },
  {
    name: "Sleepy Scroll",
    tone: "low battery",
    codes: ["[nap]", "[speechless]", "[thinking]", "[awkward]", "[cry]", "[smileface]"],
    accent: "#93c5fd",
  },
  {
    name: "Proud Moment",
    tone: "creator win",
    codes: ["[proud]", "[pride]", "[cool]", "[excited]", "[happy]", "[angel]"],
    accent: "#818cf8",
  },
  {
    name: "Awkward Silence",
    tone: "caught off guard",
    codes: ["[awkward]", "[embarrassed]", "[flushed]", "[wronged]", "[speechless]", "[blink]"],
    accent: "#fda4af",
  },
  {
    name: "Flirt Set",
    tone: "flirty",
    codes: ["[blink]", "[lovely]", "[loveface]", "[drool]", "[cute]", "[flushed]"],
    accent: "#ff4fa3",
  },
  {
    name: "Comment Starter",
    tone: "open loop",
    codes: ["[thinking]", "[wow]", "[surprised]", "[smile]", "[hehe]", "[shock]"],
    accent: "#facc15",
  },
  {
    name: "Story Beat",
    tone: "caption rhythm",
    codes: ["[smile]", "[surprised]", "[scream]", "[speechless]", "[laughwithtears]", "[proud]"],
    accent: "#06c6bf",
  },
  {
    name: "Live Chat",
    tone: "fast stream",
    codes: ["[shout]", "[happy]", "[wow]", "[slap]", "[laugh]", "[cool]"],
    accent: "#fb923c",
  },
  {
    name: "Creator Win",
    tone: "done well",
    codes: ["[excited]", "[proud]", "[joyful]", "[cool]", "[angel]", "[loveface]"],
    accent: "#f59e0b",
  },
  {
    name: "Plot Twist",
    tone: "surprise turn",
    codes: ["[thinking]", "[astonish]", "[shock]", "[scream]", "[speechless]", "[evil]"],
    accent: "#14b8a6",
  },
  {
    name: "Low Energy",
    tone: "quiet mood",
    codes: ["[nap]", "[weep]", "[tears]", "[speechless]", "[wronged]", "[smileface]"],
    accent: "#60a5fa",
  },
  {
    name: "Reply Wall",
    tone: "full set",
    codes: ["[smile]", "[happy]", "[cry]", "[angry]", "[wow]", "[loveface]"],
    accent: "#ff2d6b",
  },
  {
    name: "Fan Comment",
    tone: "supportive",
    codes: ["[loveface]", "[cute]", "[happy]", "[proud]", "[excited]", "[angel]"],
    accent: "#f43f5e",
  },
  {
    name: "Caught Blushing",
    tone: "shy",
    codes: ["[embarrassed]", "[flushed]", "[wronged]", "[blink]", "[lovely]", "[smile]"],
    accent: "#ff7ab6",
  },
  {
    name: "No Words",
    tone: "speechless",
    codes: ["[speechless]", "[stun]", "[shock]", "[thinking]", "[awkward]", "[disdain]"],
    accent: "#2dd4bf",
  },
  {
    name: "Hard Launch",
    tone: "announcement",
    codes: ["[excited]", "[proud]", "[joyful]", "[wow]", "[cool]", "[loveface]"],
    accent: "#f59e0b",
  },
  {
    name: "Comment Fight",
    tone: "argument",
    codes: ["[angry]", "[shout]", "[rage]", "[sulk]", "[facewithrollingeyes]", "[speechless]"],
    accent: "#ef4444",
  },
  {
    name: "Main Character",
    tone: "spotlight",
    codes: ["[pride]", "[cool]", "[complacent]", "[proud]", "[smileface]", "[loveface]"],
    accent: "#e879f9",
  },
  {
    name: "Tiny Panic",
    tone: "nervous",
    codes: ["[surprised]", "[stun]", "[awkward]", "[embarrassed]", "[wronged]", "[cry]"],
    accent: "#5ce1e6",
  },
  {
    name: "Unbothered",
    tone: "calm flex",
    codes: ["[cool]", "[complacent]", "[disdain]", "[facewithrollingeyes]", "[proud]", "[hehe]"],
    accent: "#22d3ee",
  },
  {
    name: "Cute Meltdown",
    tone: "too cute",
    codes: ["[cute]", "[wronged]", "[cry]", "[tears]", "[lovely]", "[flushed]"],
    accent: "#fb7185",
  },
  {
    name: "Villain Laugh",
    tone: "mischief",
    codes: ["[wicked]", "[evil]", "[hehe]", "[funnyface]", "[complacent]", "[rage]"],
    accent: "#c084fc",
  },
  {
    name: "Food Review",
    tone: "taste test",
    codes: ["[yummy]", "[drool]", "[greedy]", "[wow]", "[happy]", "[shock]"],
    accent: "#f6d365",
  },
  {
    name: "Glow Up",
    tone: "before after",
    codes: ["[astonish]", "[wow]", "[excited]", "[cool]", "[proud]", "[loveface]"],
    accent: "#67e8f9",
  },
  {
    name: "Soft Apology",
    tone: "sorry",
    codes: ["[wronged]", "[tears]", "[cry]", "[awkward]", "[smile]", "[angel]"],
    accent: "#8fb9ff",
  },
  {
    name: "Comment Bait",
    tone: "ask back",
    codes: ["[thinking]", "[surprised]", "[wow]", "[hehe]", "[shout]", "[blink]"],
    accent: "#facc15",
  },
  {
    name: "Viral Reveal",
    tone: "big reveal",
    codes: ["[shock]", "[scream]", "[astonish]", "[surprised]", "[stun]", "[wow]"],
    accent: "#14b8a6",
  },
  {
    name: "Quiet Roast",
    tone: "subtle shade",
    codes: ["[disdain]", "[facewithrollingeyes]", "[speechless]", "[complacent]", "[awkward]", "[thinking]"],
    accent: "#94a3b8",
  },
  {
    name: "Sleepy Reply",
    tone: "late night",
    codes: ["[nap]", "[smileface]", "[speechless]", "[weep]", "[thinking]", "[tears]"],
    accent: "#93c5fd",
  },
  {
    name: "Sweet Support",
    tone: "kind",
    codes: ["[smile]", "[happy]", "[lovely]", "[angel]", "[cute]", "[proud]"],
    accent: "#ff8fab",
  },
  {
    name: "Edit Reaction",
    tone: "transition",
    codes: ["[wow]", "[shock]", "[cool]", "[excited]", "[laughwithtears]", "[pride]"],
    accent: "#06c6bf",
  },
  {
    name: "Wrong Turn",
    tone: "oops",
    codes: ["[awkward]", "[embarrassed]", "[speechless]", "[sulk]", "[cry]", "[thinking]"],
    accent: "#fda4af",
  },
  {
    name: "Soft Fan",
    tone: "admiring",
    codes: ["[loveface]", "[drool]", "[lovely]", "[cute]", "[flushed]", "[blink]"],
    accent: "#ff4fa3",
  },
  {
    name: "Big Mad",
    tone: "outrage",
    codes: ["[rage]", "[angry]", "[shout]", "[sulk]", "[evil]", "[wicked]"],
    accent: "#dc2626",
  },
  {
    name: "Plot Confused",
    tone: "what happened",
    codes: ["[thinking]", "[speechless]", "[stun]", "[astonish]", "[awkward]", "[wow]"],
    accent: "#a3e635",
  },
  {
    name: "Meme Reply",
    tone: "joke beat",
    codes: ["[funnyface]", "[laughwithtears]", "[slap]", "[hehe]", "[speechless]", "[shock]"],
    accent: "#ff6bcb",
  },
  {
    name: "Angel Act",
    tone: "innocent",
    codes: ["[angel]", "[smile]", "[blink]", "[hehe]", "[wronged]", "[cute]"],
    accent: "#7dd3fc",
  },
  {
    name: "Creator Crush",
    tone: "fan love",
    codes: ["[lovely]", "[loveface]", "[drool]", "[cute]", "[happy]", "[proud]"],
    accent: "#fb7185",
  },
  {
    name: "Comment Storm",
    tone: "fast replies",
    codes: ["[shout]", "[wow]", "[happy]", "[laugh]", "[shock]", "[scream]"],
    accent: "#fb923c",
  },
  {
    name: "Tiny Win",
    tone: "small victory",
    codes: ["[proud]", "[happy]", "[smileface]", "[joyful]", "[cool]", "[angel]"],
    accent: "#818cf8",
  },
  {
    name: "Tension Cut",
    tone: "awkward funny",
    codes: ["[awkward]", "[funnyface]", "[speechless]", "[hehe]", "[slap]", "[blink]"],
    accent: "#f0abfc",
  },
  {
    name: "Final Boss",
    tone: "dramatic",
    codes: ["[evil]", "[rage]", "[wicked]", "[scream]", "[shock]", "[cool]"],
    accent: "#a855f7",
  },
];
