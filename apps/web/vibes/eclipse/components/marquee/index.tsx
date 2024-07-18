'use client'

import Image from 'next/image'
import React, { CSSProperties, Ref, forwardRef } from 'react'

import clsx from 'clsx'

type Logo = {
  logoImage?: { url: string; dimensions: { width: number; height: number } }
  logoAlt: string
  logoWidth: number
}

type Props = {
  className?: string
  logos: Logo[]
  fadeEdges?: boolean
  duration?: number
  gap?: number
}

export const Marquee = forwardRef(function Marquee(
  { className, logos, fadeEdges = true, duration = 30, gap = 64 }: Props,
  ref: Ref<HTMLDivElement>
) {
  const scrollingImages = (
    <div
      className="flex min-w-full shrink-0 grow-0 animate-scrollLeft items-center"
      style={{ columnGap: gap, paddingInlineStart: gap / 2, paddingInlineEnd: gap / 2 }}
    >
      {logos.map(({ logoImage, logoAlt, logoWidth = 120 }, index) => {
        if (logoImage == null) {
          return <div key={index} className="h-16 w-32 rounded-xl bg-foreground/10" />
        }

        return (
          <Image
            key={index}
            src={logoImage.url}
            alt={logoAlt}
            width={logoWidth}
            height={logoWidth / (logoImage.dimensions.width / logoImage.dimensions.height)}
            priority
          />
        )
      })}
    </div>
  )

  return (
    <div
      className={className}
      ref={ref}
      style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
    >
      {logos.length === 0 ? (
        <div className="p-6 text-center text-lg">There are no images. Try adding some.</div>
      ) : (
        <div
          className={clsx(
            fadeEdges &&
              '[mask-image:linear-gradient(to_right,_transparent_0%,_black_15%,_black_85%,_transparent_100%)]',
            'relative flex w-full flex-row items-center overflow-hidden'
          )}
        >
          {scrollingImages}
          {scrollingImages}
        </div>
      )}
    </div>
  )
})
export default Marquee
