import { FilterRatingOption } from './filter-rating-option'

interface Props {
  name: string
  min?: number
  max?: number
  minLabel?: string
  maxLabel?: string
}

export function FilterRating({ name }: Props) {
  return (
    <div className="space-y-3">
      {[5, 4, 3, 2, 1].map(rating => (
        <FilterRatingOption key={rating} value={rating} name={name} />
      ))}
    </div>
  )
}
