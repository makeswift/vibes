import { FeatureGrid, FeatureGridProps } from '@/vibes/soul/sections/feature-grid';

export default function Preview() {
  return <FeatureGrid cta={feature.cta} grid={feature.grid} image={feature.image} />;
}

const feature: FeatureGridProps = {
  image: {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpjY2JiMjhiNS1jYWQwLTQ0M2UtYTNiMC02MzM5ZGZhOTI3ZDY=/people-holding-plants.jpeg',
    alt: 'Close up of a plant',
  },
  cta: {
    href: '#',
    label: 'Shop Now',
  },
  grid: [
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
  ],
};
