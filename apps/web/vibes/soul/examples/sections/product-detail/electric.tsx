import { ProductDetail } from '@/vibes/soul/sections/product-detail'

import { action, fields } from './action'

export const product = {
  id: '1',
  subtitle: 'Indoor Plants',
  title: 'Caladium Rosebud',
  price: '$19.95',
  image: {
    src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt',
    alt: 'Caladium Rosebud',
  },
  images: [
    { src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt', alt: 'Caladium Rosebud' },
    {
      src: 'https://rstr.in/monogram/vibes/FDRjvGlh8JT',
      alt: 'Caladium Rosebud Detail',
    },
    {
      src: 'https://rstr.in/monogram/vibes/D1uDyHea7f0',
      alt: 'Caladium Rosebud Detail',
    },
    {
      src: 'https://rstr.in/monogram/vibes/4xDOP4qM9cC',
      alt: 'Caladium Rosebud Detail',
    },
  ],
  href: '#',
  rating: 4.8,
  description:
    'The Caladium Rosebud plant features vibrant pink and green heart-shaped leaves, adding a beautiful pop of color to any indoor or outdoor setting.',
}

export default function Preview() {
  return <ProductDetail product={product} fields={fields} action={action} />
}
