import { CardProps } from '@/vibes/soul//components/card'
import Feature from '@/vibes/soul/components/feature'
import { FeaturedImageProps } from '@/vibes/soul/components/featured-image'
import HomePage from '@/vibes/soul/components/page-home'
import { Product } from '@/vibes/soul/components/product-card'

const headerLinks = [
  {
    label: 'All Bags',
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
    title: 'Customizable',
    description: 'Create your own style',
    image: {
      src: 'https://rstr.in/monogram/vibes/Q5DVr0sKa6I',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Aero Dynamic',
    description: 'Designed for speed and comfort',
    image: {
      src: 'https://rstr.in/monogram/vibes/shMqUI79u99',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Accessible',
    description: 'Easy access to all your gear',
    image: {
      src: 'https://rstr.in/monogram/vibes/Hbzg3JrFIHV',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
]

export const categories: CardProps[] = [
  {
    title: 'Men',
    image: { src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc', altText: 'Men' },
    href: '#',
  },
  {
    title: 'Women',
    image: { src: 'https://rstr.in/monogram/vibes/aS3laRWb4yA', altText: 'Women' },
    href: '#',
  },
  {
    title: 'Jerseys',
    image: { src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1', altText: 'Jerseys' },
    href: '#',
  },
  {
    title: 'Headwear',
    image: { src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9', altText: 'Headwear' },
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
    src: 'https://rstr.in/monogram/vibes/mQ0gb1u9_CO',
    altText: '',
  },
  cta: { href: '#', label: 'Shop Now' },
}

// TODO: Footer

export default function Preview() {
  return (
    <HomePage
      headerLinks={headerLinks}
      logo={{
        src: 'https://rstr.in/monogram/vibes/JzEctN2uDqL',
        alt: 'Outer Shell Logo',
      }}
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
