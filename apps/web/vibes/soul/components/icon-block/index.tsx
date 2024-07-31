'use client'

import clsx from 'clsx'

import { Icon } from '@/vibes/soul/components/icon'

export interface IconBlock {
  list?: {
    icon: string
    title: string
    description: string
  }[]
}

export const IconBlock = function IconBlock({ list }: IconBlock) {
  return (
    <section className="bg-background text-foreground @container">
      {list?.length && (
        <ul className="flex flex-wrap justify-center divide-y px-3 @2xl:px-20">
          {list.map(({ title, description, icon }, idx) => {
            return (
              <li
                key={idx}
                className={clsx(
                  'flex flex-col items-center gap-2 px-1 py-10',
                  list.length !== 4 ? 'w-full @md:w-1/2 @xl:w-1/3' : 'w-1/4'
                )}
              >
                {/* Icon */}
                <Icon icon={icon} />
                {/* Text */}
                <div className="flex flex-col items-center text-center text-[15px]">
                  <span>{title}</span>
                  <span className="opacity-40">{description}</span>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default IconBlock