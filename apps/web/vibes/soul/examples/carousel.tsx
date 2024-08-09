import Carousel from '@/vibes/soul/components/carousel'

const images = [
  'https://rstr.in/monogram/vibes/o_0gBpyrOVe',
  'https://rstr.in/monogram/vibes/CVQwqHQKmz4',
  'https://rstr.in/monogram/vibes/VSkA1mBG78U',
  'https://rstr.in/monogram/vibes/ZHUBk7gO45U',
  'https://rstr.in/monogram/vibes/UWfiHOc2RnP',
]

export default function Preview() {
  return <Carousel title="A global community" images={images} />
}
