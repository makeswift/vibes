import { BlogPostWithId } from '@/vibes/soul/primitives/blog-post-card';
import { FeaturedBlogPostList } from '@/vibes/soul/sections/featured-blog-post-list';

export default function Preview() {
  const blogPostsPromise = new Promise<BlogPostWithId[]>((resolve) => {
    setTimeout(() => resolve(posts), 1000);
  });

  return (
    <FeaturedBlogPostList
      blogPosts={blogPostsPromise}
      breadcrumbs={[
        {
          id: '1',
          label: 'Home',
          href: '#',
        },
        {
          id: '2',
          label: 'Blog',
          href: '#',
        },
      ]}
      description="Expert Tips & Inspiration for Every Outdoor Lover"
      emptyStateSubtitle="Check back later for more content"
      emptyStateTitle="No blog posts found"
      paginationInfo={{
        startCursor: '1',
        endCursor: '5',
      }}
      placeholderCount={6}
      title="Outdoor Life"
    />
  );
}

export const posts: BlogPostWithId[] = [
  {
    id: '1',
    title: 'The Perfect Mini Bar Bag for Your Next Adventure',
    content:
      'Discover the convenience and durability of the Mini Bar Bag, perfect for carrying your essentials on long cycling trips. With multiple colors available, this bag is a must-have for every rider.',
    image: {
      src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
      alt: 'Mini Bar Bag',
    },
    date: '2025-02-21',
    href: '#',
    author: 'Alex Rider',
  },
  {
    id: '2',
    title: 'Why Every Cyclist Needs a Stem Caddy',
    content:
      'A Stem Caddy is the ultimate accessory for quick access to snacks, tools, or even your phone. Find out why cyclists love this compact and stylish storage solution.',
    image: {
      src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
      alt: 'Stem Caddy',
    },
    date: '2025-02-18',
    href: '#',
    author: 'Jamie Lane',
  },
  {
    id: '3',
    title: 'How the Hip Slinger Changes the Game for Riders',
    content:
      'Say goodbye to bulky backpacks! The Hip Slinger offers a sleek, comfortable way to carry your gear while riding. Learn why this bag is becoming a favorite among urban cyclists.',
    image: {
      src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
      alt: 'Hip Slinger',
    },
    date: '2025-02-15',
    href: '#',
    author: 'Morgan Wells',
  },
  {
    id: '4',
    title: 'The Everyday Tote: More Than Just a Bag',
    content:
      'Stylish, functional, and durable—the Everyday Tote is perfect for riders who need a versatile bag for both cycling and daily life. Check out its top features.',
    image: {
      src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
      alt: 'Everyday Tote',
    },
    date: '2025-02-10',
    href: '#',
    author: 'Taylor Smith',
  },
  {
    id: '5',
    title: 'Mini Saddlebag: A Compact Essential for Every Ride',
    content:
      'Whether you’re a commuter or a long-distance rider, the Mini Saddlebag keeps your tools and small essentials safe and accessible. See why riders love it.',
    image: {
      src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
      alt: 'Mini Saddlebag',
    },
    date: '2025-02-05',
    href: '#',
    author: 'Jordan Lee',
  },
];
