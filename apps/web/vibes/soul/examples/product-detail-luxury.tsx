import ProductDetail from '@/vibes/soul/components/product-detail'

export const product = {
  id: '1',
  name: 'ROMA ROUND TOE BALLET FLAT',
  price: '$19.95',
  image: {
    src: 'https://rstr.in/monogram/vibes/18bzcr01WWx',
    altText: 'A pair of red leather flats with a woven texture.',
  },
  images: [
    {
      src: 'https://rstr.in/monogram/vibes/18bzcr01WWx',
      altText: 'A pair of red leather flats with a woven texture.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/wEcDbUtI2vE',
      altText: 'A pair of brown woven leather ballet flats with a bow.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/_xepH0hyVby',
      altText: 'A pair of brown woven leather flats with a bow on the toe.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/Ry5uxOjSt9D',
      altText: 'A pair of brown woven leather ballet flats.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/ltgqCUWtQBl',
      altText: 'A pair of brown woven leather ballet flats.',
    },
  ],
  href: '#',
  rating: 4.8,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  options: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
}

export default function Preview() {
  return <ProductDetail product={product} />
}
