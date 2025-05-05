import { FeaturedImage, FeaturedImageProps } from '@/vibes/soul/sections/featured-image';

export const featuredImage: FeaturedImageProps = {
  title: 'Thoughtfully Designed',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyZGJiZDNlZS05MjM0LTRjOTItYjgxZC1jZTdlMTlkOWFhZGM=/bike-bag.jpeg',
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
