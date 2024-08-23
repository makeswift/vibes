import { CardProps } from '@/vibes/soul/components/card'
import Feature from '@/vibes/soul/components/feature'
import HomePage from '@/vibes/soul/components/page-home'
import { Product } from '@/vibes/soul/components/product-card'

import { FeaturedImageProps } from '../components/featured-image'

const headerLinks = [
  {
    label: 'All Plants',
    href: '#',
    groups: [
      {
        label: 'Featured',
        href: '#',
        links: [
          { label: 'New Arrivals', href: '#' },
          { label: 'Best Sellers', href: '#' },
          { label: 'Sale', href: '#' },
        ],
      },
      {
        label: 'Shop By Size',
        href: '#',
        links: [
          { label: 'Small', href: '#' },
          { label: 'Medium', href: '#' },
          { label: 'Large', href: '#' },
        ],
      },
      {
        label: 'Light',
        href: '#',
        links: [
          { label: 'Bright Direct', href: '#' },
          { label: 'Bright Indirect', href: '#' },
          { label: 'Low Light', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'New Arrivals',
    href: '#',
    groups: [
      {
        label: 'Featured',
        href: '#',
        links: [
          { label: 'Best Sellers', href: '#' },
          { label: 'Shop All', href: '#' },
        ],
      },
      {
        label: 'Indoor',
        href: '#',
        links: [
          { label: 'Desk Plants', href: '#' },
          { label: 'Low Light Plants', href: '#' },
          { label: 'Pet Friendly', href: '#' },
        ],
      },
      {
        label: 'Outdoor',
        href: '#',
        links: [
          { label: 'Small', href: '#' },
          { label: 'Medium', href: '#' },
          { label: 'Large', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Pet Friendly',
    href: '#',
    groups: [
      {
        label: 'Indoor',
        href: '#',
        links: [
          { label: 'Low Light', href: '#' },
          { label: 'Air Purifying', href: '#' },
          { label: 'Low Maintenance', href: '#' },
        ],
      },
      {
        label: 'Outdoor',
        href: '#',
        links: [
          { label: 'Direct Sun', href: '#' },
          { label: 'Floral', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Blog',
    href: '#',
    groups: [
      {
        label: 'Plant Life',
        href: '#',
        links: [{ label: 'See All Stories', href: '#' }],
      },
    ],
  },
]

const heroSlides = [
  {
    title: 'Give',
    image: {
      src: 'https://rstr.in/monogram/vibes/fzVuE9iZ4mI',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Grow',
    image: {
      src: 'https://rstr.in/monogram/vibes/-cqnV6UhvCk',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Thrive',
    image: {
      src: 'https://rstr.in/monogram/vibes/RNZYqBoUs7C/3QYdXXiml_C',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
]

const categories: CardProps[] = [
  {
    title: 'Small Plants',
    image: { src: 'https://rstr.in/monogram/vibes/DYeoTIrhxZk', altText: 'Small Plants' },
    href: '#',
  },
  {
    title: 'Low Maintenance',
    image: {
      src: 'https://rstr.in/monogram/vibes/25AJnay0WtU/LiQxF_6c-Sk',
      altText: 'Low Maintenance',
    },
    href: '#',
  },
  {
    title: 'Indestructible',
    image: { src: 'https://rstr.in/monogram/vibes/9HSPQU1tr1p', altText: 'Indestructible' },
    href: '#',
  },
  {
    title: 'Succulent',
    image: { src: 'https://rstr.in/monogram/vibes/lJg081kQqvc', altText: 'Succulent' },
    href: '#',
  },
]

// Featured Products
export const newArrivals: Product[] = [
  {
    id: '1',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/zyFDaG5bRQE',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '2',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/AxXaqTzRozM',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '3',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/vznZvupsj2y',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '4',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '5',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/UQMA3XLfWvF',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '6',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/cMF-gCyIas9',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '7',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/W_zhzrsEqp7',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '8',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/HL613sp6BIP',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '9',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/afA-7qP8zih',
      altText: 'Product Name',
    },
    href: '#',
  },
]

const featuredImage: FeaturedImageProps = {
  title: 'Thoughtfully Curated',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/J7ckF24ZWrQ',
    altText: 'Close up of a plant',
  },
  cta: { href: '#', label: 'Shop Now' },
}

export const featuredProductsContent = {
  title: '',
  description: '',
  cta: {
    label: '',
    href: '#',
  },
}

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    // badge: 'Indestructible',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '2',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    // badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '3',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    // badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '4',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    // badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '6',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    // badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/gfGRQi5pHeJ',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '5',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    // badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
      altText: 'Product Name',
    },
    href: '#',
  },
]

// TODO: New Arrivals

const feature: Feature = {
  image: {
    src: 'https://rstr.in/monogram/vibes/hmVsJqRS2jJ',
    altText: 'Close up of a plant',
  },
  title: 'For Your Home',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  // grid: {
  //   icon: 'string',
  //   title: 'string',
  //   description: 'string',
  // },
  cta: {
    href: 'string',
    label: 'string',
  },
}

// TODO: Recently Viewed

export const featuredImageII: FeaturedImageProps = {
  title: 'Pro-Team',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/Ip8DYxJT8_b',
    altText: 'Close up of a plant',
  },
  cta: { href: '#', label: 'Shop Now' },
}

// TODO: Footer

export default function Preview() {
  return (
    <HomePage
      headerLinks={headerLinks}
      logo="SOUL"
      heroSlides={heroSlides}
      categories={categories}
      featuredImage={featuredImage}
      feature={feature}
      featuredProductsContent={featuredProductsContent}
      featuredProducts={featuredProducts}
      newArrivals={newArrivals}
      featuredImageII={featuredImageII}
    />
  )
}
