import { copyright, footerLinks } from '@/vibes/soul/examples/sections/footer/luxury'
import { headerLinks } from '@/vibes/soul/examples/sections/header/luxury'
import { NotFoundPage } from '@/vibes/soul/pages/not-found'
import { ProductCardProduct } from '@/vibes/soul/types'

// Products
export const products: ProductCardProduct[] = [
  {
    id: '1',
    title: 'DARYA LUG SOLE FISHERMAN',
    subtitle: 'Cuoro Embossed Snake',
    badge: '',
    price: '$325',
    image: {
      src: 'https://rstr.in/monogram/vibes/18bzcr01WWx',
      alt: 'DARYA LUG SOLE FISHERMAN',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'ROMA ROUND TOE BALLET FLAT',
    subtitle: 'Rust Closed Woven Calf',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$369.99',
      currentValue: '$129.99',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
      alt: 'ROMA ROUND TOE BALLET FLAT',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/DYeoTIrhxZk',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'range',
      minValue: '$110',
      maxValue: '$150',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/9HSPQU1tr1p',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '5',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$170',
      currentValue: '$150',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '6',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
      alt: 'Product Name',
    },
    href: '#',
  },
]

export default function Preview() {
  return (
    <NotFoundPage
      products={products}
      headerLinks={headerLinks}
      logo="SOUL"
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
