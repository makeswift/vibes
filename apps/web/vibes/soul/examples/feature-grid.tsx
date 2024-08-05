import Feature from '@/vibes/soul/components/feature'

export default function Preview() {
  const image: Feature['image'] = {
    url: 'https://rstr.in/monogram/vibes/ZHUBk7gO45U',
    dimensions: {
      width: 932,
      height: 1200,
    },
    alt: 'Biker in Mountains',
  }

  const link: Feature['link'] = {
    label: 'Shop Now',
    href: '/shop',
    target: '_self',
  }

  const grid: Feature['grid'] = [
    {
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      icon: 'Star',
      title: '2 Year Warranty',
      description: 'As standard',
    },
    {
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $250',
    },
    {
      icon: 'RotateCcw',
      title: 'Free Returns',
      description: 'On full priced items only',
    },
    {
      icon: 'Star',
      title: '2 Year Warranty',
      description: 'As standard',
    },
  ]

  return (
    <div className="flex flex-col gap-2">
      <Feature image={image} link={link} grid={grid} />
    </div>
  )
}