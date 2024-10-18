import { Brand, ProductCardProduct } from '@/vibes/soul/types'

export function getProducts(brand: Brand): ProductCardProduct[] {
  return products[brand]
}

const products = {
  Electric: [
    {
      id: '1',
      title: 'Philodendron Imperial Red',
      subtitle: 'Indoor Plant',
      // badge: 'Indestructible',
      price: '$44.95',
      image: {
        src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
        alt: 'Philodendron Imperial Red',
      },
      href: '#',
    },
    {
      id: '2',
      title: 'Monstera',
      subtitle: 'Indoor Plant',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
        alt: 'Monstera',
      },
      href: '#',
    },
    {
      id: '3',
      title: 'Pink Caladium',
      subtitle: 'Indoor Plant',
      // badge: 'New',
      price: '$19.95',
      image: {
        src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
        alt: 'Pink Caladium',
      },
      href: '#',
    },
    {
      id: '4',
      title: 'Hoya Kerrii',
      subtitle: 'Indoor Plant',
      // badge: 'New',
      price: '$16.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
        alt: 'Hoya Kerrii',
      },
      href: '#',
    },
    {
      id: '5',
      title: 'Bird Nest Fern',
      subtitle: 'Indoor Plant',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/gfGRQi5pHeJ',
        alt: 'Bird Nest Fern',
      },
      href: '#',
    },
    {
      id: '6',
      title: 'Jade Plant',
      subtitle: 'Indoor Plant',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
        alt: 'Jade Plant',
      },
      href: '#',
    },
  ],
  Luxury: [
    {
      id: '1',
      title: 'Jada Square Toe Ballet Flat',
      subtitle: '',
      badge: 'Bestseller',
      price: '$350',
      image: {
        src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
        alt: 'Jada Square Toe Ballet Flat',
      },
      href: '#',
    },
    {
      id: '2',
      title: 'Jayla Woven Ballet Heel',
      subtitle: '',
      badge: 'Bestseller',
      price: '$395',
      image: {
        src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT',
        alt: 'Jayla Woven Ballet Heel',
      },
      href: '#',
    },
    {
      id: '3',
      title: 'Jessie Ballet Flat',
      subtitle: '',
      badge: 'Bestseller',
      price: '$450',
      image: {
        src: 'https://rstr.in/monogram/vibes/1ipihAyvRQj',
        alt: 'Jessie Ballet Flat',
      },
      href: '#',
    },
    {
      id: '4',
      title: 'Leighton Soft Leather Loafer',
      subtitle: '',
      badge: 'Almost Gone',
      price: '$350',
      image: {
        src: 'https://rstr.in/monogram/vibes/YfQW8M1Gv2H/zTWKcqJrdIu',
        alt: 'Leighton Soft Leather Loafer',
      },
      href: '#',
    },
    {
      id: '5',
      title: 'JADA SQUARE TOE BALLET FLAT',
      subtitle: '',
      badge: 'Bestseller',
      price: '$350',
      image: {
        src: 'https://rstr.in/monogram/vibes/5QBR05kyrYo',
        alt: 'JADA SQUARE TOE BALLET FLAT',
      },
      href: '#',
    },
    {
      id: '6',
      title: 'DARYA LUG SOLE FISHERMAN',
      subtitle: '',
      badge: 'Almost Gone',
      price: '$290',
      image: {
        src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz/vfCehRZDBGk',
        alt: 'DARYA LUG SOLE FISHERMAN',
      },
      href: '#',
    },
  ],
  Warm: [
    {
      id: '1',
      title: 'Mini Bar Bag',
      subtitle: 'Blue/Black/Green',
      // badge: 'Indestructible',
      price: '$65',
      image: {
        src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
        alt: 'Mini Bar Bag',
      },
      href: '#',
    },
    {
      id: '2',
      title: 'Mini Bar Bag',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$65',
      image: {
        src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
        alt: 'Mini Bar Bag',
      },
      href: '#',
    },
    {
      id: '3',
      title: 'Stem Caddy',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$60',
      image: {
        src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
        alt: 'Stem Caddy',
      },
      href: '#',
    },
    {
      id: '4',
      title: 'Hip Slinger',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$105',
      image: {
        src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
        alt: 'Hip Slinger',
      },
      href: '#',
    },
    {
      id: '5',
      title: 'Everyday Tote',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$185',
      image: {
        src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
        alt: 'Everyday Tote',
      },
      href: '#',
    },
    {
      id: '6',
      title: 'Mini Saddlebag',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$45',
      image: {
        src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
        alt: 'Mini Saddlebag',
      },
      href: '#',
    },
  ],
} as const satisfies Record<Brand, [ProductCardProduct, ...ProductCardProduct[]]>
