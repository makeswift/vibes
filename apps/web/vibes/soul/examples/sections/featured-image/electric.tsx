import { FeaturedImage, FeaturedImageProps } from '@/vibes/soul/components/featured-image'

export const featuredImage: FeaturedImageProps = {
  title: 'Grow With Confidence',
  description:
    'Whether you’re a seasoned plant parent or just starting, we have the perfect plants to suit your home and lifestyle.',
  image: {
    src: 'https://rstr.in/monogram/vibes/J7ckF24ZWrQ',
    alt: 'Close up of a plant',
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
