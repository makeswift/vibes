import HomePage from '@/vibes/soul/components/page-home'

export const heroSlides = [
  {
    heading: 'New Casuals',
    image: {
      url: 'https://rstr.in/monogram/vibes/Nz2yR4EZgvo',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
  {
    heading: 'Slide 2',
    image: {
      url: 'https://rstr.in/monogram/vibes/gWgyEhm5W60',
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
