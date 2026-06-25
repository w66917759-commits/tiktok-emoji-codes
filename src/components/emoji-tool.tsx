"use client";

import { ChevronRight, Copy, Download, RotateCcw, Search, Shuffle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type CSSProperties } from "react";
import { CopyableCode } from "@/components/copyable-code";
import { getArticlePath, longTailArticles } from "@/lib/articles";
import { getLegalPagePath, legalPages } from "@/lib/legal-pages";
import {
  allEmojiItems,
  creatorUseCases,
  emojiRecipes,
  getTikTokEmojiImageDownloadName,
  getTikTokEmojiKeyword,
  getTikTokEmojiPath,
  getTikTokRecipeDownloadName,
  quickPacks,
  tiktokEmojis,
  type EmojiCategory,
  type TikTokEmoji,
  type TikTokEmojiRecipe,
} from "@/lib/tiktok-emojis";

type CategoryFilter = "All" | EmojiCategory;

const categoryFilters: CategoryFilter[] = [
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

const spotlightCodes = ["[happy]", "[shock]", "[loveface]", "[cool]", "[scream]", "[wicked]"];

const stickerRotations = ["-5deg", "4deg", "-3deg", "5deg", "-4deg", "3deg"];

const marqueeCodes = tiktokEmojis
  .map((item) => item.code)
  .filter((code) => code.startsWith("["));

const emojiByCode = new Map(tiktokEmojis.map((item) => [item.code, item]));
const recipeById = new Map(emojiRecipes.map((recipe) => [recipe.id, recipe]));
const starterMixCodes: [string, string] = ["[happy]", "[shock]"];
const shortcodePattern = /\[[a-z0-9]+\]/gi;

function getSearchText(item: TikTokEmoji) {
  return `${item.id ?? ""} ${item.code} ${item.name} ${item.category} ${item.tone}`.toLowerCase();
}

function getCategoryCount(category: CategoryFilter) {
  if (category === "All") {
    return allEmojiItems.length;
  }

  return allEmojiItems.filter((item) => item.category === category).length;
}

function getPackItems(codes: string[]) {
  return codes
    .map((code) => emojiByCode.get(code))
    .filter((item): item is TikTokEmoji => Boolean(item));
}

function getRecipeItems(recipe: TikTokEmojiRecipe) {
  return getPackItems([recipe.leftCode, recipe.rightCode]);
}

function getSupportedCodesFromText(value: string) {
  return Array.from(value.matchAll(shortcodePattern), (match) => match[0].toLowerCase()).filter((code) =>
    emojiByCode.has(code),
  );
}

function getRandomEmojiCode(exceptCode?: string) {
  const choices = exceptCode ? tiktokEmojis.filter((item) => item.code !== exceptCode) : tiktokEmojis;
  const index = Math.floor(Math.random() * choices.length);

  return choices[index]?.code ?? starterMixCodes[0];
}

function EmojiVisual({
  item,
  className,
  imageClassName,
  imageSize,
  style,
}: {
  item: TikTokEmoji;
  className: string;
  imageClassName: string;
  imageSize: number;
  style?: CSSProperties;
}) {
  return (
    <span className={className} style={style}>
      {item.image ? (
        <Image
          src={item.image}
          alt={`${item.name} TikTok emoji`}
          width={imageSize}
          height={imageSize}
          className={imageClassName}
        />
      ) : (
        item.glyph
      )}
    </span>
  );
}

async function downloadMixedEmojiPng(left: TikTokEmoji, right: TikTokEmoji, fileName: string) {
  if (!left.image || !right.image) {
    return;
  }

  const canvas = document.createElement("canvas");
  const size = 1024;
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  const loadImage = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new window.Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });

  const drawRoundedRect = (x: number, y: number, width: number, height: number, radius: number) => {
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
  };

  const drawRotatedImage = (
    image: HTMLImageElement,
    x: number,
    y: number,
    width: number,
    height: number,
    rotation: number,
  ) => {
    context.save();
    context.translate(x + width / 2, y + height / 2);
    context.rotate(rotation);
    context.drawImage(image, -width / 2, -height / 2, width, height);
    context.restore();
  };

  const [leftImage, rightImage] = await Promise.all([loadImage(left.image), loadImage(right.image)]);
  const background = context.createLinearGradient(0, 0, size, size);
  background.addColorStop(0, "#ffffff");
  background.addColorStop(0.42, left.accent);
  background.addColorStop(1, right.accent);

  context.fillStyle = "#f3f2ec";
  context.fillRect(0, 0, size, size);
  context.globalAlpha = 0.28;
  context.fillStyle = background;
  context.fillRect(0, 0, size, size);
  context.globalAlpha = 1;

  drawRoundedRect(98, 98, 828, 828, 116);
  context.fillStyle = "rgba(255,255,255,0.78)";
  context.fill();
  context.lineWidth = 18;
  context.strokeStyle = "#0d1017";
  context.stroke();

  context.shadowColor = "rgba(13,16,23,0.24)";
  context.shadowBlur = 30;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 28;
  drawRotatedImage(leftImage, 120, 235, 500, 500, -0.18);
  drawRotatedImage(rightImage, 395, 290, 500, 500, 0.2);
  context.shadowColor = "transparent";

  canvas.toBlob((blob) => {
    if (!blob) {
      return;
    }

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);
  }, "image/png");
}

export function EmojiTool() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const [mixCodes, setMixCodes] = useState<[string, string]>(starterMixCodes);
  const [mixInput, setMixInput] = useState(starterMixCodes.join(" "));
  const [activeMixSlot, setActiveMixSlot] = useState<0 | 1>(0);
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return allEmojiItems.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery = !normalizedQuery || getSearchText(item).includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const activeItem = useMemo(
    () => allEmojiItems.find((item) => item.code === activeCode) ?? null,
    [activeCode],
  );
  const activePath = activeItem ? getTikTokEmojiPath(activeItem) : null;
  const mixItems = useMemo(
    () =>
      mixCodes
        .map((code) => emojiByCode.get(code))
        .filter((item): item is TikTokEmoji => Boolean(item)),
    [mixCodes],
  );
  const mixText = mixCodes.join(" ");
  const mixInputCodes = useMemo(() => getSupportedCodesFromText(mixInput), [mixInput]);
  const mixInputMessage =
    mixInputCodes.length >= 2
      ? "PNG preview only. TikTok renders the source pair as separate emojis."
      : "Enter two supported shortcodes to update the PNG preview.";
  const recipeItems = useMemo(
    () =>
      emojiRecipes
        .map((recipe) => ({
          ...recipe,
          items: getRecipeItems(recipe),
          codeText: `${recipe.leftCode} ${recipe.rightCode}`,
        }))
        .filter((recipe) => recipe.items.length === 2),
    [],
  );
  const creatorUseCaseItems = useMemo(
    () =>
      creatorUseCases.map((useCase) => ({
        ...useCase,
        items: getPackItems(useCase.codes),
        recipes: useCase.recipeIds
          .map((recipeId) => recipeById.get(recipeId))
          .filter((recipe): recipe is TikTokEmojiRecipe => Boolean(recipe)),
      })),
    [],
  );

  const packItems = useMemo(
    () =>
      quickPacks.map((pack) => ({
        ...pack,
        items: getPackItems(pack.codes),
        codeText: pack.codes.join(" "),
      })),
    [],
  );

  const spotlightItems = useMemo(
    () =>
      spotlightCodes
        .map((code) => allEmojiItems.find((item) => item.code === code))
        .filter((item): item is TikTokEmoji => Boolean(item)),
    [],
  );

  async function copyText(text: string, label: string) {
    if (!text) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(label);
    window.setTimeout(() => setCopied(null), 1800);
  }

  function setMixCode(slot: 0 | 1, code: string) {
    const next: [string, string] = [...mixCodes];
    next[slot] = code;

    setMixCodes(next);
    setMixInput(next.join(" "));
  }

  function updateMixFromInput(value: string) {
    setMixInput(value);

    const nextCodes = getSupportedCodesFromText(value);

    if (nextCodes.length >= 2) {
      setMixCodes([nextCodes[0], nextCodes[1]]);
    }
  }

  function randomizeMix() {
    const left = getRandomEmojiCode();
    const right = getRandomEmojiCode(left);

    setMixCodes([left, right]);
    setMixInput(`${left} ${right}`);
  }

  function resetMix() {
    setMixCodes(starterMixCodes);
    setMixInput(starterMixCodes.join(" "));
    setActiveMixSlot(0);
  }

  async function downloadMix() {
    const [left, right] = mixItems;

    if (!left || !right) {
      return;
    }

    await downloadMixedEmojiPng(left, right, `tiktok-${left.id}-${right.id}-emoji-mix.png`);
  }

  async function downloadRecipe(recipe: TikTokEmojiRecipe) {
    const [left, right] = getRecipeItems(recipe);

    if (!left || !right) {
      return;
    }

    await downloadMixedEmojiPng(left, right, getTikTokRecipeDownloadName(recipe));
  }

  return (
    <main suppressHydrationWarning className="lab-shell min-h-screen">
      <header className="lab-topbar">
        <div className="lab-wrap flex items-center justify-between gap-6 py-3.5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="lab-mark" aria-hidden="true">
              :)
            </span>
            <div className="min-w-0 leading-tight">
              <p className="lab-mono truncate text-[11px] font-bold tracking-[0.24em] text-[var(--ink)]">
                TIKTOK EMOJI LAB
              </p>
              <p className="lab-mono text-[10px] tracking-[0.3em] text-[var(--muted)]">REACTION INDEX</p>
            </div>
          </div>
          <nav className="hidden items-center gap-5 lg:flex">
            <a href="#library" className="lab-navlink">
              Library
            </a>
            <a href="#combiner" className="lab-navlink">
              Mixer
            </a>
            <a href="#recipes" className="lab-navlink">
              Recipes
            </a>
            <a href="#packs" className="lab-navlink">
              Packs
            </a>
            <a href="#use-cases" className="lab-navlink">
              Use cases
            </a>
            <a href="#downloads" className="lab-navlink">
              Downloads
            </a>
            <span className="lab-mono text-[11px] font-bold tracking-[0.2em] text-[var(--muted)]">
              {tiktokEmojis.length} CODES
            </span>
            <span className="lab-mono text-[11px] font-bold tracking-[0.2em] text-[var(--muted)]">
              {quickPacks.length} PACKS
            </span>
          </nav>
          <a href="#library" className="lab-cta">
            Browse
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="lab-wrap grid gap-12 pb-10 pt-12 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-end lg:pt-16">
        <div className="min-w-0">
          <p className="lab-eyebrow">
            <span className="lab-dot" aria-hidden="true" />
            Index 001 — {tiktokEmojis.length} TikTok codes + {quickPacks.length} packs
          </p>

          <h1 className="lab-display">
            <span className="lab-display-line">TikTok </span>
            <span className="lab-display-line lab-chroma">Emoji </span>
            <span className="lab-display-line lab-outline">Codes</span>
          </h1>

          <p className="lab-lede">
            Copy 46 hidden TikTok emoji shortcodes, compare meanings, and grab PNG references for comments,
            captions, and quick edits.
          </p>

          <div className="lab-search">
            <Search className="pointer-events-none h-5 w-5 shrink-0 text-[var(--muted)]" aria-hidden="true" />
            <label className="sr-only" htmlFor="emoji-search">
              Search TikTok emojis
            </label>
            <input suppressHydrationWarning
              id="emoji-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, mood, or shortcode"
              className="h-full w-full bg-transparent text-base font-semibold text-[var(--ink)] outline-none placeholder:text-[var(--muted)]"
            />
            <kbd className="lab-kbd">/</kbd>
          </div>

          <div className="lab-tabs" role="tablist" aria-label="Filter by category">
            {categoryFilters.map((item) => (
              <button suppressHydrationWarning
                type="button"
                key={item}
                role="tab"
                aria-selected={category === item}
                onClick={() => setCategory(item)}
                className={`lab-tab ${category === item ? "lab-tab-active" : ""}`}
                title={`${getCategoryCount(item)} items`}
              >
                {item}
              </button>
            ))}
          </div>

          <dl className="lab-stats">
            <div className="lab-stat">
              <dt className="lab-mono">Matches</dt>
              <dd>{filtered.length}</dd>
            </div>
            <div className="lab-stat">
              <dt className="lab-mono">Secret codes</dt>
              <dd>{tiktokEmojis.length}</dd>
            </div>
            <div className="lab-stat">
              <dt className="lab-mono">Packs</dt>
              <dd>{quickPacks.length}</dd>
            </div>
          </dl>
        </div>

        <aside className="hidden lg:block" aria-label="Featured TikTok emojis">
          <div className="lab-board">
            {spotlightItems.map((item, index) => (
              <article
                key={item.code}
                className="lab-sticker"
                style={
                  {
                    "--accent": item.accent,
                    "--rot": stickerRotations[index % stickerRotations.length],
                    "--delay": `${index * 0.5}s`,
                  } as CSSProperties
                }
              >
                <span className="lab-sticker-no lab-mono">{String(index + 1).padStart(2, "0")}</span>
                <button suppressHydrationWarning
                  type="button"
                  onClick={() => setActiveCode(item.code)}
                  className="lab-sticker-main"
                  aria-label={`Open ${item.name}`}
                >
                  <EmojiVisual
                    item={item}
                    className="lab-sticker-glyph"
                    imageClassName="h-12 w-12 object-contain drop-shadow-[0_12px_16px_rgba(13,16,23,0.22)]"
                    imageSize={88}
                  />
                  <span className="lab-sticker-name">{item.name}</span>
                </button>
                <CopyableCode
                  value={item.code}
                  label={`${item.name} shortcode`}
                  as="span"
                  className="lab-sticker-code-copy"
                  codeClassName="lab-sticker-code lab-mono"
                />
              </article>
            ))}
          </div>
        </aside>
      </section>

      <div className="lab-marquee" aria-hidden="true">
        <div className="lab-marquee-track">
          {[0, 1].map((pass) => (
            <span className="lab-marquee-group" key={pass}>
              {marqueeCodes.map((code) => (
                <span className="lab-marquee-item lab-mono" key={`${pass}-${code}`}>
                  {code}
                  <span className="lab-marquee-sep" aria-hidden="true">
                    ◆
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section id="library" className="lab-wrap pb-6 pt-14">
        <div className="lab-section-head">
          <span className="lab-section-no lab-mono">02</span>
          <div className="min-w-0">
            <h2 className="lab-section-title">Emoji library</h2>
            <p className="lab-section-sub lab-mono">
              {filtered.length} matches — {category}
            </p>
          </div>
          <span className="lab-section-rule" aria-hidden="true" />
        </div>

        {filtered.length ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {filtered.map((item, index) => {
              const isActive = activeCode === item.code;

              return (
                <article
                  key={item.code}
                  className={`lab-card group ${isActive ? "lab-card-active" : ""}`}
                  style={{ "--accent": item.accent } as CSSProperties}
                >
                  <button suppressHydrationWarning
                    type="button"
                    onClick={() => setActiveCode(item.code)}
                    className="lab-card-main"
                    aria-pressed={isActive}
                    aria-label={`Open ${item.name}`}
                  >
                    <div className="lab-card-top">
                      <span className="lab-card-no lab-mono">{String(index + 1).padStart(3, "0")}</span>
                      <span className="lab-card-dot" aria-hidden="true" />
                    </div>
                    <EmojiVisual
                      item={item}
                      className="lab-card-glyph"
                      imageClassName="h-12 w-12 object-contain drop-shadow-[0_10px_14px_rgba(13,16,23,0.2)] sm:h-14 sm:w-14"
                      imageSize={80}
                    />
                    <span className="lab-card-name">{item.name}</span>
                  </button>
                  <CopyableCode
                    value={item.code}
                    label={`${item.name} shortcode`}
                    as="span"
                    className="lab-card-code-copy"
                    codeClassName="lab-card-code lab-mono"
                  />
                </article>
              );
            })}
          </div>
        ) : (
          <div className="lab-empty">
            <p className="lab-mono text-xs tracking-[0.2em] text-[var(--muted)]">NO RESULTS</p>
            <p className="mt-2 text-lg font-black">Nothing matches “{query}”.</p>
          </div>
        )}
      </section>

      <section id="combiner" className="lab-wrap pb-6 pt-14">
        <div className="lab-section-head">
          <span className="lab-section-no lab-mono">03</span>
          <div className="min-w-0">
            <h2 className="lab-section-title">PNG sticker mixer</h2>
            <p className="lab-section-sub lab-mono">Source pair: {mixText}</p>
          </div>
          <span className="lab-section-rule" aria-hidden="true" />
        </div>

        <div className="lab-mix">
          <section className="lab-mix-stage" aria-label="TikTok emoji mix preview">
            <div className="lab-mix-preview" style={{ "--left": mixItems[0]?.accent, "--right": mixItems[1]?.accent } as CSSProperties}>
              {mixItems.map((item, index) => (
                <EmojiVisual
                  key={`${item.code}-${index}`}
                  item={item}
                  className={`lab-mix-preview-glyph lab-mix-preview-glyph-${index + 1}`}
                  imageClassName="h-32 w-32 object-contain drop-shadow-[0_18px_24px_rgba(13,16,23,0.22)] sm:h-40 sm:w-40"
                  imageSize={180}
                />
              ))}
            </div>

            <div className="lab-mix-slots">
              {mixItems.map((item, index) => (
                <article
                  key={`${item.code}-slot-${index}`}
                  className={`lab-mix-slot ${activeMixSlot === index ? "lab-mix-slot-active" : ""}`}
                  style={{ "--accent": item.accent } as CSSProperties}
                >
                  <button suppressHydrationWarning
                    type="button"
                    className="lab-mix-slot-main"
                    onClick={() => setActiveMixSlot(index as 0 | 1)}
                    aria-pressed={activeMixSlot === index}
                  >
                    <span className="lab-mix-slot-label lab-mono">{index === 0 ? "Left" : "Right"}</span>
                    <span className="lab-mix-slot-name">{item.name}</span>
                  </button>
                  <span className="lab-mix-slot-code lab-mono">{item.code}</span>
                </article>
              ))}
            </div>

            <div className="lab-mix-source">
              <div className="lab-mix-source-head">
                <label className="lab-mix-source-label lab-mono" htmlFor="mix-source">
                  Source codes
                </label>
                <span className="lab-mix-source-badge lab-mono">PNG output</span>
              </div>
              <input suppressHydrationWarning
                id="mix-source"
                value={mixInput}
                onChange={(event) => updateMixFromInput(event.target.value)}
                placeholder="[happy] [shock]"
                className="lab-mix-code lab-mix-input lab-mono"
                spellCheck={false}
              />
              <p className="lab-mix-source-note">{mixInputMessage}</p>
            </div>

            <div className="lab-mix-actions">
              <button suppressHydrationWarning
                type="button"
                className="lab-mix-primary"
                onClick={downloadMix}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PNG
              </button>
              <button suppressHydrationWarning type="button" className="lab-mix-secondary" onClick={randomizeMix}>
                <Shuffle className="h-4 w-4" aria-hidden="true" />
                Random
              </button>
              <button suppressHydrationWarning type="button" className="lab-mix-secondary" onClick={resetMix}>
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Reset
              </button>
            </div>
          </section>

          <section className="lab-mix-picker" aria-label="TikTok emoji mixer picker">
            {tiktokEmojis.map((item) => (
              <article
                key={item.code}
                className={`lab-mix-pick ${mixCodes.includes(item.code) ? "lab-mix-pick-selected" : ""}`}
                style={{ "--accent": item.accent } as CSSProperties}
                title={item.code}
              >
                <button suppressHydrationWarning
                  type="button"
                  className="lab-mix-pick-main"
                  onClick={() => setMixCode(activeMixSlot, item.code)}
                  aria-label={`Use ${item.name}`}
                >
                  <EmojiVisual
                    item={item}
                    className="lab-mix-pick-glyph"
                    imageClassName="h-8 w-8 object-contain drop-shadow-[0_8px_10px_rgba(13,16,23,0.16)]"
                    imageSize={48}
                  />
                </button>
                <span className="lab-mix-pick-code lab-mono">{item.code}</span>
              </article>
            ))}
          </section>
        </div>
      </section>

      <section id="recipes" className="lab-wrap pb-6 pt-14">
        <div className="lab-section-head">
          <span className="lab-section-no lab-mono">04</span>
          <div className="min-w-0">
            <h2 className="lab-section-title">Emoji recipes</h2>
            <p className="lab-section-sub lab-mono">{recipeItems.length} downloadable mixes</p>
          </div>
          <span className="lab-section-rule" aria-hidden="true" />
        </div>

        <div className="lab-recipe-grid">
          {recipeItems.map((recipe, index) => (
            <article
              className="lab-recipe"
              key={recipe.id}
              style={{ "--accent": recipe.accent } as CSSProperties}
            >
              <div className="lab-recipe-head">
                <span className="lab-pack-no lab-mono">{String(index + 1).padStart(2, "0")}</span>
                <code className="lab-recipe-codes lab-mono">{recipe.codeText}</code>
              </div>

              <div className="lab-recipe-visual" aria-hidden="true">
                {recipe.items.map((item, itemIndex) => (
                  <EmojiVisual
                    key={`${recipe.id}-${item.code}`}
                    item={item}
                    className={`lab-recipe-glyph lab-recipe-glyph-${itemIndex + 1}`}
                    imageClassName="h-16 w-16 object-contain drop-shadow-[0_12px_16px_rgba(13,16,23,0.18)]"
                    imageSize={88}
                  />
                ))}
              </div>

              <h3 className="lab-recipe-title">{recipe.name}</h3>
              <p className="lab-recipe-use">{recipe.useCase}</p>
              <code className="lab-recipe-caption">{recipe.caption}</code>

              <div className="lab-recipe-actions">
                <button suppressHydrationWarning
                  type="button"
                  className="lab-recipe-primary"
                  onClick={() => downloadRecipe(recipe)}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download PNG
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="packs" className="lab-wrap pb-6 pt-14">
        <div className="lab-section-head">
          <span className="lab-section-no lab-mono">05</span>
          <div className="min-w-0">
            <h2 className="lab-section-title">TikTok packs</h2>
            <p className="lab-section-sub lab-mono">{quickPacks.length} shortcode sets</p>
          </div>
          <span className="lab-section-rule" aria-hidden="true" />
        </div>

        <div className="lab-pack-grid">
          {packItems.map((pack, index) => (
            <article
              className="lab-pack"
              key={pack.name}
              style={{ "--accent": pack.accent } as CSSProperties}
            >
              <div className="lab-pack-head">
                <span className="lab-pack-no lab-mono">{String(index + 1).padStart(2, "0")}</span>
                <span className="lab-pack-tone lab-mono">{pack.tone}</span>
              </div>
              <h3 className="lab-pack-title">{pack.name}</h3>
              <div className="lab-pack-strip">
                {pack.items.map((item) => (
                  <button suppressHydrationWarning
                    type="button"
                    key={`${pack.name}-${item.code}`}
                    className="lab-pack-chip"
                    onClick={() => setActiveCode(item.code)}
                    aria-label={`Open ${item.name}`}
                    title={item.code}
                  >
                    <EmojiVisual
                      item={item}
                      className="lab-pack-glyph"
                      imageClassName="h-8 w-8 object-contain drop-shadow-[0_8px_10px_rgba(13,16,23,0.18)]"
                      imageSize={48}
                    />
                  </button>
                ))}
              </div>
              <CopyableCode
                value={pack.codeText}
                label={`${pack.name} pack codes`}
                className="lab-pack-code-copy"
                codeClassName="lab-pack-code lab-mono"
              />
              <button suppressHydrationWarning
                type="button"
                className="lab-pack-copy"
                onClick={() => copyText(pack.codeText, `${pack.name} copied`)}
              >
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copy pack
              </button>
            </article>
          ))}
        </div>
      </section>
      <section id="use-cases" className="lab-wrap pb-6 pt-14">
        <div className="lab-section-head">
          <span className="lab-section-no lab-mono">06</span>
          <div className="min-w-0">
            <h2 className="lab-section-title">Creator use cases</h2>
            <p className="lab-section-sub lab-mono">{creatorUseCaseItems.length} TikTok workflows</p>
          </div>
          <span className="lab-section-rule" aria-hidden="true" />
        </div>

        <div className="lab-use-grid">
          {creatorUseCaseItems.map((useCase) => (
            <article className="lab-use-card" key={useCase.id} style={{ "--accent": useCase.accent } as CSSProperties}>
              <div className="lab-use-top">
                <h3>{useCase.name}</h3>
                <span className="lab-use-badge lab-mono">{useCase.items.length} codes</span>
              </div>
              <p>{useCase.description}</p>
              <div className="lab-use-strip" aria-label={`${useCase.name} TikTok emoji codes`}>
                {useCase.items.map((item) => (
                  <span className="lab-use-chip" key={`${useCase.id}-${item.code}`} title={item.code}>
                    <EmojiVisual
                      item={item}
                      className="lab-use-glyph"
                      imageClassName="h-7 w-7 object-contain"
                      imageSize={40}
                    />
                  </span>
                ))}
              </div>
              <div className="lab-use-caption-list">
                {useCase.captions.map((caption) => (
                  <button suppressHydrationWarning
                    type="button"
                    key={caption}
                    className="lab-use-caption"
                    onClick={() => copyText(caption, `${useCase.name} caption copied`)}
                  >
                    <span>{caption}</span>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  </button>
                ))}
              </div>
              <div className="lab-use-recipes">
                {useCase.recipes.map((recipe) => (
                  <button suppressHydrationWarning
                    type="button"
                    key={`${useCase.id}-${recipe.id}`}
                    className="lab-use-recipe"
                    onClick={() => downloadRecipe(recipe)}
                    title={getTikTokRecipeDownloadName(recipe)}
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {recipe.name}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="downloads" className="lab-wrap pb-6 pt-14">
        <div className="lab-section-head">
          <span className="lab-section-no lab-mono">07</span>
          <div className="min-w-0">
            <h2 className="lab-section-title">Download center</h2>
            <p className="lab-section-sub lab-mono">SEO-named PNG files</p>
          </div>
          <span className="lab-section-rule" aria-hidden="true" />
        </div>

        <div className="lab-download-layout">
          <article className="lab-download-panel">
            <div className="lab-download-head">
              <h3>All TikTok PNGs</h3>
              <span className="lab-mono">{tiktokEmojis.length} files</span>
            </div>
            <div className="lab-download-mini-grid">
              {tiktokEmojis.map((item) => (
                <div
                  key={item.code}
                  className="lab-download-mini"
                  style={{ "--accent": item.accent } as CSSProperties}
                >
                  <a
                    href={item.image}
                    download={getTikTokEmojiImageDownloadName(item)}
                    className="lab-download-mini-main"
                    title={getTikTokEmojiImageDownloadName(item)}
                  >
                    <EmojiVisual
                      item={item}
                      className="lab-download-mini-glyph"
                      imageClassName="h-10 w-10 object-contain"
                      imageSize={56}
                    />
                  </a>
                  <div className="lab-download-mini-meta">
                    <span className="lab-download-mini-name">{item.name}</span>
                    <CopyableCode
                      value={item.code}
                      label={`${item.name} shortcode`}
                      as="span"
                      className="lab-download-mini-code-copy"
                      codeClassName="lab-download-mini-code lab-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="lab-download-panel">
            <div className="lab-download-head">
              <h3>Popular Mix PNGs</h3>
              <span className="lab-mono">{recipeItems.slice(0, 8).length} files</span>
            </div>
            <div className="lab-download-list">
              {recipeItems.slice(0, 8).map((recipe) => (
                <button suppressHydrationWarning
                  type="button"
                  key={recipe.id}
                  className="lab-download-row"
                  style={{ "--accent": recipe.accent } as CSSProperties}
                  onClick={() => downloadRecipe(recipe)}
                  title={getTikTokRecipeDownloadName(recipe)}
                >
                  <span className="lab-download-row-name">{recipe.name}</span>
                  <span className="lab-download-row-file lab-mono">{getTikTokRecipeDownloadName(recipe)}</span>
                  <Download className="h-4 w-4" aria-hidden="true" />
                </button>
              ))}
            </div>
          </article>

          <article className="lab-download-panel">
            <div className="lab-download-head">
              <h3>Creator Pack PNGs</h3>
              <span className="lab-mono">{creatorUseCaseItems.length} starters</span>
            </div>
            <div className="lab-download-list">
              {creatorUseCaseItems.map((useCase) => {
                const recipe = useCase.recipes[0];

                if (!recipe) {
                  return null;
                }

                return (
                  <button suppressHydrationWarning
                    type="button"
                    key={useCase.id}
                    className="lab-download-row"
                    style={{ "--accent": useCase.accent } as CSSProperties}
                    onClick={() => downloadRecipe(recipe)}
                    title={getTikTokRecipeDownloadName(recipe)}
                  >
                    <span className="lab-download-row-name">{useCase.name}</span>
                    <span className="lab-download-row-file lab-mono">{getTikTokRecipeDownloadName(recipe)}</span>
                    <Download className="h-4 w-4" aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <section id="seo-guides" className="lab-wrap pb-8 pt-14" aria-labelledby="long-tail-guides-title">
        <div className="lab-section-head">
          <span className="lab-section-no lab-mono">08</span>
          <div className="min-w-0">
            <h2 id="long-tail-guides-title" className="lab-section-title">
              TikTok emoji guides
            </h2>
            <p className="lab-section-sub lab-mono">{longTailArticles.length} long-tail articles</p>
          </div>
          <span className="lab-section-rule" aria-hidden="true" />
        </div>

        <div className="lab-article-grid">
          {longTailArticles.map((article, index) => (
            <Link
              key={article.slug}
              href={getArticlePath(article)}
              className="lab-article-card"
              style={{ "--accent": article.accent } as CSSProperties}
            >
              <span className="lab-article-no lab-mono">{String(index + 1).padStart(2, "0")}</span>
              <span className="lab-article-keyword">{article.keyword}</span>
              <strong>{article.title}</strong>
              <span>{article.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="lab-wrap pb-20 pt-8" aria-labelledby="emoji-guides-title">
        <div className="lab-section-head">
          <span className="lab-section-no lab-mono">09</span>
          <div className="min-w-0">
            <h2 id="emoji-guides-title" className="lab-section-title">
              Emoji shortcode pages
            </h2>
            <p className="lab-section-sub lab-mono">{tiktokEmojis.length} SEO pages</p>
          </div>
          <span className="lab-section-rule" aria-hidden="true" />
        </div>

        <div className="lab-guide-grid">
          {tiktokEmojis.map((item) => {
            const path = getTikTokEmojiPath(item);

            if (!path) {
              return null;
            }

            return (
              <article
                key={item.code}
                className="lab-guide-item"
                style={{ "--accent": item.accent } as CSSProperties}
              >
                <Link href={path} className="lab-guide-link">
                  <span className="lab-guide-name">{getTikTokEmojiKeyword(item)}</span>
                </Link>
                <span className="lab-guide-code lab-mono">{item.code}</span>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="lab-footer">
        <div className="lab-wrap lab-footer-grid py-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="lab-mark" aria-hidden="true">
                :)
              </span>
              <p className="lab-mono text-[11px] font-bold tracking-[0.24em]">TIKTOK EMOJI LAB</p>
            </div>
            <p className="mt-4 text-sm font-medium text-[var(--muted)]">
              An open reference for TikTok shortcode emojis and TikTok-only reaction packs. Built for
              creators who copy fast.
            </p>
            <p className="mt-3 text-xs font-bold leading-5 text-[var(--muted)]">
              Independent reference. Not affiliated with TikTok or ByteDance.
            </p>
          </div>

          <nav className="lab-footer-nav" aria-label="Site information">
            <p className="lab-footer-heading lab-mono">Site</p>
            <div className="lab-footer-link-grid">
              {legalPages.map((page) => (
                <Link key={page.slug} href={getLegalPagePath(page)}>
                  {page.label}
                </Link>
              ))}
            </div>
          </nav>

          <dl className="lab-footer-stats">
            <div>
              <dt className="lab-mono text-[10px] tracking-[0.24em] text-[var(--muted)]">CODES</dt>
              <dd className="mt-1 text-2xl font-black">{tiktokEmojis.length}</dd>
            </div>
            <div>
              <dt className="lab-mono text-[10px] tracking-[0.24em] text-[var(--muted)]">PACKS</dt>
              <dd className="mt-1 text-2xl font-black">{quickPacks.length}</dd>
            </div>
            <div>
              <dt className="lab-mono text-[10px] tracking-[0.24em] text-[var(--muted)]">TOTAL</dt>
              <dd className="mt-1 text-2xl font-black">{allEmojiItems.length + quickPacks.length}</dd>
            </div>
          </dl>
        </div>
      </footer>

      {activeItem ? (
        <aside className="lab-panel">
          <div className="flex items-start gap-4">
            <EmojiVisual
              item={activeItem}
              className="lab-card-glyph !mt-0 shrink-0"
              imageClassName="h-12 w-12 object-contain drop-shadow-[0_12px_14px_rgba(13,16,23,0.2)]"
              imageSize={88}
              style={{ "--accent": activeItem.accent } as CSSProperties}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-lg font-black text-[var(--ink)]">{activeItem.name}</p>
                  <p className="lab-mono mt-1 text-[11px] tracking-[0.2em] text-[var(--muted)]">
                    {activeItem.category.toUpperCase()}
                  </p>
                </div>
                <button suppressHydrationWarning type="button" onClick={() => setActiveCode(null)} className="lab-icon-btn">
                  <X className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Close</span>
                </button>
              </div>

              <CopyableCode
                value={activeItem.code}
                label={`${activeItem.name} shortcode`}
                as="span"
                className="lab-panel-code-copy"
                codeClassName="lab-code-box lab-mono"
              />
              {activePath ? (
                <Link href={activePath} className="lab-panel-link">
                  Full guide
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </div>
        </aside>
      ) : null}

      <div aria-live="polite" className={`lab-toast ${copied ? "lab-toast-on" : ""}`}>
        {copied ?? "Copied"}
      </div>
    </main>
  );
}
