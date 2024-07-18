'use client'

import React, { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import { Popout12 } from '@/icons/generated'

type Heading = { id: string; text: string; level: number; element: Element }

interface Props {
  offsetTop?: number
}

export function TableOfContents({ offsetTop = 0 }: Props) {
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
    <div className="not-prose hidden lg:block">
      <nav className="sticky top-24 w-full pb-10 pt-2">
        <div className="mb-3 text-sm font-bold">On this page</div>
        <ul className="pb-4">
          {headings.map((heading, index) => (
            <li key={index} className="m-0 p-0">
              <a
                className={clsx(
                  'block py-1 text-sm leading-normal transition-colors before:hidden',
                  heading === activeHeading
                    ? 'text-foreground'
                    : 'text-contrast-400 hover:!text-foreground'
                )}
                style={{
                  marginLeft: `${heading.level - 2}em`,
                }}
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
              </a>
            </li>
          ))}
        </ul>

        <div className="space-between flex w-full border-t border-dashed border-contrast-400 py-4 text-contrast-400">
          <span className="flex-1 text-sm">Total bundle size</span>

          <span className="bg-contrast-100 px-1 py-0.5 font-mono text-xs text-contrast-500">
            5.6kB
          </span>
        </div>

        <ul className="border-t border-dashed border-contrast-400 stroke-contrast-400 py-4 text-sm text-contrast-400">
          <li>
            <a
              href="#"
              className="flex items-center gap-x-1 py-1 transition-colors hover:stroke-foreground hover:text-foreground"
            >
              @vibes/eclipse/button
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-1 py-1 transition-colors hover:stroke-foreground hover:text-foreground"
            >
              @vibes/eclipse/card
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-1 transition-colors hover:stroke-foreground hover:text-foreground"
            >
              @bibbidiboppidiboo/react-navigation-menu
              <Popout12 className="ml-1 inline shrink-0" />
            </a>
          </li>
        </ul>

        <ul className="border-t border-dashed border-contrast-400 stroke-contrast-400 py-4 text-sm text-contrast-400">
          <li>
            <a
              href="#"
              className="block py-1 transition-colors hover:stroke-foreground hover:text-foreground"
            >
              View source
              <Popout12 className="ml-1 inline shrink-0" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-1 transition-colors hover:stroke-foreground hover:text-foreground"
            >
              View on npm
              <Popout12 className="ml-1 inline shrink-0" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-1 transition-colors hover:stroke-foreground hover:text-foreground"
            >
              Report an issue
              <Popout12 className="ml-1 inline shrink-0" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
