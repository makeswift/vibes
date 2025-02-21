import { clsx } from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import {
  BlogPostCard,
  BlogPostCardSkeleton,
  BlogPostWithId,
} from '@/vibes/soul/primitives/blog-post-card';
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/vibes/soul/primitives/carousel';
import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export interface BlogPostCarouselProps {
  className?: string;
  blogPosts: Streamable<BlogPostWithId[]>;
  scrollbarLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  placeholderCount?: number;
  emptyStateTitle?: Streamable<string>;
  emptyStateSubtitle?: Streamable<string>;
  hideOverflow?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --blog-post-carousel-empty-title: hsl(var(--foreground));
 *   --blog-post-carousel-empty-subtitle: hsl(var(--contrast-500));
 * }
 * ```
 */
export function BlogPostCarousel({
  className,
  blogPosts: streamableBlogPosts,
  scrollbarLabel,
  previousLabel,
  nextLabel,
  hideOverflow = true,
  emptyStateTitle,
  emptyStateSubtitle,
}: BlogPostCarouselProps) {
  return (
    <Stream
      fallback={<BlogPostCarouselSkeleton className={className} />}
      value={streamableBlogPosts}
    >
      {(blogPosts) => {
        if (blogPosts.length === 0) {
          return (
            <BlogPostCarouselEmptyState
              className={className}
              emptyStateSubtitle={emptyStateSubtitle}
              emptyStateTitle={emptyStateTitle}
            />
          );
        }

        return (
          <Carousel className={clsx(className)} hideOverflow={hideOverflow}>
            <CarouselContent className="mb-10">
              {blogPosts.map(({ id, ...post }) => {
                return (
                  <CarouselItem
                    className="basis-full @md:basis-1/2 @4xl:basis-1/3 @7xl:basis-1/4"
                    key={id}
                  >
                    <BlogPostCard {...post} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex w-full items-center justify-between">
              <CarouselScrollbar label={scrollbarLabel} />
              <CarouselButtons nextLabel={nextLabel} previousLabel={previousLabel} />
            </div>
          </Carousel>
        );
      }}
    </Stream>
  );
}

export function BlogPostCarouselSkeleton({
  className,
  placeholderCount = 3,
  hideOverflow = true,
}: Pick<BlogPostCarouselProps, 'className' | 'placeholderCount' | 'hideOverflow'>) {
  return (
    <Skeleton.Root
      className={clsx('group-has-[[data-pending]]/blog-post-carousel:animate-pulse', className)}
      hideOverflow={hideOverflow}
      pending
    >
      <div className="w-full">
        <div className="-ml-4 flex @2xl:-ml-5">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 @md:basis-1/2 @2xl:pl-5 @4xl:basis-1/3 @7xl:basis-1/4"
              key={index}
            >
              <BlogPostCardSkeleton />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex w-full items-center justify-between gap-8">
        <Skeleton.Box className="h-1 w-full max-w-56 rounded" />
        <div className="flex gap-2 text-contrast-200">
          <Skeleton.Icon icon={<ArrowLeft aria-hidden className="h-6 w-6" strokeWidth={1.5} />} />
          <Skeleton.Icon icon={<ArrowRight aria-hidden className="h-6 w-6" strokeWidth={1.5} />} />
        </div>
      </div>
    </Skeleton.Root>
  );
}

export function BlogPostCarouselEmptyState({
  className,
  placeholderCount = 4,
  emptyStateTitle,
  emptyStateSubtitle,
  hideOverflow = true,
}: Pick<
  BlogPostCarouselProps,
  'className' | 'emptyStateTitle' | 'emptyStateSubtitle' | 'placeholderCount' | 'hideOverflow'
>) {
  return (
    <Skeleton.Root className={clsx('relative', className)} hideOverflow={hideOverflow}>
      <div className="w-full">
        <div className="-ml-4 flex [mask-image:linear-gradient(to_bottom,_black_0%,_transparent_90%)] @2xl:-ml-5">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 @md:basis-1/2 @2xl:pl-5 @4xl:basis-1/3 @7xl:basis-1/4"
              key={index}
            >
              <BlogPostCardSkeleton />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 mx-auto px-3 py-16 pb-3 @4xl:px-10 @4xl:pb-10 @4xl:pt-28">
        <div className="mx-auto max-w-xl space-y-2 text-center @4xl:space-y-3">
          <h3 className="@4x:leading-none font-heading text-2xl leading-tight text-[var(--blog-post-carousel-empty-title,hsl(var(--foreground)))] @4xl:text-4xl">
            {emptyStateTitle}
          </h3>
          <p className="text-sm text-[var(--blog-post-carousel-empty-subtitle,hsl(var(--contrast-500)))] @4xl:text-lg">
            {emptyStateSubtitle}
          </p>
        </div>
      </div>
    </Skeleton.Root>
  );
}
