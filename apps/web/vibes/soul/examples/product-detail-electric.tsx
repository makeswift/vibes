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
    { src: 'https://rstr.in/monogram/vibes/rDuYCY2nPNt', altText: 'Caladium Rosebud' },
    {
      src: 'https://rstr.in/monogram/vibes/FDRjvGlh8JT',
      altText: 'Caladium Rosebud Detail',
    },
    {
      src: 'https://rstr.in/monogram/vibes/D1uDyHea7f0',
      altText: 'Caladium Rosebud Detail',
    },
    {
      src: 'https://rstr.in/monogram/vibes/4xDOP4qM9cC',
      altText: 'Caladium Rosebud Detail',
    },
  ],
  href: '#',
  rating: 4.8,
  description:
    'The Caladium Rosebud plant features vibrant pink and green heart-shaped leaves, adding a beautiful pop of color to any indoor or outdoor setting.',
}

export default function Preview() {
  return <ProductDetail product={product} />
}
