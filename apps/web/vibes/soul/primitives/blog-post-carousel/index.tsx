import { BlogPost, BlogPostCard } from '@/vibes/soul/primitives/blog-post-card';
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/vibes/soul/primitives/carousel';

interface Props {
  className?: string;
  blogPosts: BlogPost[];
  carouselScrollbarLabel?: string;
}

export function BlogPostCarousel({ className, blogPosts, carouselScrollbarLabel }: Props) {
  return (
    <Carousel className={className}>
      <CarouselContent className="mb-10">
        {blogPosts.map((post) => {
          return (
            <CarouselItem
              className="basis-full @md:basis-1/2 @4xl:basis-1/3 @7xl:basis-1/4"
              key={post.id}
            >
              <BlogPostCard {...post} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="flex w-full items-center justify-between">
        <CarouselScrollbar carouselScrollbarLabel={carouselScrollbarLabel} />
        <CarouselButtons />
      </div>
    </Carousel>
  );
}
