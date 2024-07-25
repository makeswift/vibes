import { Route } from 'next'
import Image from 'next/image'

import clsx from 'clsx'

import { Link } from '@/components/navigation/link'
import ArrowUpRight from '@/vibes/soul/components/icons/ArrowUpRight'

type Props = {
  label: string
  image: string
  theme?: 'light' | 'dark'
  ctaLink?: {
    href: string
    target?: '_self' | '_blank'
  }
}

const CategoryCard: React.FC<Props & React.HTMLAttributes<HTMLAnchorElement>> = ({
  label,
  image,
  theme = 'light',
  ctaLink,
  ...props
}) => {
  return (
    <Link
      href={ctaLink?.href as Route}
      target={ctaLink?.target}
      className={clsx(
        'group relative flex h-full min-w-[226px] flex-col gap-2 @md:min-w-[467px]',
        theme === 'light' ? 'text-foreground' : 'text-background'
      )}
      {...props}
    >
      <ArrowUpRight className="absolute right-2.5 top-2.5 z-10 @md:right-5 @md:top-5" />
      <div className="relative overflow-hidden rounded-lg @md:rounded-2xl">
        <Image
          src={image}
          height={600}
          width={467}
          alt="Category card image"
          className="h-[291px] w-[226px] object-cover transition-transform duration-150 ease-linear group-hover:scale-[1.025] @md:h-[600px] @md:w-[467px]"
        />
      </div>
      <span className="text-lg font-medium @md:absolute @md:bottom-5 @md:left-5">{label}</span>
    </Link>
  )
}

export default CategoryCard
