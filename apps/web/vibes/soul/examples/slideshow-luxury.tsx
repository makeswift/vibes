import Slideshow from '@/vibes/soul/components/slideshow'

export const heroSlides = [
  {
    title: '',
    description: 'who is Freda?',
    image: {
      src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT/jhF8-98zfEq',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: '',
    image: {
      src: 'https://rstr.in/monogram/vibes/8zU5OY9zRhv/nAXoYnVFDdU',
      altText: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: '',
    image: {
      src: 'https://rstr.in/monogram/vibes/Cjfge1f4__e',
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
