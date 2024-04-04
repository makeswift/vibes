'use client'

import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

export type Props = {
  className?: string
  children: ReactNode
  media?: ReactNode
  mediaSize?: 'default' | 'large' | 'hidden'
  mediaAlign?: 'top' | 'center' | 'bottom'
  mediaOrder?: 'first' | 'last'
  topGlow?: boolean
}

const Card = forwardRef(function Card(
  {
    className,
    children,
    media,
    mediaSize = 'default',
    mediaAlign = 'center',
    mediaOrder = 'last',
    topGlow = false,
  }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={clsx(className, '@container relative self-stretch')}>
      {topGlow && (
        <div className="@4xl:block absolute inset-x-6 bottom-full hidden h-20 overflow-hidden before:mx-auto before:mt-14 before:block before:h-3/4 before:w-3/5 before:rounded-full before:bg-primary before:opacity-10 before:blur-xl after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-3/5 after:-translate-x-1/2 after:bg-gradient-to-r after:from-primary/0 after:via-primary after:to-primary/0 after:mix-blend-overlay" />
      )}
      <div className="card @2xl:flex-row flex h-full w-full flex-col items-stretch overflow-hidden shadow-[inset_0_0_400px_rgba(3,234,218,0.08)]">
        <div className="flex-1 p-7 sm:p-8 md:p-12 lg:p-14 lg:pt-12">{children}</div>

        {mediaSize !== 'hidden' && media && (
          <div
            className={clsx(
              {
                default: '@2xl:w-1/2 w-full',
                large: '@2xl:w-3/5 w-full',
              }[mediaSize],
              {
                top: 'self-start',
                center: 'self-center',
                bottom: 'self-end',
              }[mediaAlign],
              {
                first: 'order-first',
                last: 'order-last',
              }[mediaOrder]
            )}
          >
            {media}
          </div>
        )}
      </div>
    </div>
  )
})

export default Card
