import { CardProps } from '@/vibes/soul/components/card'
import { Feature } from '@/vibes/soul/components/feature'
import { FeaturedImageProps } from '@/vibes/soul/components/featured-image'
import HomePage from '@/vibes/soul/components/page-home'
import { Product } from '@/vibes/soul/components/product-card'

export const headerLinks = [
  {
    label: 'New',
    href: '#',
  },
  {
    label: 'Sale',
    href: '#',
  },
  {
    label: 'Footware',
    href: '#',
    groups: [
      {
        label: 'By Category',
        href: '#',
        links: [
          { label: 'Sandals', href: '#' },
          { label: 'Flats', href: '#' },
          { label: 'Sneakers', href: '#' },
          { label: 'Loafers', href: '#' },
          { label: 'Heels', href: '#' },
          { label: 'Boots', href: '#' },
          { label: 'Sale', href: '#' },
          { label: 'View All', href: '#' },
          { label: 'Last Chance', href: '#' },
        ],
      },
      {
        label: 'By Collection',
        href: '#',
        links: [
          { label: 'Fall Drop One', href: '#' },
          { label: 'Travel Edit', href: '#' },
          { label: 'Ballet Everyday', href: '#' },
          { label: 'FRĒDA X WOLFSPOUT', href: '#' },
          { label: 'Loafer Shop', href: '#' },
          { label: 'Best of FRĒDA', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Discover',
    href: '#',
    groups: [
      {
        label: 'Find US',
        href: '#',
        links: [
          { label: 'Locations', href: '#' },
          { label: 'Events', href: '#' },
          { label: 'Press', href: '#' },
          { label: 'Contact Us', href: '#' },
        ],
      },
      {
        label: 'Who is FRĒDA?',
        href: '#',
        links: [
          { label: 'Behind the Brand', href: '#' },
          { label: 'Our Family-Run Factories', href: '#' },
          { label: 'Journal', href: '#' },
          { label: 'Careers', href: '#' },
        ],
      },
    ],
  },
]

export const heroSlides = [
  {
    title: '',
    description: 'who is Freda?',
    image: {
      src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT/jhF8-98zfEq',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: '',
    image: {
      src: 'https://rstr.in/monogram/vibes/8zU5OY9zRhv/nAXoYnVFDdU',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: '',
    image: {
      src: 'https://rstr.in/monogram/vibes/Cjfge1f4__e',
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
    title: 'Flats',
    image: { src: 'https://rstr.in/monogram/vibes/YXr3BKEq3T4/j4d8DXT8gGB', altText: 'Flats' },
    href: '#',
  },
  {
    title: 'Boots',
    image: {
      src: 'https://rstr.in/monogram/vibes/EnWYvct7gIR',
      altText: 'Boots',
    },
    href: '#',
  },
  {
    title: 'Loafers',
    image: {
      src: 'https://rstr.in/monogram/vibes/--JXxhCGkan',
      altText: 'Loafers',
    },
    href: '#',
  },
  {
    title: 'Sneakers',
    image: { src: 'https://rstr.in/monogram/vibes/w8kVrtse8Id/mO9ju-R1-8L', altText: 'Sneakers' },
    href: '#',
  },
  {
    title: 'Heels',
    image: { src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT', altText: 'Heels' },
    href: '#',
  },
]

export const featuredProductsContent = {
  title: 'Trending Now',
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
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
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
      src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT',
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
      src: 'https://rstr.in/monogram/vibes/6inssBpCQru',
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
      src: 'https://rstr.in/monogram/vibes/YfQW8M1Gv2H/zTWKcqJrdIu',
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
      src: 'https://rstr.in/monogram/vibes/T9MLItS0VSO/RdZwDWmuyFu',
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
      src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz/vfCehRZDBGk',
      altText: 'Product Name',
    },
    href: '#',
  },
]

// TODO: New Arrivals

export const featuredImage: FeaturedImageProps = {
  title: 'Loved by Women Everywhere',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/vfUlF0UL0ZN',
    altText: 'Close up of a plant',
  },
  cta: { href: '#', label: 'Shop Now' },
}

export const feature: Feature = {
  image: {
    src: 'https://rstr.in/monogram/vibes/B7iQGslbxE4',
    altText: 'string',
  },
  title: 'DESIGN-LED + FUNCTION-FORMED',
  description:
    'We set out to create reimagined classics for the non-stop woman. Our unique approach to design is what makes us stand out while the quality and function of our handmade shoes and accessories are what has formed our community of badass women. The combination of both Megan and Cristina’s individual styles is present in every piece. While slightly unconventional, our collections are meant to live in your closet forever.',
  // grid: {
  //   icon: 'string',
  //   title: 'string',
  //   description: 'string',
  // },
  cta: {
    href: 'Shop Now',
    label: '#',
  },
}

// TODO: Recently Viewed
// TODO: Featured Image II
export const featuredImageII: FeaturedImageProps = {
  title: 'Handmade in Spain',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
    altText: '',
  },
  cta: { href: '#', label: 'Shop Now' },
}

// TODO: Footer

export default function Preview() {
  return (
    <HomePage
      headerLinks={headerLinks}
      logo={{ src: 'https://rstr.in/monogram/vibes/DVHsMCuLQID', altText: 'Freda Salvador' }}
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
