'use client'

import Image from 'next/image'
import { ComponentPropsWithoutRef, useState } from 'react'

interface Props extends ComponentPropsWithoutRef<'img'> {}

export function Img({ alt = 'An Image', src = 'https://placehold.it/1024x640' }: Props) {
  const [zoomed, setZoomed] = useState(false)

  return (
    <Image
      className="not-prose rounded-lg shadow-inner ring-1 ring-border"
      sizes="(min-width: 1024px) 1024px, 100vw"
      width={1024}
      height={640}
      src={src}
      alt={alt}
    />
  )
}
