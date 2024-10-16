import { Brand, Product } from '@/vibes/soul/types'

export const getProducts = (brand: Brand): Product[] => {
  return products[brand]
}

interface BrandProductsMap {
  [key: string]: Product[]
}

const products: BrandProductsMap = {
  electric: [
    {
      id: '1',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: {
        type: 'range',
        minValue: '$120',
        maxValue: '$150',
      },
      image: {
        src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
        alt: 'Product Name',
      },
      href: '#',
    },
    {
      id: '2',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: {
        type: 'sale',
        previousValue: '$149.99',
        currentValue: '$129.99',
      },
      image: {
        src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
        alt: 'Product Name',
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
  ],
}
