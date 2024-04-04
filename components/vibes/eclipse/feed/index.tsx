'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Ref, forwardRef, useEffect, useState } from 'react'

import clsx from 'clsx'

type Item = {
  link?: {
    href: string
    target?: '_self' | '_blank'
  }
  thumbnail?: { url: string; dimensions: { width: number; height: number } }
  thumbnailAlt: string
  category?: 'Changelog' | 'News' | 'Engineering' | 'Product'
  title?: string
  description?: string
  author?: string
}

type Props = {
  className?: string
  items?: Item[]
  paginate?: boolean
  defaultShown?: number
  paginationAmount?: number
  paginateText?: string
}

const Feed = forwardRef(function Feed(
  {
    className,
    items,
    paginate = true,
    defaultShown = 7,
    paginationAmount = 9,
    paginateText,
  }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [page, setPage] = useState(defaultShown)

  useEffect(() => {
    setPage(defaultShown)
  }, [defaultShown])

  return (
    <div ref={ref} className={clsx(className, '@container flex flex-col items-center')}>
      <div className="@sm:gap-x-8 @sm:gap-y-8 @3xl:gap-x-10 @3xl:gap-y-10 grid w-full grid-cols-12 gap-x-0 gap-y-6">
        {items?.slice(0, Math.min(page, items.length)).map((item, index) => (
          <Link
            href={item.link?.href ?? ''}
            target={item.link?.target}
            key={index}
            className={clsx(
              'card group z-0 overflow-hidden transition duration-500 hover:bg-primary/10 hover:ring-primary/50',
              index === 0
                ? '@xl:flex-row col-span-12 flex flex-col'
                : '@lg:col-span-6 @4xl:col-span-4 col-span-12'
            )}
          >
            <div
              className={clsx(
                'relative aspect-video bg-background',
                index === 0 ? '@lg:h-full @xl:w-1/2 @5xl:w-2/3 w-full' : 'w-full'
              )}
            >
              {item.thumbnail && (
                <Image
                  src={item.thumbnail.url}
                  alt={item.thumbnailAlt}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div
              className={clsx(
                'before:rounded-circle before:duration-[400ms] relative flex flex-1 flex-col gap-y-6 p-5 text-foreground before:absolute before:left-1/2 before:top-full before:-z-10 before:aspect-square before:w-full before:-translate-x-1/2 before:scale-50 before:bg-primary before:opacity-0 before:transition-[opacity,transform] before:ease-linear group-hover:before:scale-100 group-hover:before:opacity-50',
                index === 0
                  ? '@xl:gap-y-10 @xl:p-10 @2xl:gap-y-12 @4xl:gap-y-16 @4xl:p-12 justify-between before:-translate-y-20 before:blur-[80px]'
                  : '@xl:gap-y-8 @xl:p-7 @xl:pt-6 before:-translate-y-10 before:blur-3xl'
              )}
            >
              <div>
                <div
                  className={clsx(
                    'inline-block text-sm font-medium text-foreground/50',
                    index === 0 ? 'mb-3' : 'mb-2'
                  )}
                >
                  {item.category}
                </div>

                {item.title && (
                  <h2
                    className={clsx(
                      'text-xl font-medium',
                      index === 0
                        ? '@xl:text-2xl @2xl:text-3xl @4xl:text-4xl !leading-tight'
                        : '@4xl:text-2xl leading-normal'
                    )}
                  >
                    {item.title}
                  </h2>
                )}

                {item.description && (
                  <p
                    className={clsx(
                      'text @xl:line-clamp-4 @2xl:mt-5 @2xl:line-clamp-5 @2xl:text-lg mt-3 hidden font-light leading-normal opacity-70',
                      index !== 0 && '!hidden'
                    )}
                  >
                    {item.description}
                  </p>
                )}
              </div>

              {item.author && (
                <p className={clsx('text font-medium opacity-50', index === 0 && '@2xl:text-lg')}>
                  {item.author}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {paginate && page < items?.length && (
        <button
          className="button button-muted button-md @lg:mt-14 mt-10"
          onClick={() => setPage(p => p + paginationAmount)}
        >
          {paginateText}
        </button>
      )}
    </div>
  )
})

export default Feed
