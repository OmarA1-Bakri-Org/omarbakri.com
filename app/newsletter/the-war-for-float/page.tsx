import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import NewsletterShell from "../newsletter-shell";
import { warForFloatBlocks, type ArticleBlock } from "../../data/war-for-float";
import { getRequiredPublication } from "../../data/publications";

const publication = getRequiredPublication("the-war-for-float");
const publicationDate = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${publication.publishedAt}T00:00:00Z`));

function inlineText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => part.startsWith("**") ? <strong key={index} className="text-primary">{part.slice(2, -2)}</strong> : part);
}

export const metadata: Metadata = {
  title: publication.title,
  description: publication.excerpt,
  alternates: { canonical: publication.href },
  openGraph: {
    title: publication.title,
    description: publication.excerpt,
    url: publication.href,
    type: "article",
    publishedTime: `${publication.publishedAt}T00:00:00.000Z`,
    authors: ["Omar Al-Bakri"],
  },
};

const Divider = () => <hr className="border-0 border-t border-edge my-12" />;

function ArticleBody() {
  const groups: ArticleBlock[][] = [];
  for (const block of warForFloatBlocks) {
    if (block.type === "divider" || !groups.length || groups[groups.length - 1][0].type === "divider") groups.push([block]);
    else groups[groups.length - 1].push(block);
  }
  function renderBlock(block: ArticleBlock, index: number) {
    if (block.type === "divider") return <Divider key={index} />;
    if (block.type === "heading") return <h2 key={index} className={block.className} style={{ fontSize: "var(--text-2xl)" }}>{inlineText(block.text!)}</h2>;
    if (block.type === "list") return <ul key={index} className={block.className}>{block.items!.map((item) => <li key={item}>{inlineText(item)}</li>)}</ul>;
    if (block.type === "quote") return <blockquote key={index} className={block.className} style={{ fontSize: "var(--text-xl)", lineHeight: "1.55" }}>{inlineText(block.text!)}</blockquote>;
    return <p key={index} className={block.className} style={block.className?.includes("font-display") ? { fontSize: "var(--text-xl)", lineHeight: "1.55" } : undefined}>{inlineText(block.text!)}</p>;
  }
  return groups.map((group, index) => group[0].type === "heading"
    ? <section key={index}>{group.map(renderBlock)}</section>
    : <Fragment key={index}>{group.map(renderBlock)}</Fragment>);
}

export default function WarForFloatPage() {
  return (
    <NewsletterShell>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-12">
        <Link href="/newsletter" className="text-accent hover:text-accent-hover transition-colors" style={{ fontSize: "var(--text-sm)" }}>
          ← Intelligent Rails
        </Link>

        <header className="pt-12 pb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted uppercase tracking-[0.05em] mb-6" style={{ fontSize: "var(--text-xs)" }}>
            <span>Intelligent Rails</span>
            <span aria-hidden="true">·</span>
            <time dateTime={publication.publishedAt}>{publicationDate}</time>
            <span aria-hidden="true">·</span>
            <span>Omar Al-Bakri</span>
          </div>
          <h1 className="font-display font-light tracking-[-0.025em] mb-8" style={{ fontSize: "var(--text-4xl)", lineHeight: "1.05" }}>
            {publication.title}
          </h1>
          <p className="font-display font-light text-secondary" style={{ fontSize: "var(--text-xl)", lineHeight: "1.55" }}>
            {publication.excerpt}
          </p>
        </header>

        <div className="space-y-7 text-secondary leading-[1.8]" style={{ fontSize: "var(--text-base)" }}>
          <ArticleBody />
        </div>

        <div className="mt-16 pt-8 border-t border-edge flex flex-wrap gap-2">
          {publication.topics.map((topic) => (
            <span key={topic} className="px-2.5 py-1 border border-edge text-muted" style={{ fontSize: "var(--text-xs)" }}>{topic}</span>
          ))}
        </div>
      </article>
    </NewsletterShell>
  );
}
