import SlideshowSection from '../components/slideshow-section'
import img1 from './assets/slideshow/1.jpeg'
import img2 from './assets/slideshow/2.jpeg'
import img3 from './assets/slideshow/3.jpeg'
import img4 from './assets/slideshow/4.jpeg'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-5 bg-background sm:min-h-64 lg:min-h-80">
      <SlideshowSection
        images={[
          { src: img1.src, alt: 'Image 1', width: img1.width, height: img1.height },
          { src: img3.src, alt: 'Image 3', width: img3.width, height: img3.height },
          { src: img4.src, alt: 'Image 4', width: img4.width, height: img4.height },
          { src: img2.src, alt: 'Image 2', width: img2.width, height: img2.height },
        ]}
        title="Summer 2024 lookbook"
        description="Summer 2022 we moved into Reform´s big bright showroom in Copenhagen."
      />
    </div>
  )
}
