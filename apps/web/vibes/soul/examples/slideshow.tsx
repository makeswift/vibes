import Slideshow from '@/vibes/soul/components/slideshow'

export const heroSlides = [
  {
    title: 'Slide 1',
    description: 'Description',
    image: {
      src: 'https://rstr.in/monogram/vibes/vgdjHDINE6V',
      altText: 'alt',
    },
    cta: {
      label: 'Button',
      href: '/',
    },
  },
  {
    title: 'Slide 2',
    description: 'Description',
    image: {
      src: 'https://rstr.in/monogram/vibes/YOD5DuBfoFM',
      altText: 'alt',
    },
    cta: {
      label: 'Button',
      href: '/',
    },
  },
  {
    title: 'Slide 3',
    description: 'Description',
    image: {
      src: 'https://rstr.in/monogram/vibes/6GmqnHGoquY',
      altText: 'alt',
    },
    cta: {
      label: 'Button',
      href: '/',
    },
  },
]

export default function Preview() {
  return <Slideshow slides={heroSlides} />
}
