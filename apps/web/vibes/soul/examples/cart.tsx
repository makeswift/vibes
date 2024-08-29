import Cart, { CartProduct } from '@/vibes/soul/components/cart'

export const products: CartProduct[] = [
  {
    id: '1',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    price: '$40',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Product Name',
    },
    href: '#',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    price: '$42',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      altText: 'Product Name',
    },
    href: '#',
    quantity: 2,
  },
]

export default function Preview() {
  return <Cart products={products} />
}
