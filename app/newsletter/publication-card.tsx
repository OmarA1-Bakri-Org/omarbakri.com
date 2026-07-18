import Link from "next/link";
import type { Publication } from "@/app/data/publications";
import { formatPublicationDate } from "@/app/data/publications";

export default function PublicationCard({
  publication,
  featured = false,
}: {
  publication: Publication;
  featured?: boolean;
}) {
  const body = (
    <>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted uppercase tracking-[0.05em] mb-5" style={{ fontSize: "var(--text-xs)" }}>
        <span>{publication.source}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={publication.publishedAt}>{formatPublicationDate(publication.publishedAt)}</time>
      </div>
      <h2
        className="font-display font-light text-primary group-hover:text-accent transition-colors mb-4"
        style={{ fontSize: featured ? "var(--text-3xl)" : "var(--text-xl)", lineHeight: "1.2" }}
      >
        {publication.title}
      </h2>
      <p className="text-secondary leading-[1.7] mb-6" style={{ fontSize: "var(--text-base)" }}>
        {publication.excerpt}
      </p>
      <div className="flex flex-wrap gap-2 mb-7">
        {publication.topics.map((topic) => (
          <span key={topic} className="px-2.5 py-1 border border-edge text-muted" style={{ fontSize: "var(--text-xs)" }}>
            {topic}
          </span>
        ))}
      </div>
      <span className="text-accent" style={{ fontSize: "var(--text-sm)" }}>
        {publication.external ? "Read on LinkedIn" : "Read article"} <span aria-hidden="true">→</span>
      </span>
    </>
  );

  const className = `group block border border-edge bg-elevated hover:border-accent transition-colors ${
    featured ? "p-8 sm:p-10 lg:p-14" : "p-7 sm:p-8"
  }`;

  if (publication.external) {
    return (
      <a href={publication.href} target="_blank" rel="noopener noreferrer" className={className}>
        {body}
      </a>
    );
  }

  return (
    <Link href={publication.href} className={className}>
      {body}
    </Link>
  );
}
