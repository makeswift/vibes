import FeaturedImage from '@/vibes/soul/components/featured-image'

export default function Preview() {
  return (
    <div className="flex flex-col gap-3">
      <FeaturedImage
        title="For Your Home"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            labore et dolore magna aliqua."
        image={{
          src: 'https://rstr.in/monogram/vibes/1b_-0-TfcU9',
          altText: 'Plant on stool in cozy room',
        }}
        cta={{ href: '#', label: 'Shop Now' }}
        mediaAlign="full"
      />
      <FeaturedImage
        title="For Your Home"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            labore et dolore magna aliqua."
        image={{
          src: 'https://rstr.in/monogram/vibes/1b_-0-TfcU9',
          altText: 'Plant on stool in cozy room',
        }}
        cta={{ href: '#', label: 'Shop Now' }}
        mediaAlign="left"
      />
      <FeaturedImage
        title="For Your Home"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            labore et dolore magna aliqua."
        image={{
          src: 'https://rstr.in/monogram/vibes/1b_-0-TfcU9',
          altText: 'Plant on stool in cozy room',
        }}
        cta={{ href: '#', label: 'Shop Now' }}
        mediaAlign="right"
      />
    </div>
  )
}
