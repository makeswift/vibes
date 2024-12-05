import { Feature, FeatureProps } from '@/vibes/soul/sections/feature';

export const feature: FeatureProps = {
  image: {
    src: 'https://rstr.in/monogram/vibes/hmVsJqRS2jJ',
    alt: 'Close up of a plant',
  },
  title: 'Thoughtfully Curated',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  cta: {
    href: '#',
    label: 'Shop Now',
  },
};

const grid: FeatureProps['grid'] = [
  {
    icon: 'truck',
    title: 'Free Shipping',
    description: 'On orders over $250',
  },
  {
    icon: 'rotate-ccw',
    title: 'Free Returns',
    description: 'On full priced items only',
  },
  {
    icon: 'star',
    title: '2 Year Warranty',
    description: 'As standard',
  },
  {
    icon: 'truck',
    title: 'Free Shipping',
    description: 'On orders over $250',
  },
  {
    icon: 'rotate-ccw',
    title: 'Free Returns',
    description: 'On full priced items only',
  },
  {
    icon: 'star',
    title: '2 Year Warranty',
    description: 'As standard',
  },
];

export default function Preview() {
  return (
    <div className="flex flex-col gap-3">
      <Feature
        cta={feature.cta}
        description={feature.description}
        image={feature.image}
        title={feature.title}
      />
      <Feature cta={feature.cta} grid={grid} image={feature.image} />
    </div>
  );
}
