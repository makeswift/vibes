import { CardProps } from '@/vibes/soul//components/card'
import Feature from '@/vibes/soul/components/feature'
import { FeaturedImageProps } from '@/vibes/soul/components/featured-image'
import HomePage from '@/vibes/soul/components/page-home'
import { Product } from '@/vibes/soul/components/product-card'

const headerLinks = [
  {
    label: 'All',
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

export const heroSlides = [
  {
    title: 'New Casuals',
    image: {
      src: 'https://rstr.in/monogram/vibes/Nz2yR4EZgvo',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'Slide 2',
    image: {
      src: 'https://rstr.in/monogram/vibes/gWgyEhm5W60',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'Slide 3',
    image: {
      src: 'https://rstr.in/monogram/vibes/K-F83RXTJsx',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
]

export const categories: CardProps[] = [
  {
    title: 'Men',
    image: { src: 'https://rstr.in/monogram/vibes/ptJ724KlDom', altText: 'Men' },
    href: '#',
  },
  {
    title: 'Women',
    image: { src: 'https://rstr.in/monogram/vibes/P3yw1GHGDuv', altText: 'Women' },
    href: '#',
  },
  {
    title: 'Footwear',
    image: { src: 'https://rstr.in/monogram/vibes/XG-Zqe3Y2xH', altText: 'Footwear' },
    href: '#',
  },
  {
    title: 'Headwear',
    image: { src: 'https://rstr.in/monogram/vibes/ayf5JcyknJ4', altText: 'Headwear' },
    href: '#',
  },
]

const featuredImage: FeaturedImageProps = {
  title: 'Thoughtfully Designed',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/shMqUI79u99',
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
    src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
    altText: 'string',
  },
  title: 'Our Everday Tote',
  description: 'Fits Perfectly in a Basket',
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
    src: 'Close up of a plant',
    altText: '',
  },
  cta: { href: '#', label: 'Shop Now' },
}
// TODO: Footer

export default function Preview() {
  return (
    <HomePage
      headerLinks={headerLinks}
      heroSlides={heroSlides}
      categories={categories}
      featuredImage={featuredImage}
      feature={feature}
      featuredProductsContent={featuredProductsContent}
      featuredProducts={featuredProducts}
      featuredImageII={featuredImageII}
    />
  )
}
