import { Feature, FeatureProps } from '@/vibes/soul/sections/feature';

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
