import SlideshowSection from '../components/slideshow-section'
import img1 from './assets/slideshow/1.jpeg'
import img2 from './assets/slideshow/2.jpeg'
import img3 from './assets/slideshow/3.jpeg'
import img4 from './assets/slideshow/4.jpeg'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-5 bg-background sm:min-h-64 lg:min-h-80">
      <SlideshowSection
        slides={[
          {
            title: 'Summer 2024 lookbook',
            image: { src: img1.src, altText: 'Image 1' },
            cta: { href: '/shop', label: 'Shop now' },
            description: 'Summer 2022 we moved into Reform´s big bright showroom in Copenhagen.',
          },
          {
            title: 'Summer 2024 lookbook 2',
            image: { src: img2.src, altText: 'Image 2' },
            cta: { href: '/shop', label: 'Shop now' },
            description: 'Summer 2022 we moved into Reform´s big bright showroom in Copenhagen.',
          },
          {
            title: 'Summer 2024 lookbook 3',
            image: { src: img3.src, altText: 'Image 3' },
            cta: { href: '/shop', label: 'Shop now' },
            description: 'Summer 2022 we moved into Reform´s big bright showroom in Copenhagen.',
          },
          {
            title: 'Summer 2024 lookbook 4',
            image: { src: img4.src, altText: 'Image 4' },
            cta: { href: '/shop', label: 'Shop now' },
            description: 'Summer 2022 we moved into Reform´s big bright showroom in Copenhagen.',
          },
        ]}
      />
    </div>
  )
}
