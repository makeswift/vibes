'use client'

import Image from 'next/image'
import { Ref, forwardRef } from 'react'

import clsx from 'clsx'

type Feature = {
  heading?: string
  description?: string
  icon?: { url: string; alt: string }
  iconAlt: string
}

type Props = {
  className?: string
  features?: Feature[]
}

export const FeatureGrid = forwardRef(function FeatureGrid(
  { className, features }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={clsx(className, '@container')}>
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 @md:grid-cols-2 @lg:gap-y-16 @2xl:grid-cols-3 @4xl:grid-cols-[repeat(auto-fit,minmax(min(100%/3,max(100%/4)),1fr))] @4xl:gap-x-0">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="flex flex-row items-start gap-x-3 gap-y-4 @md:flex-col @4xl:pr-16"
          >
            {feature.icon && (
              <Image
                src={feature.icon.url}
                alt={feature.iconAlt}
                width={20}
                height={20}
                priority
                className="mt-1.5 @md:mt-0"
              />
            )}

            <p className="text-lg font-medium leading-relaxed text-foreground">
              {feature.heading && <span>{feature.heading}&nbsp;</span>}
              {feature.description && <span className="opacity-50">{feature.description}</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
})

export default FeatureGrid
