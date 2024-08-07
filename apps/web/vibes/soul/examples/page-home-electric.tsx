import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    heading: 'Pro Jerseys',
    image: {
      url: 'https://rstr.in/monogram/vibes/cSJdPlXG9Ug',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
  {
    heading: 'Embrace the Heat',
    image: {
      url: 'https://rstr.in/monogram/vibes/VSkA1mBG78U',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
  {
    heading: 'Embrace the Heat',
    image: {
      url: 'https://rstr.in/monogram/vibes/o_0gBpyrOVe',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
]

export default function Preview() {
  return <HomePage heroSlides={heroSlides} />
}
