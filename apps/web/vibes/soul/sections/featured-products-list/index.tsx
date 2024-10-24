import Link from 'next/link'

import { Button } from '@/vibes/soul/primitives/button'
import { ListProduct, ProductsList } from '@/vibes/soul/primitives/products-list'

interface Link {
  label: string
  href: string
}

export interface FeaturedProductsListProps {
  title: string
  description?: string
  cta?: Link
  products: ListProduct[]
}

export const FeaturedProductsList = function FeaturedProductsList({
  title,
  description,
  cta,
  products,
}: FeaturedProductsListProps) {
  return (
    <section className="bg-background @container">
      <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-6 py-10 @4xl:flex-row @4xl:py-24 @5xl:px-20">
        <div
          className="4xl:w-1/2 top-28 flex w-full items-start justify-between gap-4 self-start px-3 
            @xl:px-6 @4xl:sticky @4xl:max-w-md @4xl:flex-col @4xl:items-start @4xl:justify-start @5xl:px-0 @6xl:w-4/12"
        >
          <div>
            <h2 className="mb-4 font-heading text-lg font-semibold leading-none text-foreground @4xl:text-6xl @4xl:font-medium">
              {title}
            </h2>
            {description != null && description !== '' && (
              <p className="mt-1.5 max-w-md pb-2 text-foreground">{description}</p>
            )}
          </div>
          {cta?.href != null && cta.href !== '' && cta.label !== '' && (
            <Button className="h-5 bg-transparent text-sm @4xl:h-12 @4xl:bg-primary" asChild>
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}
        </div>

        <ProductsList products={products} className="4xl:w-1/2 @6xl:w-8/12" />
      </div>
    </section>
  )
}
