import FeaturedImage from '@/vibes/soul/components/featured-image'

export default function Preview() {
  return (
    <FeaturedImage
      title="For Your Home"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
      image={{ src: 'https://rstr.in/monogram/vibes/5RpTEji2npU', altText: 'Plant on stool in cozy room' }}
      cta={{ href: '#', label: 'Shop Now' }}
    />
  )
}
