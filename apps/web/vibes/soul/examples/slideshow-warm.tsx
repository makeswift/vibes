import Slideshow from '@/vibes/soul/components/slideshow'

export const heroSlides = [
  {
    title: 'Customizable',
    description: 'Create your own style',
    image: {
      src: 'https://rstr.in/monogram/vibes/Q5DVr0sKa6I',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Aero Dynamic',
    description: 'Designed for speed and comfort',
    image: {
      src: 'https://rstr.in/monogram/vibes/shMqUI79u99',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Accessible',
    description: 'Easy access to all your gear',
    image: {
      src: 'https://rstr.in/monogram/vibes/Hbzg3JrFIHV',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
]

export default function Preview() {
  return <Slideshow slides={heroSlides} />
}
