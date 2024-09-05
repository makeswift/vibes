import { Cart, CartProduct } from '@/vibes/soul/components/cart'

export const products: CartProduct[] = [
  {
    id: '1',
    name: 'DARYA LUG SOLE FISHERMAN',
    subtitle: 'Cuoro Embossed Snake',
    price: '$40',
    image: {
      src: 'https://rstr.in/monogram/vibes/18bzcr01WWx',
      altText: 'DARYA LUG SOLE FISHERMAN',
    },
    href: '#',
    quantity: 1,
  },
  {
    id: '2',
    name: 'ROMA ROUND TOE BALLET FLAT',
    subtitle: 'Rust Closed Woven Calf',
    price: '$42',
    image: {
      src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
      altText: 'ROMA ROUND TOE BALLET FLAT',
    },
    href: '#',
    quantity: 2,
  },
]

export default function Preview() {
  return <Cart products={products} />
}
