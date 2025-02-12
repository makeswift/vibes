import { BlogPostCard } from '@/vibes/soul/primitives/blog-post-card';

const blogPost = {
  author: 'Ryan Smith',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget velit hendrerit erat imperdiet tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is some more text to test out here.',
  date: '2024-07-01',
  href: '#',
  id: '1',
  image: {
    src: 'https://rstr.in/monogram/vibes/MJbRGY1Y9LK/QlkAvXGZ2ER',
    alt: 'Vestibulum eleifend placerat ligula',
  },
  title: 'Vestibulum eleifend placerat ligula and even more text for a long title',
};

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-8">
      <BlogPostCard
        author={blogPost.author}
        content={blogPost.content}
        date={blogPost.date}
        href={blogPost.href}
        image={blogPost.image}
        title={blogPost.title}
      />
    </div>
  );
}
