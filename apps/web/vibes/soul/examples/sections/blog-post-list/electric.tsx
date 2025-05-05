import { type BlogPost } from '@/vibes/soul/primitives/blog-post-card';
import { BlogPostList } from '@/vibes/soul/sections/blog-post-list';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export default function Preview() {
  const blogPostsPromise = new Promise<BlogPost[]>((resolve) => {
    setTimeout(() => resolve(posts), 1000);
  });

  return (
    <SectionLayout className="group/blog-post-list">
      <BlogPostList blogPosts={blogPostsPromise} />
    </SectionLayout>
  );
}

export const posts: BlogPost[] = [
  {
    title: 'A Guide to Low-Light Houseplants',
    content:
      'Not all plants need bright sunlight to thrive. This guide highlights the best low-light houseplants, perfect for those darker corners of your home or office that need a touch of green.',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0NGVmOWFkZC00MDc5LTRmMTAtODIyMC0zM2UwNjNkMGRjZDM=/low-light.jpeg',
      alt: 'Low-Light Houseplants',
    },
    date: '2024-07-20',
    href: '#1',
    author: 'Author Name',
  },
  {
    title: "Top 5 Indoor Plants to Purify Your Home's Air",
    content:
      'Discover the best indoor plants that not only add a touch of green to your space but also purify the air. From the resilient Snake Plant to the easy-going Spider Plant, these top picks will keep your home fresh and vibrant.',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpiYWZkNDQ0MC1kMDEyLTQ1OGYtYjJjYy04ODJkMWNjNDBlNWY=/plants-tier.jpeg',
      alt: 'Indoor Plants for Air Purification',
    },
    date: '2024-07-01',
    href: '#2',
    author: 'Author Name',
  },
  {
    title: 'Seasonal Plant Care Tips: Preparing for Fall',
    content:
      "As the seasons change, so do your plants' needs. Get ready for fall with these seasonal plant care tips, including how to transition your outdoor plants indoors and what to expect during the colder months.",
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4OGI3NzE4MC0zZTM2LTQ4YjEtYTNkMy03NGMyOTczOTljNTI=/plant-care-tips.jpeg',
      alt: 'Seasonal Plant Care Tips',
    },
    date: '2024-08-10',
    href: '#3',
    author: 'Author Name',
  },
  {
    title: 'The Benefits of Having Plants in Your Home',
    content:
      'Plants do more than just beautify your home. They improve air quality, reduce stress, and even boost your mood. Explore the many benefits of indoor plants and why you should add more green to your living space.',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplZWMzZTA0Yy1lZjc2LTQzYzEtYWFhYy05OGE2ZGY2ODdlYmI=/benefits-of-plants.jpeg',
      alt: 'Benefits of Indoor Plants',
    },
    date: '2024-07-15',
    href: '#4',
    author: 'Author Name',
  },
  {
    title: 'How to Repot Your Plants for Healthy Growth',
    content:
      'Repotting your plants is essential for maintaining their health and promoting growth. Over time, plants outgrow their pots, leading to root-bound conditions where roots are cramped and unable to absorb nutrients efficiently. This guide will walk you through the process of repotting, ensuring your plants thrive in their new home.',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4MDQxODczNi0zNWRjLTRiMWQtODJkYi0yNTNmMzE0YjVjY2E=/repotting-plants.jpeg',
      alt: 'Repotting Plants',
    },
    date: '2024-08-20',
    href: '#5',
    author: 'Author Name',
  },
  {
    title: '5 Easy-Care Plants for Busy People',
    content:
      'Too busy to care for high-maintenance plants? These 5 easy-care plants are perfect for those with a hectic schedule. They require minimal attention while still bringing life to your home.',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3NDUzMjZmMy1kMTM3LTQwMjgtYjFhOC1mYjFlOGQ2MzZiZjE=/easy-care-plants.jpeg',
      alt: 'Easy-Care Plants for Busy People',
    },
    date: '2024-07-30',
    href: '#6',
    author: 'Author Name',
  },
  {
    title: 'Propagate & Share',
    content:
      'Propagating plants is an easy and rewarding way to multiply your favorite plants and share them with friends. Whether you’re working with succulents, herbs, or houseplants, you can start new plants from cuttings, leaves, or even water-rooting. This guide will show you how simple it is to propagate plants, making it a fun activity to spread the green love.',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZGYzZGI3Zi04MDU3LTQwZDEtOWU5NS1lMzJhNTc1YWVmZjk=/plant-propagation.jpeg',
      alt: 'Plant Propagation',
    },
    date: '2024-08-20',
    href: '#7',
    author: 'Author Name',
  },
  {
    title: '5 Best Plants for Your Office Desk',
    content:
      "Brighten up your workspace with these 5 easy-to-care-for office plants. Whether you have a sunny window or a dimly lit corner, there's a perfect plant on this list to suit your office environment.",
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTozNWE0MjBjYy1iYTBkLTQxMDItOGZjMC1kYTFjZTkxZGYwMmM=/office-desk-plants.jpeg',
      alt: 'Office Desk Plants',
    },
    date: '2024-07-10',
    href: '#8',
    author: 'Author Name',
  },
  {
    title: 'How to Choose the Right Pot for Your Plant',
    content:
      "The right pot can make alls the difference in your plant's health. Learn how to select the perfect pot based on your plant's size, growth habits, and aesthetic preferences.",
    date: '2024-08-05',
    href: '#9',
    author: 'Author Name',
  },
];
