import { type BlogPost } from '@/vibes/soul/primitives/blog-post-card';
import { BlogPostCarousel } from '@/vibes/soul/sections/blog-post-carousel';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export default function Preview() {
  const blogPostsPromise = new Promise<BlogPost[]>((resolve) => {
    setTimeout(() => resolve(posts), 1000);
  });

  return (
    <SectionLayout className="group/blog-post-carousel">
      <BlogPostCarousel
        blogPosts={blogPostsPromise}
        emptyStateSubtitle="Check back later for new content."
        emptyStateTitle="No posts found"
      />
    </SectionLayout>
  );
}

export const posts: BlogPost[] = [
  {
    title: 'The Perfect Mini Bar Bag for Your Next Adventure',
    content:
      'Discover the convenience and durability of the Mini Bar Bag, perfect for carrying your essentials on long cycling trips. With multiple colors available, this bag is a must-have for every rider.',
    image: {
      src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
      alt: 'Mini Bar Bag',
    },
    date: '2025-02-21',
    href: '#1',
    author: 'Alex Rider',
  },
  {
    title: 'Why Every Cyclist Needs a Stem Caddy',
    content:
      'A Stem Caddy is the ultimate accessory for quick access to snacks, tools, or even your phone. Find out why cyclists love this compact and stylish storage solution.',
    image: {
      src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
      alt: 'Stem Caddy',
    },
    date: '2025-02-18',
    href: '#2',
    author: 'Jamie Lane',
  },
  {
    title: 'How the Hip Slinger Changes the Game for Riders',
    content:
      'Say goodbye to bulky backpacks! The Hip Slinger offers a sleek, comfortable way to carry your gear while riding. Learn why this bag is becoming a favorite among urban cyclists.',
    image: {
      src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
      alt: 'Hip Slinger',
    },
    date: '2025-02-15',
    href: '#3',
    author: 'Morgan Wells',
  },
  {
    title: 'The Everyday Tote: More Than Just a Bag',
    content:
      'Stylish, functional, and durable—the Everyday Tote is perfect for riders who need a versatile bag for both cycling and daily life. Check out its top features.',
    image: {
      src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
      alt: 'Everyday Tote',
    },
    date: '2025-02-10',
    href: '#4',
    author: 'Taylor Smith',
  },
  {
    title: 'Mini Saddlebag: A Compact Essential for Every Ride',
    content:
      'Whether you’re a commuter or a long-distance rider, the Mini Saddlebag keeps your tools and small essentials safe and accessible. See why riders love it.',
    image: {
      src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
      alt: 'Mini Saddlebag',
    },
    date: '2025-02-05',
    href: '#5',
    author: 'Jordan Lee',
  },
];
