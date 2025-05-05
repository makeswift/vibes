import { Feature, FeatureProps } from '@/vibes/soul/sections/feature';

export const feature: FeatureProps = {
  image: {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpjY2JiMjhiNS1jYWQwLTQ0M2UtYTNiMC02MzM5ZGZhOTI3ZDY=/people-holding-plants.jpeg',
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
