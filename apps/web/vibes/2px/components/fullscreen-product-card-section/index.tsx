import Image from 'next/image'

import { cn } from '@/lib/utils'
import Button from '@/vibes/2px/components/button'
import Counter from '@/vibes/2px/components/counter'

interface Props {
  className?: string
  image: {
    url: string
    alt: string
  }
  name: string
  price: string
  cartCta: {
    label: string
    onClick: () => void
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
  return (
    <section className={cn('relative w-full bg-background text-sm text-foreground', className)}>
      <div className="flex h-full w-full justify-center overflow-hidden ">
        <Image
          src={image.url}
          alt={image.alt}
          className="max-h-[100vh] min-h-max w-auto max-w-none"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex w-full flex-col gap-2 p-4 text-background @lg:flex-row @lg:items-center @lg:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-mono uppercase leading-snug tracking-[0.0225rem]">{name}</span>
          <span className="-mt-[0.2rem] font-bold leading-6 ">{price}</span>
        </div>
        <div className="flex min-w-[18.6rem] items-center justify-between @container @lg:justify-normal @lg:gap-4">
          <Counter
            size="md"
            className={cn('w-full max-w-[50vw]', {
              'text-background': detailsColor === 'light',
              'text-foreground': detailsColor === 'dark',
            })}
            min={0}
          />
          <Button
            className={cn('w-full px-5 py-2.5 text-inherit', {
              'bg-foreground text-background': detailsColor === 'dark',
              'bg-background text-foreground': detailsColor === 'light',
            })}
            onClick={cartCta.onClick}
          >
            {cartCta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
