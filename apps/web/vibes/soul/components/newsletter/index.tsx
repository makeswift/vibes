'use client'

import Image from 'next/image'

import clsx from 'clsx'

import { useBrandContext } from '@/components/preview/brand-context'
import config from '@/tailwind.config'
import Input from '@/vibes/soul/components/input'
import getBrandShade from '@/vibes/soul/getBrandShade'

type Props = {
  image?: {
    url: string
    dimensions: {
      width: number
      height: number
    }
    alt: string
  }
  heading: string
  description: string
  theme?: 'light' | 'dark' | 'brand'
}

export const Newsletter = function Newsletter({ image, heading, description, theme }: Props) {
  const { activeBrand } = useBrandContext()

  const getBackground = (theme: Props['theme']) => {
    switch (theme) {
      case 'dark':
        return getBrandShade(activeBrand?.name, 900)
      case 'light':
        return config.theme.extend.colors.contrast[100]
      case 'brand':
        return config.theme.extend.colors.background
      default:
        return config.theme.extend.colors.contrast[100]
    }
  }

  return (
    <section
      className="@container"
      style={{
        background: getBackground(theme),
      }}
    >
      <div className="flex flex-col items-center @2xl:flex-row">
        {image && (
          <div className="relative aspect-square h-full w-full overflow-hidden @2xl:aspect-[9/12] @2xl:w-3/4 @4xl:aspect-square">
            <Image src={image.url} alt={image.alt} fill className="object-cover" />
          </div>
        )}

        <div
          className={clsx(
            'flex w-full items-center gap-y-12 px-3 @xl:px-20',
            !image ? 'flex-col gap-x-10 py-20 @2xl:flex-row' : 'flex-col py-10 @3xl:gap-y-16',
            theme == 'dark' ? 'text-background' : 'text-foreground'
          )}
        >
          <div className="w-full">
            <h2 className="mb-2 text-4xl font-medium leading-none @7xl:text-5xl">{heading}</h2>
            <p className="text-[15px] opacity-50">{description}</p>
          </div>
          <form className="w-full">
            <Input
              variant={theme == 'brand' ? 'brand' : 'large'}
              placeholder="Join our Newsletter"
              type="email"
              className="max-w-5xl"
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
