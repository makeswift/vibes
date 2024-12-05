import { BlogPostCard } from '@/vibes/soul/primitives/blog-post-card';

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-8 @container">
      <BlogPostCard
        id="1"
        title="Vestibulum eleifend placerat ligula and even more text for a long title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget velit hendrerit erat imperdiet tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is some more text to test out here."
        image={{
          src: 'https://rstr.in/monogram/vibes/MJbRGY1Y9LK/QlkAvXGZ2ER',
          alt: 'Vestibulum eleifend placerat ligula',
        }}
        href="#"
        date="2024-07-01"
        author="Ryan Smith"
        className="w-80"
      />
    </div>
  );
}
