import { type BlogPost } from '@/vibes/soul/primitives/blog-post-card';
import { FeaturedBlogPostList } from '@/vibes/soul/sections/featured-blog-post-list';

export default function Preview() {
  const blogPostsPromise = new Promise<BlogPost[]>((resolve) => {
    setTimeout(() => resolve(posts), 1000);
  });

  return (
    <FeaturedBlogPostList
      blogPosts={blogPostsPromise}
      breadcrumbs={[
        {
          label: 'Home',
          href: '#1',
        },
        {
          label: 'Blog',
          href: '#2',
        },
      ]}
      description="Expert Tips & Inspiration for Every Luxury Lover"
      emptyStateSubtitle="Check back later for more content"
      emptyStateTitle="No blog posts found"
      paginationInfo={{
        startCursor: '1',
        endCursor: '5',
      }}
      placeholderCount={6}
      title="Luxury Life"
    />
  );
}

export const posts: BlogPost[] = [
  {
    title: 'Jada Square Toe Ballet Flats: A Timeless Classic',
    content:
      'Step into elegance with the JADA SQUARE TOE BALLET FLAT. Discover why this best-selling shoe is a staple for every luxury wardrobe.',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTUwMzNmMy0zYzRlLTQzOTUtYTc3MC1jYWM0OWE1YWMyY2E=/jada-square-toe.webp',
      alt: 'JADA SQUARE TOE BALLET FLAT',
    },
    date: '2025-02-22',
    href: '#1',
    author: 'Emma Carter',
  },
  {
    title: 'Jayla Woven Ballet Heel: Elevate Your Style',
    content:
      'A perfect mix of comfort and sophistication, the Jayla Woven Ballet Heel is making waves in the fashion world. Find out why!',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTE5YTQ1Mi1lZDU3LTQ2NDYtODgxMC0yYzU2NjI0NGM3ODk=/jayla-woven.webp',
      alt: 'Jayla Woven Ballet Heel',
    },
    date: '2025-02-18',
    href: '#2',
    author: 'Liam Davis',
  },
  {
    title: 'Jessie Ballet Flat: The Ultimate Luxury Statement',
    content:
      'Designed for those who appreciate both style and comfort, the Jessie Ballet Flat is redefining luxury footwear. Get the inside scoop!',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowZWIzNWY2My0yM2Y3LTRmNDAtYTUzOS0zY2JjNmFhYzJkYWQ=/jessie-ballet.webp',
      alt: 'Jessie Ballet Flat',
    },
    date: '2025-02-15',
    href: '#3',
    author: 'Sophia Wright',
  },
  {
    title: 'Leighton Soft Leather Loafer: A Must-Have Classic',
    content:
      'Soft, elegant, and built for comfort, the Leighton Soft Leather Loafer is a timeless addition to any wardrobe. Discover its luxurious appeal.',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmM2Y1MzJiZi1hYTg0LTQzNzctYTA4NS1hODZkMWI3NGFmOWU=/leighton-soft.jpeg',
      alt: 'Leighton Soft Leather Loafer',
    },
    date: '2025-02-10',
    href: '#4',
    author: 'Noah Wilson',
  },
  {
    title: ': The Bold Fashion Choice',
    content:
      'The  offers both durability and style. See why fashion lovers are embracing this bold, trendsetting footwear.',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3ZjAyMzkyYS1iN2ViLTQ0YzAtYmUxNi1kOThjMjk0MTU0ZGQ=/darya-lug.webp',
      alt: 'DARYA LUG SOLE FISHERMAN',
    },
    date: '2025-02-05',
    href: '#5',
    author: 'Ava Richardson',
  },
];
