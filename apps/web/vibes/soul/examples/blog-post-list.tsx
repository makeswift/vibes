import { BlogPost } from '@/vibes/soul/components/blog-post-card'
import BlogFeed from '@/vibes/soul/components/blog-post-list'

export const posts: BlogPost[] = [
  {
    id: '1',
    title: "Top 5 Indoor Plants to Purify Your Home's Air",
    content:
      'Discover the best indoor plants that not only add a touch of green to your space but also purify the air. From the resilient Snake Plant to the easy-going Spider Plant, these top picks will keep your home fresh and vibrant.',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Indoor Plants for Air Purification',
    },
    date: '2024-07-01',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '2',
    title: "How to Care for Succulents: A Beginner's Guide",
    content:
      'Succulents are perfect for those who want low-maintenance plants that thrive on minimal water. Learn the basics of succulent care, including watering tips, sunlight needs, and how to prevent common issues like overwatering.',
    image: {
      src: 'https://rstr.in/monogram/vibes/Y65f0o9B1ww/fH1PEB_-ylh',
      altText: 'Succulent Care Guide',
    },
    date: '2024-07-05',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '3',
    title: '10 Best Plants for Your Office Desk',
    content:
      "Brighten up your workspace with these 10 easy-to-care-for office plants. Whether you have a sunny window or a dimly lit corner, there's a perfect plant on this list to suit your office environment.",
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Office Desk Plants',
    },
    date: '2024-07-10',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '4',
    title: 'The Benefits of Having Plants in Your Home',
    content:
      'Plants do more than just beautify your home. They improve air quality, reduce stress, and even boost your mood. Explore the many benefits of indoor plants and why you should add more green to your living space.',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Benefits of Indoor Plants',
    },
    date: '2024-07-15',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '5',
    title: 'A Guide to Low-Light Houseplants',
    content:
      'Not all plants need bright sunlight to thrive. This guide highlights the best low-light houseplants, perfect for those darker corners of your home or office that need a touch of green.',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Low-Light Houseplants',
    },
    date: '2024-07-20',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '6',
    title: 'How to Create a Vertical Garden in Small Spaces',
    content:
      'Maximize your space with a vertical garden! This blog post walks you through the steps of creating a lush green wall in even the smallest of spaces, perfect for apartment dwellers or those with limited outdoor space.',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Vertical Garden in Small Spaces',
    },
    date: '2024-07-25',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '7',
    title: '5 Easy-Care Plants for Busy People',
    content:
      'Too busy to care for high-maintenance plants? These 5 easy-care plants are perfect for those with a hectic schedule. They require minimal attention while still bringing life to your home.',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Easy-Care Plants for Busy People',
    },
    date: '2024-07-30',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '8',
    title: 'The Best Plants for Beginners',
    content:
      'New to gardening? Start with these beginner-friendly plants that are hard to kill and easy to grow. Whether you prefer indoor or outdoor greenery, these plants will give you the confidence to grow your collection.',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Plants for Beginners',
    },
    date: '2024-08-01',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '9',
    title: 'How to Choose the Right Pot for Your Plant',
    content:
      "The right pot can make all the difference in your plant's health. Learn how to select the perfect pot based on your plant's size, growth habits, and aesthetic preferences.",
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Choosing the Right Pot for Your Plant',
    },
    date: '2024-08-05',
    href: '#',
    author: 'Author Name',
  },
  {
    id: '10',
    title: 'Seasonal Plant Care Tips: Preparing for Fall',
    content:
      "As the seasons change, so do your plants' needs. Get ready for fall with these seasonal plant care tips, including how to transition your outdoor plants indoors and what to expect during the colder months.",
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Seasonal Plant Care Tips',
    },
    date: '2024-08-10',
    href: '#',
    author: 'Author Name',
  },
]

export default function Preview() {
  return (
    <div className="py-6">
      <BlogFeed posts={posts} />
    </div>
  )
}
