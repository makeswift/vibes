'use client'

import Image from 'next/image'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import Button from '@/vibes/2px/components/button'
import Counter from '@/vibes/2px/components/counter'

interface Props {
  className?: string
  image: {
    url: string
    alt: string
    width: number
    height: number
  }
  name: string
  price: string
  cartCta: {
    label: string
    onClick: (count: number) => void
  }
  /** If light, will set the other components in section to background color
   *  If dark, will set the other components in section to foreground color
   */
  detailsColor?: 'dark' | 'light'
}

export default function FullscreenProductCardSection({
  className,
  image,
  name,
  price,
  cartCta,
  detailsColor = 'light',
}: Props) {
  const [count, setCount] = useState(1)

  return (
    <section
      className={cn(
        'relative aspect-[3/4] w-full bg-background text-sm text-foreground @2xl:aspect-auto',
        className
      )}
    >
      <Image
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-full max-h-screen w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 flex w-full flex-col gap-2 p-4 text-background @lg:flex-row @lg:items-center @lg:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-mono uppercase leading-snug tracking-[0.0225rem]">{name}</span>
          <span className="-mt-1 font-bold leading-6 ">{price}</span>
        </div>
        <div className="flex min-w-72 items-center justify-between @container @lg:justify-normal @lg:gap-4">
          <Counter
            size="md"
            className={cn('w-full max-w-[50vw]', {
              'text-background': detailsColor === 'light',
              'text-foreground': detailsColor === 'dark',
            })}
            min={1}
            onChange={setCount}
            value={count}
          />
          <Button
            className={cn('w-full px-5 py-2.5 text-inherit', {
              'bg-foreground text-background': detailsColor === 'dark',
              'bg-background text-foreground': detailsColor === 'light',
            })}
            onClick={() => cartCta.onClick(count)}
          >
            {cartCta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
