import { cn } from '@/lib/utils'
import { StarEmptyIcon } from '@/vibes/2px/components/icons/StarEmptyIcon'
import { StarFilledIcon } from '@/vibes/2px/components/icons/StarFilledIcon'
import { StarHalfIcon } from '@/vibes/2px/components/icons/StarHalfIcon'

const MAX_RATING = 5
const roundHalf = (num: number) => {
  return Math.round(num * 2) / 2
}

type StarIconType = React.FC<React.ComponentProps<'svg'>>

interface RatingProps {
  className?: string
  starEmptyIcon?: StarIconType
  starFilledIcon?: StarIconType
  starHalfIcon?: StarIconType
  size?: number
  strokeColor?: string
  value: number
}

const Rating = ({
  className,
  starFilledIcon,
  starHalfIcon,
  starEmptyIcon,
  size = 24,
  value,
  strokeColor,
}: RatingProps) => {
  const stars: React.ReactElement[] = []
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
    <div className="flex w-full justify-center @container">
      <span
        className={cn('inline-flex w-fit gap-1.5 text-foreground @lg:gap-2', className)}
        role="img"
      >
        {stars}
      </span>
    </div>
  )
}

Rating.displayName = 'Rating'

export default Rating
