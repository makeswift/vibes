import { ComponentPropsWithoutRef, ElementRef, FC, ReactElement, forwardRef } from 'react'

import { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import { StarEmptyIcon, StarFilledIcon, StarHalfIcon } from '../icons'

const MAX_RATING = 5
const roundHalf = (num: number) => {
  return Math.round(num * 2) / 2
}

type StarIconType = FC<ComponentPropsWithoutRef<'svg'>> | LucideIcon

interface RatingProps {
  className?: string
  starEmptyIcon?: StarIconType
  starFilledIcon?: StarIconType
  starHalfIcon?: StarIconType
  size?: number
  strokeColor?: string
  value: number
}

const Rating = forwardRef<ElementRef<'img'>, RatingProps>(
  (
    { className, starFilledIcon, starHalfIcon, starEmptyIcon, size = 24, value, strokeColor },
    ref
  ) => {
    const stars: ReactElement[] = []
    const rating = roundHalf(value)

    const StarHalf = starHalfIcon || StarHalfIcon
    const StarEmpty = starEmptyIcon || StarEmptyIcon
    const StarFilled = starFilledIcon || StarFilledIcon

    for (let i = 1; i <= MAX_RATING; i += 1) {
      if (rating - i >= 0) {
        stars.push(<StarFilled height={size} key={i} width={size} stroke={strokeColor} />)
      } else if (rating - i > -1) {
        stars.push(<StarHalf height={size} key={i} width={size} stroke={strokeColor} />)
      } else {
        stars.push(<StarEmpty height={size} key={i} width={size} stroke={strokeColor} />)
      }
    }

    return (
      <span className={cn('inline-flex gap-2', className)} ref={ref} role="img">
        {stars}
      </span>
    )
  }
)

Rating.displayName = 'Rating'

export default Rating
