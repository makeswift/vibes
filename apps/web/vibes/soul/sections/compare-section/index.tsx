import { CompareCard } from '../../primitives/compare-card'

const product = {
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
}

type Props = {}

export function CompareSection({}) {
  return <CompareCard product={product} />
}
