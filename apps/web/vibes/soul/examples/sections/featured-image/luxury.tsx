import { FeaturedImage, FeaturedImageProps } from '@/vibes/soul/sections/featured-image';

export const featuredImage: FeaturedImageProps = {
  title: 'Loved by Women Everywhere',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/aSXn7ntI2oM',
    alt: 'Freda woman loving her shoes',
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
