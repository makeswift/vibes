import { Link } from '@/components/navigation/link'
import CategoryCard from '@/vibes/soul/components/category-card'
import ArrowUpRight from '@/vibes/soul/components/icons/ArrowUpRight'

import './style.css'

type Props = {
  title: string
  link: { href: string; target?: string }
  categories: CategoryCard[]
}

export const Categories = function Categories({ title, link, categories }: Props) {
  return (
    <section className="flex flex-col gap-10 @container">
      <div className="flex items-center justify-between px-3 pt-3 @4xl:px-20 @4xl:pt-20">
        {title && <h2 className="text-2xl font-medium">{title}</h2>}
        {link && (
          <Link href={link.href} target={link.target} className="font-semibold text-foreground">
            See All
          </Link>
        )}
      </div>

      {categories && (
        <div className="no-scrollbar flex w-full snap-x snap-mandatory scroll-px-3 gap-5 overflow-x-scroll px-3 @4xl:scroll-px-20 @4xl:px-20">
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

      {/* TODO @cortez: add functionality */}
      <div className="flex items-center justify-between px-3 pb-3 @4xl:px-20 @4xl:pb-20">
        <div className="h-1 w-1/2 max-w-56 rounded-full bg-contrast-100" />

        <div className="flex gap-1.5">
          <button role="button" className="transition-transform duration-300 hover:-translate-x-1">
            <ArrowUpRight className="rotate-[225deg]" />
          </button>
          <button role="button" className="transition-transform duration-300 hover:translate-x-1">
            <ArrowUpRight className="rotate-45" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Categories
