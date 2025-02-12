import { BlogPostCard, BlogPostWithKey } from '@/vibes/soul/primitives/blog-post-card';
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/vibes/soul/primitives/carousel';

interface Props {
  className?: string;
  blogPosts: BlogPostWithKey[];
  scrollbarLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
}

export function BlogPostCarousel({
  className,
  blogPosts,
  scrollbarLabel,
  previousLabel,
  nextLabel,
}: Props) {
  return (
    <Carousel className={className}>
      <CarouselContent className="mb-10">
        {blogPosts.map(({ key, ...post }) => {
          return (
            <CarouselItem
              className="basis-full @md:basis-1/2 @4xl:basis-1/3 @7xl:basis-1/4"
              key={key}
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
}
