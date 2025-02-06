import { Feature, FeatureProps } from '@/vibes/soul/sections/feature';

export const feature: FeatureProps = {
  image: {
    src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
    alt: 'string',
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
    href: '#',
    text: 'Shop Now',
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
