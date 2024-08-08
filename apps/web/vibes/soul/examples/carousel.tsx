import Carousel from '@/vibes/soul/components/carousel'

const images = [
  'https://rstr.in/monogram/vibes/nBQFO6MyZ34',
  'https://rstr.in/monogram/vibes/11zZTfNCpui',
  'https://rstr.in/monogram/vibes/h4YqOhXhxfm',
  'https://rstr.in/monogram/vibes/GQxaw-DlEYn',
  'https://rstr.in/monogram/vibes/WOTVa86be5S',
]

export default function Preview() {
  return <Carousel title="A global community" images={images} />
}
