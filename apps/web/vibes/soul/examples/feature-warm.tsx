import { Feature, FeatureProps } from '@/vibes/soul/components/feature'

export const feature: FeatureProps = {
  image: {
    src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
    altText: 'string',
  },
  title: 'Where Every Ride Meets Perfect Fit.',
  description:
    'Our custom bike bags are designed to seamlessly integrate with your bike, like this perfectly fitted square bag for your front basket. Adventure, style, and functionality—tailored just for you.',
  // grid: {
  //   icon: 'string',
  //   title: 'string',
  //   description: 'string',
  // },
  cta: {
    href: 'string',
    label: 'string',
  },
}

const grid: FeatureProps['grid'] = [
  {
    id: '1',
    icon: 'Truck',
    title: 'Free Shipping',
    description: 'On orders over $250',
  },
  {
    id: '2',
    icon: 'RotateCcw',
    title: 'Free Returns',
    description: 'On full priced items only',
  },
  {
    id: '3',
    icon: 'Star',
    title: '2 Year Warranty',
    description: 'As standard',
  },
  {
    id: '4',
    icon: 'Truck',
    title: 'Free Shipping',
    description: 'On orders over $250',
  },
  {
    id: '5',
    icon: 'RotateCcw',
    title: 'Free Returns',
    description: 'On full priced items only',
  },
  {
    id: '6',
    icon: 'Star',
    title: '2 Year Warranty',
    description: 'As standard',
  },
]

export default function Preview() {
  return (
    <div className="flex flex-col gap-3">
      <Feature
        image={feature.image}
        title={feature.title}
        description={feature.description}
        cta={feature.cta}
      />
      <Feature image={feature.image} cta={feature.cta} grid={grid} />
    </div>
  )
}
