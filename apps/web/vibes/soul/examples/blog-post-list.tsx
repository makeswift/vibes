import { BlogPost } from '@/vibes/soul/components/blog-post-card'
import { BlogPostList } from '@/vibes/soul/components/blog-post-list'

export const posts: BlogPost[] = [
  {
    id: '5',
    title: 'A Guide to Low-Light Houseplants',
    content:
      'Not all plants need bright sunlight to thrive. This guide highlights the best low-light houseplants, perfect for those darker corners of your home or office that need a touch of green.',
    image: {
      src: 'https://rstr.in/monogram/vibes/T7CeSkvi11I/OrJN5KVj7I1',
      altText: 'Low-Light Houseplants',
    },
    date: '2024-07-20',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '1',
    title: "Top 5 Indoor Plants to Purify Your Home's Air",
    content:
      'Discover the best indoor plants that not only add a touch of green to your space but also purify the air. From the resilient Snake Plant to the easy-going Spider Plant, these top picks will keep your home fresh and vibrant.',
    image: {
      src: 'https://rstr.in/monogram/vibes/25AJnay0WtU/mAld6qscHh-',
      altText: 'Indoor Plants for Air Purification',
    },
    date: '2024-07-01',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '10',
    title: 'Seasonal Plant Care Tips: Preparing for Fall',
    content:
      "As the seasons change, so do your plants' needs. Get ready for fall with these seasonal plant care tips, including how to transition your outdoor plants indoors and what to expect during the colder months.",
    image: {
      src: 'https://rstr.in/monogram/vibes/1tqb3RTssHn/Dn2gTeQkDRD',
      altText: 'Seasonal Plant Care Tips',
    },
    date: '2024-08-10',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '4',
    title: 'The Benefits of Having Plants in Your Home',
    content:
      'Plants do more than just beautify your home. They improve air quality, reduce stress, and even boost your mood. Explore the many benefits of indoor plants and why you should add more green to your living space.',
    image: {
      src: 'https://rstr.in/monogram/vibes/5RpTEji2npU/cJxPrn32Osw',
      altText: 'Benefits of Indoor Plants',
    },
    date: '2024-07-15',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '6',
    title: 'How to Repot Your Plants for Healthy Growth',
    content:
      'Repotting your plants is essential for maintaining their health and promoting growth. Over time, plants outgrow their pots, leading to root-bound conditions where roots are cramped and unable to absorb nutrients efficiently. This guide will walk you through the process of repotting, ensuring your plants thrive in their new home.',
    image: {
      src: 'https://rstr.in/monogram/vibes/4m4x1nKM1bd/3mWxn3NPadv',
      altText: 'Repotting Plants',
    },
    date: '2024-08-20',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '7',
    title: '5 Easy-Care Plants for Busy People',
    content:
      'Too busy to care for high-maintenance plants? These 5 easy-care plants are perfect for those with a hectic schedule. They require minimal attention while still bringing life to your home.',
    image: {
      src: 'https://rstr.in/monogram/vibes/MJbRGY1Y9LK/jIq-Qhrz9nl',
      altText: 'Easy-Care Plants for Busy People',
    },
    date: '2024-07-30',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '8',
    title: 'Propagate & Share',
    content:
      'Propagating plants is an easy and rewarding way to multiply your favorite plants and share them with friends. Whether you’re working with succulents, herbs, or houseplants, you can start new plants from cuttings, leaves, or even water-rooting. This guide will show you how simple it is to propagate plants, making it a fun activity to spread the green love.',
    image: {
      src: 'https://rstr.in/monogram/vibes/SIjJWx_ZJA0/4hUVTzk4YxG',
      altText: 'Plant Propagation',
    },
    date: '2024-08-20',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '3',
    title: '5 Best Plants for Your Office Desk',
    content:
      "Brighten up your workspace with these 5 easy-to-care-for office plants. Whether you have a sunny window or a dimly lit corner, there's a perfect plant on this list to suit your office environment.",
    image: {
      src: 'https://rstr.in/monogram/vibes/zoSdSotM133/8anGjGfjP1q',
      altText: 'Office Desk Plants',
    },
    date: '2024-07-10',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '9',
    title: 'How to Choose the Right Pot for Your Plant',
    content:
      "The right pot can make all the difference in your plant's health. Learn how to select the perfect pot based on your plant's size, growth habits, and aesthetic preferences.",
    image: {
      src: 'https://rstr.in/monogram/vibes/L9i8WKVVLzt/8Jxv3zXPxa3',
      altText: 'Choosing the Right Pot for Your Plant',
    },
    date: '2024-08-05',
    href: '#',
    author: 'Author Name',
  },
]

export default function Preview() {
  return (
    <div className="p-6">
      <BlogPostList posts={posts} />
    </div>
  )
}
