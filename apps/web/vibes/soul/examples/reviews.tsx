import { Reviews } from '@/vibes/soul/components/reviews'

export const reviews = [
  {
    id: '1',
    review:
      "Warm and comfortable! I usually train in temperatures between 5-15ºC and this jersey it's perfect combined with a thermal base layer tee and a vest",
    rating: 5,
    name: 'Victor',
    date: 'August 13, 2024',
  },
  {
    id: '2',
    review:
      "Warm and comfortable! I usually train in temperatures between 5-15ºC and this jersey it's perfect combined with a thermal base layer tee and a vest",
    rating: 5,
    name: 'Victor',
    date: 'August 13, 2024',
  },
  {
    id: '3',
    review:
      "Warm and comfortable! I usually train in temperatures between 5-15ºC and this jersey it's perfect combined with a thermal base layer tee and a vest",
    rating: 5,
    name: 'Victor',
    date: 'August 13, 2024',
  },
  {
    id: '4',
    review:
      "Warm and comfortable! I usually train in temperatures between 5-15ºC and this jersey it's perfect combined with a thermal base layer tee and a vest",
    rating: 5,
    name: 'Victor',
    date: 'August 13, 2024',
  },
  {
    id: '5',
    review:
      "Warm and comfortable! I usually train in temperatures between 5-15ºC and this jersey it's perfect combined with a thermal base layer tee and a vest",
    rating: 5,
    name: 'Victor',
    date: 'August 13, 2024',
  },
]

export default function Preview() {
  return <Reviews reviews={reviews} averageRating={4.5} />
}
