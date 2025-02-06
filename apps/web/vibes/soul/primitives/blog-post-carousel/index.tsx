import { ComponentPropsWithoutRef } from 'react';

import { BlogPostCard } from '@/vibes/soul/primitives/blog-post-card';
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/vibes/soul/primitives/carousel';

export function BlogPostCarousel({
  className,
  blogPosts,
  scrollbarLabel,
  previousLabel,
  nextLabel,
}: {
  className?: string;
  blogPosts: Array<
    ComponentPropsWithoutRef<typeof BlogPostCard>['blogPost'] & {
      id: string;
    }
  >;
  scrollbarLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
}) {
  return (
    <Carousel className={className}>
      <CarouselContent className="mb-10">
        {blogPosts.map((post) => {
          return (
            <CarouselItem
              className="basis-full @md:basis-1/2 @4xl:basis-1/3 @7xl:basis-1/4"
              key={post.id}
            >
              <BlogPostCard blogPost={post} />
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
}
