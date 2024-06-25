'use client'

import Image from 'next/image'
import { Ref, forwardRef } from 'react'

import clsx from 'clsx'

type Feature = {
  heading?: string
  description?: string
  icon?: { url: string; dimensions: { width: number; height: number } }
  iconAlt: string
}

type Props = {
  className?: string
  features?: Feature[]
}

const FeatureGrid = forwardRef(function FeatureGrid(
  { className, features }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={clsx(className, '@container')}>
      <div className="@md:grid-cols-2 @lg:gap-y-16 @2xl:grid-cols-3 @4xl:grid-cols-[repeat(auto-fit,minmax(min(100%/3,max(100%/4)),1fr))] @4xl:gap-x-0 grid grid-cols-1 gap-x-16 gap-y-8">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="@md:flex-col @4xl:pr-16 flex flex-row items-start gap-x-3 gap-y-4"
          >
            {feature.icon && (
              <Image
                src={feature.icon.url}
                alt={feature.iconAlt}
                width={20}
                height={20}
                priority
                className="@md:mt-0 mt-1.5"
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
