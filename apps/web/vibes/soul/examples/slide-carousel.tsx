import SlideCarousel from '@/vibes/soul/components/slide-carousel'

const images = [
  'https://rstr.in/monogram/vibes/o_0gBpyrOVe',
  'https://rstr.in/monogram/vibes/CVQwqHQKmz4',
  'https://rstr.in/monogram/vibes/VSkA1mBG78U',
  'https://rstr.in/monogram/vibes/ZHUBk7gO45U',
  'https://rstr.in/monogram/vibes/UWfiHOc2RnP',
]

export default function Preview() {
  return <SlideCarousel title="A global community" images={images} />
}
