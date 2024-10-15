import { FeaturedImage, FeaturedImageProps } from '@/vibes/soul/components/featured-image'

export const featuredImage: FeaturedImageProps = {
  title: 'Loved by Women Everywhere',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
  image: {
    src: 'https://rstr.in/monogram/vibes/aSXn7ntI2oM',
    alt: 'Freda woman loving her shoes',
  },
  cta: { href: '#', label: 'Shop Now' },
}

export default function Preview() {
  return (
    <div className="flex flex-col gap-3">
      <FeaturedImage
        title={featuredImage.title}
        description={featuredImage.description}
        image={{
          src: featuredImage.image.src,
          alt: featuredImage.image.alt,
        }}
        cta={{ href: featuredImage.cta.href, label: featuredImage.cta.label }}
        mediaAlign="left"
      />
      <FeaturedImage
        title={featuredImage.title}
        description={featuredImage.description}
        image={{
          src: featuredImage.image.src,
          alt: featuredImage.image.alt,
        }}
        cta={{ href: featuredImage.cta.href, label: featuredImage.cta.label }}
        mediaAlign="right"
      />
      <FeaturedImage
        title={featuredImage.title}
        description={featuredImage.description}
        image={{
          src: featuredImage.image.src,
          alt: featuredImage.image.alt,
        }}
        cta={{ href: featuredImage.cta.href, label: featuredImage.cta.label }}
        mediaAlign="full"
      />
    </div>
  )
}
