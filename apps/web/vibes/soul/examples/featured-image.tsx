import FeaturedImage from '@/vibes/soul/components/featured-image'

export default function Preview() {
  return (
    <FeaturedImage
      title="Pro-Team"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          labore et dolore magna aliqua."
      image={{ src: 'https://rstr.in/monogram/vibes/7ayVnws_5R1', altText: 'Pro-Team' }}
      cta={{ href: '#', label: 'Shop Now' }}
    />
  )
}
