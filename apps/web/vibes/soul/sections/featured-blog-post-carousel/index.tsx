import Link from 'next/link';

import { Streamable } from '@/vibes/soul/lib/streamable';
import { AnimatedUnderline } from '@/vibes/soul/primitives/animated-underline';
import { type BlogPost } from '@/vibes/soul/primitives/blog-post-card';
import { BlogPostCarousel } from '@/vibes/soul/sections/blog-post-carousel';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

interface Link {
  label: string;
  href: string;
}

export interface FeaturedBlogPostCarouselProps {
  title: string;
  cta?: Link;
  blogPosts: Streamable<BlogPost[]>;
  scrollbarLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --featured-blog-post-carousel-font-family: var(--font-family-body);
 *   --featured-blog-post-carousel-text: hsl(var(--foreground));
 * }
 * ```
 */
export function FeaturedBlogPostCarousel({
  cta,
  title,
  blogPosts,
  scrollbarLabel,
  previousLabel,
  nextLabel,
}: FeaturedBlogPostCarouselProps) {
  return (
    <SectionLayout containerSize="2xl">
      <div className="mb-6 flex w-full flex-row flex-wrap justify-between gap-x-8 px-1.5 text-[var(--featured-blog-post-carousel-text,hsl(var(--foreground)))] @4xl:mb-8 @4xl:items-end">
        <div className="flex-1">
          <h2 className="font-[family-name:var(--featured-blog-post-carousel-font-family,var(--font-family-heading))] text-2xl font-medium leading-none @xl:text-3xl @4xl:text-4xl">
            {title}
          </h2>
        </div>
        {cta != null && cta.href !== '' && cta.label !== '' && (
          <Link className="group/underline focus:outline-none" href={cta.href}>
            <AnimatedUnderline className="mr-3">{cta.label}</AnimatedUnderline>
          </Link>
        )}
      </div>
      <div className="group/blog-post-carousel">
        <BlogPostCarousel
          blogPosts={blogPosts}
          nextLabel={nextLabel}
          previousLabel={previousLabel}
          scrollbarLabel={scrollbarLabel}
        />
      </div>
    </SectionLayout>
  );
}
