import Slideshow from '@/vibes/soul/components/slideshow'

export const heroSlides = [
  {
    title: 'The Gift of Giving',
    description:
      'Celebrate life’s moments by gifting a symbol of care and nurturing, bringing a touch of greenery into the lives of those you cherish.',
    image: {
      src: 'https://rstr.in/monogram/vibes/fzVuE9iZ4mI',
      altText: 'alt',
    },
    cta: {
      label: 'Shop Now',
      href: '#',
    },
  },
  {
    title: 'The Gift of Giving',
    description:
      'Celebrate life’s moments by gifting a symbol of care and nurturing, bringing a touch of greenery into the lives of those you cherish.',
    image: {
      src: 'https://rstr.in/monogram/vibes/Ip8DYxJT8_b',
      altText: 'alt',
    },
    cta: {
      label: 'Shop Now',
      href: '#',
    },
  },
  {
    title: 'The Gift of Giving',
    description:
      'Celebrate life’s moments by gifting a symbol of care and nurturing, bringing a touch of greenery into the lives of those you cherish.',
    image: {
      src: 'https://rstr.in/monogram/vibes/Ip8DYxJT8_b',
      altText: 'alt',
    },
    cta: {
      label: 'Shop Now',
      href: '#',
    },
  },
]

export default function Preview() {
  return <Slideshow slides={heroSlides} />
}
