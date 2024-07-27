'use client'

import clsx from 'clsx'

import { useBrandContext } from '@/components/preview/brand-context'
import { Button } from '@/vibes/soul/components/button'
import getBrandShade from '@/vibes/soul/getBrandShade'

type Props = {
  heading: string
  description: string
  video: string
  link: {
    href: string
    target: '_self' | '_blank'
  }
  mediaAlign?: 'left' | 'right'
}

export const HeroCategory = function HeroCategory({
  heading,
  description,
  video,
  link,
  mediaAlign,
}: Props) {
  const { activeBrand } = useBrandContext()

  return (
    <section className="relative h-[100dvh] max-h-[880px] @container">
      <div className="flex h-full flex-col @3xl:flex-row">
        <video
          className={clsx(
            'h-full object-cover',
            mediaAlign ? '@3xl:w-1/2 @5xl:w-3/5' : 'absolute inset-0',
            { '@3xl:order-2': mediaAlign === 'right' }
          )}
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
        <div
          style={{ background: mediaAlign ? getBrandShade(activeBrand?.name, 900) : '' }}
          className={clsx(
            'z-10 mx-auto flex max-w-7xl flex-col items-start gap-4 px-3 py-10 text-background @5xl:p-20',
            mediaAlign
              ? 'w-full justify-end @md:px-6 @3xl:w-1/2 @5xl:w-2/5'
              : 'absolute bottom-0 left-0 @3xl:px-6',
            { '@3xl:order-1': mediaAlign === 'right' }
          )}
        >
          <h1 className="text-[40px] font-medium">{heading}</h1>
          <p className="max-w-xl pb-2">{description}</p>
          <Button
            variant={mediaAlign ? 'primary' : 'tertiary'}
            link={{ href: link.href, target: link.target }}
            className={clsx(mediaAlign ? 'text-foreground' : 'text-background')}
          >
            Show Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroCategory
