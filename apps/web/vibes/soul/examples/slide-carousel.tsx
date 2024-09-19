import { RotateCcwIcon } from 'lucide-react'
import { SlideCarousel } from '@/vibes/soul/components/slide-carousel'

const content = [
  {
    image: {
      src: 'https://rstr.in/monogram/vibes/NJjKwTB8biw',
      altText: '',
    },
    label: (
      <span className="flex gap-2 text-foreground">
        Free Returns <RotateCcwIcon strokeWidth={1.5} />
      </span>
    ),
  },
  {
    image: {
      src: 'https://rstr.in/monogram/vibes/wbKMgb4hc5x',
      altText: '',
    },
  },
  {
    image: {
      src: 'https://rstr.in/monogram/vibes/6inssBpCQru',
      altText: '',
    },
  },
  {
    image: {
      src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
      altText: '',
    },
  },
  {
    image: {
      src: 'https://rstr.in/monogram/vibes/t-qGwa7OGM2',
      altText: '',
    },
  },
]

export default function Preview() {
  return <SlideCarousel title="A global community" content={content} />
}
