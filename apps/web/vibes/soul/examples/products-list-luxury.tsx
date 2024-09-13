import { Product } from '@/vibes/soul/components/product-card'
import { ProductsList } from '@/vibes/soul/components/products-list'

export const products: Product[] = [
  {
    id: '1',
    name: 'DARYA LUG SOLE FISHERMAN',
    subtitle: 'Cuoro Embossed Snake',
    badge: '',
    price: '$325',
    image: {
      src: 'https://rstr.in/monogram/vibes/18bzcr01WWx',
      altText: 'DARYA LUG SOLE FISHERMAN',
    },
    href: '#',
  },
  {
    id: '2',
    name: 'ROMA ROUND TOE BALLET FLAT',
    subtitle: 'Rust Closed Woven Calf',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$369.99',
      currentValue: '$129.99',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
      altText: 'ROMA ROUND TOE BALLET FLAT',
    },
    href: '#',
  },
  {
    id: '3',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/DYeoTIrhxZk',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '4',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'range',
      minValue: '$110',
      maxValue: '$150',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/9HSPQU1tr1p',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '5',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$170',
      currentValue: '$150',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
      altText: 'Product Name',
    },
    href: '#',
  },
  {
    id: '6',
    name: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
      altText: 'Product Name',
    },
    href: '#',
  },
]

export default function Preview() {
  return (
    <div className="py-6">
      <ProductsList products={products} />
    </div>
  )
}
