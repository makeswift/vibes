import Feature from '@/vibes/soul/components/feature'

const image: Feature['image'] = {
  url: 'https://rstr.in/monogram/vibes/hmVsJqRS2jJ',
  alt: 'Biker in Mountains',
}

const link: Feature['link'] = {
  label: 'Shop Now',
  href: '#',
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

export default function Preview() {
  return (
    <div className="flex flex-col gap-3">
      <Feature
        image={image}
        heading="A global community"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        link={link}
      />
      <Feature image={image} link={link} grid={grid} />
    </div>
  )
}
