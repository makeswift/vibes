import { ProductDetail } from '@/vibes/soul/components/product-detail'

export const product = {
  id: '1',
  name: 'ELBA PENNY LOAFER',
  price: '$19.95',
  image: {
    src: 'https://rstr.in/monogram/vibes/JCwYbAk9Nhi',
    altText:
      'A woman wearing a white crocheted cardigan with green trim and orange flowers, green pants, and brown suede loafers.',
  },
  images: [
    {
      id: '1',
      src: 'https://rstr.in/monogram/vibes/JCwYbAk9Nhi',
      altText:
        'A woman wearing a white crocheted cardigan with green trim and orange flowers, green pants, and brown suede loafers.',
    },
    {
      id: '2',
      src: 'https://rstr.in/monogram/vibes/Qrk6pJMoWwZ',
      altText: 'A brown suede loafer with a leather sole.',
    },
    {
      id: '3',
      src: 'https://rstr.in/monogram/vibes/ozMaktUeiPy',
      altText: 'A pair of brown suede loafers with a leather sole.',
    },
    {
      id: '4',
      src: 'https://rstr.in/monogram/vibes/Pk6sizxQWc5',
      altText: 'A pair of brown suede loafers with a leather sole.',
    },
    {
      id: '5',
      src: 'https://rstr.in/monogram/vibes/cLe51lBiEUD',
      altText: 'A brown suede loafer with a leather sole.',
    },
  ],
  href: '#',
  rating: 4.8,
  description:
    'Our modern take on a classic penny loafer. Handcrafted in a cumin suede, the ELBA updates the timeless style with our signature notched welt and angled leather heel. We’ll live in these loafers with everything from oversized suits, to cuffed jeans and socks to long skirts.',
  options: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
}

export default function Preview() {
  return <ProductDetail product={product} />
}
