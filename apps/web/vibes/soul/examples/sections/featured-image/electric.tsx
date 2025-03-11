import { FeaturedImage, FeaturedImageProps } from '@/vibes/soul/sections/featured-image';

export const featuredImage: FeaturedImageProps = {
  title: 'Grow With Confidence',
  description:
    'Whether you’re a seasoned plant parent or just starting, we have the perfect plants to suit your home and lifestyle.',
  image: {
    src: 'https://rstr.in/monogram/vibes/J7ckF24ZWrQ',
    alt: 'Close up of a plant',
  },
  cta: { href: '#', label: 'Shop Now' },
};

export default function Preview() {
  return (
    <div className="flex flex-col gap-3">
      <FeaturedImage
        cta={featuredImage.cta}
        description={featuredImage.description}
        image={featuredImage.image}
        mediaAlign="left"
        title={featuredImage.title}
      />
      <FeaturedImage
        cta={featuredImage.cta}
        description={featuredImage.description}
        image={featuredImage.image}
        mediaAlign="right"
        title={featuredImage.title}
      />
      <FeaturedImage
        cta={featuredImage.cta}
        description={featuredImage.description}
        image={featuredImage.image}
        mediaAlign="full"
        title={featuredImage.title}
      />
    </div>
  );
}
