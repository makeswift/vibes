import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --blog-post-card-focus: hsl(var(--primary));
 *   --blog-post-card-primary-text: hsl(var(--foreground));
 *   --blog-post-card-secondary-text: hsl(var(--contrast-400));
 *   --blog-post-card-tertiary-text: hsl(var(--foreground)/15%);
 *   --blog-post-card-image-background: hsl(var(--contrast-100));
 *   --blog-post-card-font-family: var(--font-family-body);
 *   --blog-post-card-summary-text: hsl(var(--contrast-400));
 *   --blog-post-card-author-date-text: hsl(var(--foreground));
 * }
 * ```
 */
export function BlogPostCard({
  blogPost,
  className,
}: {
  blogPost: {
    author?: string | null;
    summary: string;
    date: string;
    thumbnail?: {
      src: string;
      alt: string;
    } | null;
    href: string;
    title: string;
  };
  className?: string;
}) {
  const { author, summary, date, href, thumbnail, title } = blogPost;

  return (
    <Link
      className={clsx(
        'group max-w-full rounded-b-lg rounded-t-2xl font-[family-name:var(--blog-post-card-font-family,var(--font-family-body))] text-[var(--blog-post-card-primary-text,hsl(var(--foreground)))] @container focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blog-post-card-focus,hsl(var(--primary)))] focus-visible:ring-offset-4',
        className,
      )}
      href={href}
    >
      <article>
        <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--blog-post-card-image-background,hsl(var(--contrast-100)))]">
          {thumbnail != null ? (
            <Image
              alt={thumbnail.alt}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              fill
              sizes="(min-width: 80rem) 25vw, (min-width: 56rem) 33vw, (min-width: 28rem) 50vw, 100vw"
              src={thumbnail.src}
            />
          ) : (
            <div className="p-4 text-5xl font-bold leading-none tracking-tighter text-[var(--blog-post-card-tertiary-text,hsl(var(--foreground)/15%))]">
              {title}
            </div>
          )}
        </div>
        <h5 className="text-lg font-medium leading-snug">{title}</h5>
        <p className="mb-3 mt-1.5 line-clamp-3 text-sm font-normal text-[var(--blog-post-card-secondary-text,hsl(var(--contrast-400)))]">
          {summary}
        </p>
        <div className="text-sm">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {author != null && (
            <>
              <span className="after:mx-2 after:content-['•']" />
              <span>{author}</span>
            </>
          )}
        </div>
      </article>
    </Link>
  );
}

export function BlogPostCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={clsx('flex max-w-md animate-pulse flex-col gap-2 rounded-xl', className)}>
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-contrast-100" />

      {/* Title */}
      <div className="h-4 w-24 rounded-lg bg-contrast-100" />

      {/* Content */}
      <div className="h-3 w-full rounded-lg bg-contrast-100" />
      <div className="h-3 w-full rounded-lg bg-contrast-100" />
      <div className="h-3 w-1/2 rounded-lg bg-contrast-100" />

      <div className="flex flex-wrap items-center">
        {/* Date */}
        <div className="h-4 w-16 rounded-lg bg-contrast-100" />
        <span className="after:mx-2 after:text-contrast-100 after:content-['•']" />
        {/* Author */}
        <div className="h-4 w-20 rounded-lg bg-contrast-100" />
      </div>
    </div>
  );
}
