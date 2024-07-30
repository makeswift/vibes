'use client'

import { useEffect, useRef, useState } from 'react'

import { Link } from '@/components/navigation/link'
import CategoryCard from '@/vibes/soul/components/category-card'
import Arrow from '@/vibes/soul/components/icons/Arrow'

import './style.css'

type Props = {
  title: string
  link: { href: string; target?: string }
  categories: CategoryCard[]
}

export const Categories = function Categories({ title, link, categories }: Props) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      const maxScrollLeft = scrollWidth - clientWidth
      setScrollProgress((scrollLeft / maxScrollLeft) * 100)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <section className="flex flex-col gap-10 bg-background @container">
      <div className="flex items-center justify-between px-3 pt-3 text-foreground @4xl:px-20 @4xl:pt-20">
        {title && <h2 className="text-2xl font-medium">{title}</h2>}
        {link && (
          <Link href={link.href} target={link.target} className="font-semibold text-foreground">
            See All
          </Link>
        )}
      </div>

      {categories && (
        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex w-full snap-x snap-mandatory scroll-px-3 gap-5 overflow-x-scroll px-3 @4xl:scroll-px-20 @4xl:px-20"
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              label={category.label}
              image={category.image}
              theme={category.theme}
              ctaLink={category.ctaLink}
            />
          ))}
        </div>
      )}

      <div className="flex items-center justify-between px-3 pb-3 @4xl:px-20 @4xl:pb-20">
        <div className="relative h-1 w-1/2 max-w-56 overflow-hidden bg-contrast-100">
          <div
            className="absolute h-full bg-foreground"
            style={{ width: '38%', left: `${Math.max(0, scrollProgress - 38)}%` }}
          />
        </div>

        <div className="flex gap-1.5">
          <button
            role="button"
            className="transition-transform duration-300 hover:-translate-x-1"
            onClick={() => {
              scrollContainerRef.current?.scrollBy({ left: -200, behavior: 'smooth' })
            }}
          >
            <Arrow direction="left" />
          </button>
          <button
            role="button"
            className="transition-transform duration-300 hover:translate-x-1"
            onClick={() => {
              scrollContainerRef.current?.scrollBy({ left: 200, behavior: 'smooth' })
            }}
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Categories
