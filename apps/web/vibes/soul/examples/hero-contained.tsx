import Hero from '@/vibes/soul/components/hero'

export default function Preview() {
  const slides = [
    {
      image: {
        url: 'https://rstr.in/monogram/vibes/vgdjHDINE6V',
        dimensions: {
          width: 3200,
          height: 1840,
        },
        alt: 'alt',
      },
      link: {
        href: '/',
        target: '_self',
      },
    },
    {
      image: {
        url: 'https://rstr.in/monogram/vibes/YOD5DuBfoFM',
        dimensions: {
          width: 701,
          height: 900,
        },
        alt: 'alt',
      },
      link: {
        href: '/',
        target: '_self',
      },
    },
    {
      image: {
        url: 'https://rstr.in/monogram/vibes/6GmqnHGoquY',
        dimensions: {
          width: 1600,
          height: 880,
        },
        alt: 'alt',
      },
      link: {
        href: '/',
        target: '_self',
      },
    },
  ]

  return (
    <div className="min-h-48">
      <Hero heading="Pro Jerseys" slides={slides} containedMediaLayout />
    </div>
  )
}
