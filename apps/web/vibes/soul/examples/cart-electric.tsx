import Cart, { CartProduct } from '@/vibes/soul/components/cart'

export const products: CartProduct[] = [
  {
    id: '1',
    name: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    price: '$46',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      altText: 'Philodendron Imperial Red',
    },
    href: '#',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Caladium',
    subtitle: 'Indoor / Outdoor Plant',
    price: '$24',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      altText: 'Caladium',
    },
    href: '#',
    quantity: 2,
  },
]

export default function Preview() {
  return <Cart products={products} />
}
