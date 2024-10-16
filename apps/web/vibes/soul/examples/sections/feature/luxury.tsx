import { Feature, FeatureProps } from '@/vibes/soul/sections/feature'

export const feature: FeatureProps = {
  image: {
    src: 'https://rstr.in/monogram/vibes/B7iQGslbxE4',
    alt: 'string',
  },
  title: 'DESIGN-LED + FUNCTION-FORMED',
  description:
    'We set out to create reimagined classics for the non-stop woman. Our unique approach to design is what makes us stand out while the quality and function of our handmade shoes and accessories are what has formed our community of badass women. The combination of both Megan and Cristina’s individual styles is present in every piece. While slightly unconventional, our collections are meant to live in your closet forever.',
  cta: {
    href: '#',
    label: 'Shop Now',
  },
}

const grid: FeatureProps['grid'] = [
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
        image={feature.image}
        title={feature.title}
        description={feature.description}
        cta={feature.cta}
      />
      <Feature image={feature.image} cta={feature.cta} grid={grid} />
    </div>
  )
}
