'use client'

import clsx from 'clsx'

import Rotate from '../icons/Rotate'
import Star from '../icons/Star'
import Truck from '../icons/Truck'

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
        <ul className="flex flex-wrap justify-center divide-y px-3 @xl:px-20">
          {list.map(({ title, description, icon }, idx) => {
            return (
              <li
                key={idx}
                className={clsx(
                  'flex flex-col items-center gap-2 py-10',
                  list.length !== 4 ? 'min-w-[33%]' : 'w-1/4'
                )}
              >
                {/* Icon */}
                {icon === 'truck' && <Truck />}
                {icon === 'rotate' && <Rotate />}
                {icon === 'star' && <Star />}
                {/* Text */}
                <div className="flex flex-col items-center text-center text-[15px]">
                  <span className="font-medium">{title}</span>
                  <span className="opacity-50">{description}</span>
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
