'use client'

import Link from 'next/link'
import React, { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import { Popout12 } from '@/icons/generated'

type Heading = { id: string; text: string; level: number; element: Element }

interface Props {
  className?: string
  offsetTop?: number
}

export function TableOfContents({ className, offsetTop = 0 }: Props) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeHeading, setActiveHeading] = useState<Heading | null>(null)
  const visibleHeadings = useRef<Heading[]>([])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'))
      .filter(element => element.id)
      .map(element => ({
        id: element.id,
        text: element.textContent ?? '',
        level: Number(element.tagName.substring(1)),
        element,
      }))

    setHeadings(elements)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const heading = headings.find(({ element }) => element === entry.target)

          if (!heading) return

          if (entry.isIntersecting) {
            visibleHeadings.current = [...visibleHeadings.current, heading]
          } else {
            visibleHeadings.current = visibleHeadings.current.filter(h => h !== heading)
          }

          if (visibleHeadings.current.length > 0) {
            setActiveHeading(
              visibleHeadings.current.reduce((a, b) =>
                a.element.getBoundingClientRect().top < b.element.getBoundingClientRect().top
                  ? a
                  : b
              )
            )
          }
        })
      },
      { rootMargin: `-${offsetTop}px 0% 0% 0%`, threshold: 0 }
    )

    headings.forEach(({ element }) => observer.observe(element))

    return () => observer.disconnect()
  }, [headings, offsetTop])

  return (
    <ul className={className}>
      {headings.map((heading, index) => (
        <li key={index} className="m-0 p-0">
          <TableOfContentsLink
            style={{
              marginLeft: `${heading.level - 2}em`,
            }}
            active={activeHeading?.id === heading.id}
            href={`#${heading.id}`}
            onClick={e => {
              e.preventDefault()
              const element = document.querySelector(`#${heading.id}`)

              window.scrollTo({
                top: (element?.getBoundingClientRect().top ?? 0) + window.scrollY - offsetTop,
                left: (element?.getBoundingClientRect().left ?? 0) + window.scrollY - offsetTop,
                behavior: 'smooth',
              })
            }}
          >
            {heading.text}
          </TableOfContentsLink>
        </li>
      ))}
    </ul>
  )
}

export function TableOfContentsLink({
  active = false,
  external = false,
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<typeof Link> & { active?: boolean; external?: boolean }) {
  return (
    <Link
      {...rest}
      className={clsx(
        'flex items-center gap-x-1 stroke-contrast-400 py-1 text-sm transition-colors hover:stroke-current hover:text-foreground',
        active ? 'text-foreground' : 'text-contrast-400 hover:!text-foreground'
      )}
    >
      {children}
      {external && <Popout12 className="ml-1 inline shrink-0" />}
    </Link>
  )
}
