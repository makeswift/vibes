import { ProductDetail } from '@/vibes/soul/components/product-detail'

export const product = {
  id: '1',
  name: 'Caladium Rosebud',
  price: '$19.95',
  image: {
    src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt',
    altText: 'Caladium Rosebud',
  },
  images: [
    { id: '1', src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt', altText: 'Caladium Rosebud' },
    {
      id: '2',
      src: 'https://rstr.in/monogram/vibes/FDRjvGlh8JT',
      altText: 'Caladium Rosebud Detail',
    },
    {
      id: '3',
      src: 'https://rstr.in/monogram/vibes/D1uDyHea7f0',
      altText: 'Caladium Rosebud Detail',
    },
    {
      id: '4',
      src: 'https://rstr.in/monogram/vibes/4xDOP4qM9cC',
      altText: 'Caladium Rosebud Detail',
    },
  ],
  href: '#',
  rating: 4.8,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  // options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
}

export default function Preview() {
  return <ProductDetail product={product} />
}
