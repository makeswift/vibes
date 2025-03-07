import { Feature, FeatureProps } from '@/vibes/soul/sections/feature';

export const feature: FeatureProps = {
  image: {
    src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
    alt: 'string',
  },
  title: 'Where Every Ride Meets Perfect Fit.',
  description:
    'Our custom bike bags are designed to seamlessly integrate with your bike, like this perfectly fitted square bag for your front basket. Adventure, style, and functionality—tailored just for you.',
  cta: {
    href: '#',
    label: 'Shop Now',
  },
};

export default function Preview() {
  return (
    <Feature
      cta={feature.cta}
      description={feature.description}
      image={feature.image}
      title={feature.title}
    />
  );
}
