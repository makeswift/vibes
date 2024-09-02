import SlideCarousel from '@/vibes/soul/components/slide-carousel'

const images = [
  'https://rstr.in/monogram/vibes/SHdMkzJlFss',
  'https://rstr.in/monogram/vibes/80LuKK05rRc',
  'https://rstr.in/monogram/vibes/6k9POdL_tHY',
  'https://rstr.in/monogram/vibes/f67ox8U5iO2',
  'https://rstr.in/monogram/vibes/GHcJfdd7x0c',
  'https://rstr.in/monogram/vibes/Gh--ZkS7bnX',
]

export default function Preview() {
  return <SlideCarousel title="A global community" images={images} />
}
