'use client'

import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

type Item = {
  text?: ReactNode
}

type Props = {
  className?: string
  items: Item[]
}

const List = forwardRef(function List({ className, items }: Props, ref: Ref<HTMLUListElement>) {
  return (
    <ul ref={ref} className={clsx(className, 'space-y-3 pl-8')}>
      {items.map((item, index) => (
        <li
          key={index}
          className="text relative leading-7 text-foreground before:pointer-events-none before:absolute before:right-full before:top-3 before:mr-4 before:h-0.5 before:w-5 before:rounded-full before:bg-gradient-to-r before:from-transparent before:to-primary [&_span]:leading-7"
        >
          {item.text}
        </li>
      ))}
    </ul>
  )
})
export default List
