import Cart, { CartProduct } from '@/vibes/soul/components/cart'

export const products: CartProduct[] = [
  {
    id: '1',
    name: 'Rolltop Saddlebag',
    subtitle: 'Orange',
    price: '$50',
    image: {
      src: 'https://rstr.in/monogram/vibes/4Mo9ulLGcbL/DfL7Hp4ix9B',
      altText: 'Rolltop Saddlebag',
    },
    href: '#',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Mini Bar Bag',
    subtitle: 'Camo',
    price: '$60',
    image: {
      src: 'https://rstr.in/monogram/vibes/JFeKAqWOECR',
      altText: 'Mini Bar Bag',
    },
    href: '#',
    quantity: 2,
  },
]

export default function Preview() {
  return <Cart products={products} />
}
