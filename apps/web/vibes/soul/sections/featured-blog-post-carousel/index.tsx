import { AnimatedLink } from '@/vibes/soul/primitives/animated-link';
import { BlogPost } from '@/vibes/soul/primitives/blog-post-card';
import { BlogPostCarousel } from '@/vibes/soul/primitives/blog-post-carousel';

interface Link {
  label: string;
  href: string;
}

interface Props {
  title?: string;
  cta?: Link;
  blogPosts: BlogPost[];
  scrollbarLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
}

export function FeaturedBlogPostCarousel({ cta, title, blogPosts, scrollbarLabel, previousLabel, nextLabel }: Props) {
  return (
    <section className="overflow-hidden @container">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
        <div className="mb-6 flex w-full flex-row flex-wrap justify-between gap-x-8 text-foreground @4xl:mb-8 @4xl:items-end">
          <div className="flex-1">
            <h2 className="font-heading text-2xl font-medium leading-none @xl:text-3xl @4xl:text-4xl">
              {title}
            </h2>
          </div>
          {cta != null && cta.href !== '' && cta.label !== '' && (
            <AnimatedLink className="mr-3" label={cta.label} link={{ href: cta.href }} />
          )}
        </div>
        <BlogPostCarousel blogPosts={blogPosts} nextLabel={nextLabel} previousLabel={previousLabel} scrollbarLabel={scrollbarLabel} />
      </div>
    </section>
  );
}
