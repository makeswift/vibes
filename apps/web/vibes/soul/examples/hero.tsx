import Hero from '@/vibes/soul/components/hero'

export default function Preview() {
  const images = [
    {
      url: 'https://rstr.in/monogram/vibes/vgdjHDINE6V',
      dimensions: {
        width: 3200,
        height: 1840,
      },
      alt: 'alt',
    },
    {
      url: 'https://rstr.in/monogram/vibes/YOD5DuBfoFM',
      dimensions: {
        width: 701,
        height: 900,
      },
      alt: 'alt',
    },
    {
      url: 'https://rstr.in/monogram/vibes/6GmqnHGoquY',
      dimensions: {
        width: 1600,
        height: 880,
      },
      alt: 'alt',
    },
  ]

  return (
    <>
      <Hero heading="Pro Jerseys" images={images} />
      <Hero heading="Pro Jerseys" images={images} containedMediaLayout />
    </>
  )
}
