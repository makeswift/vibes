'use client'

import Image from 'next/image'
import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

type Item = {
  children?: ReactNode
}

type Row = {
  feature?: string
  comingSoon?: boolean
  items?: Item[]
}

type Section = {
  icon?: { url: string; dimensions: { width: number; height: number } }
  iconAlt: string
  title?: string
  rows?: Row[]
}

type HeaderItem = {
  text?: string
}

type Props = {
  className?: string
  header?: HeaderItem[]
  sections?: Section[]
}

export const Table = forwardRef(function Table(
  { className, header, sections }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={clsx(className, '@container')}>
      <div className="w-full">
        {header?.length !== 0 && (
          <div className="sticky top-0 z-20 flex border-b border-foreground/20 bg-background backdrop-blur-sm after:absolute after:inset-0 after:-z-10 after:opacity-10 after:contrast-125 after:saturate-0">
            <div className="flex-1 p-4 @lg:w-48 @3xl:w-80"></div>
            {header?.map((item, index) => (
              <div
                key={index}
                className="flex-1 px-4 py-5 text-center text-lg font-medium leading-normal @lg:text-xl @3xl:text-2xl"
              >
                {item.text}
              </div>
            ))}
          </div>
        )}

        {sections?.map((section, index) => (
          <div key={index} className="mt-4 @3xl:mt-5">
            {section.title && (
              <div
                className={clsx(
                  'top-1 z-30 flex items-center gap-3 px-4 py-4 text-left text-base font-medium leading-normal @lg:text-lg',
                  header?.length !== 0 && '@2xl:sticky @3xl:top-1.5'
                )}
              >
                {section.icon && (
                  <Image
                    src={section.icon.url}
                    alt={section.iconAlt}
                    width={20}
                    height={20}
                    priority
                  />
                )}

                {section.title}
              </div>
            )}

            {section.rows?.map((row, index) => (
              <div
                key={index}
                className="text-muted-foreground flex items-center border-t border-foreground/10 transition hover:bg-contrast-100"
              >
                <div className="flex flex-1 flex-wrap items-center gap-x-2.5 gap-y-2 p-4 text-left font-medium leading-normal @lg:w-48 @3xl:w-80">
                  {row.feature}
                  {row.comingSoon && (
                    <span className="rounded-xl bg-primary px-2.5 py-1 text-center text-[10px] text-foreground">
                      Coming soon
                    </span>
                  )}
                </div>
                {row.items?.map((item, index) => (
                  <div key={index} className="flex-1 p-4 leading-normal">
                    {item.children}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
})
export default Table
