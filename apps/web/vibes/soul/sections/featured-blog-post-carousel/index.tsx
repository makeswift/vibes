import { Streamable } from '@/vibes/soul/lib/streamable';
import { AnimatedLink } from '@/vibes/soul/primitives/animated-link';
import { BlogPostWithId } from '@/vibes/soul/primitives/blog-post-card';
import { BlogPostCarousel } from '@/vibes/soul/sections/blog-post-carousel';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

interface Link {
  label: string;
  href: string;
}

interface Props {
  title?: string;
  cta?: Link;
  blogPosts: Streamable<BlogPostWithId[]>;
  scrollbarLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
}

export function FeaturedBlogPostCarousel({
  cta,
  title,
  blogPosts,
  scrollbarLabel,
  previousLabel,
  nextLabel,
}: Props) {
  return (
    <SectionLayout containerSize="2xl" hideOverflow>
      <div className="mb-6 flex w-full flex-row flex-wrap justify-between gap-x-8 px-1.5 text-foreground @4xl:mb-8 @4xl:items-end">
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-medium leading-none @xl:text-3xl @4xl:text-4xl">
            {title}
          </h2>
        </div>
        {cta != null && cta.href !== '' && cta.label !== '' && (
          <AnimatedLink className="mr-3" href={cta.href}>
            {cta.label}
          </AnimatedLink>
        )}
      </div>
      <BlogPostCarousel
        blogPosts={blogPosts}
        nextLabel={nextLabel}
        previousLabel={previousLabel}
        scrollbarLabel={scrollbarLabel}
      />
    </SectionLayout>
  );
}
