import Link from 'next/link'

import Button from '@/vibes/soul/components/button'
import { Product } from '@/vibes/soul/components/product-card'

import ProductList from '../products-list'

interface Link {
  label: string
  href: string
}

interface Props {
  title: string
  description?: string
  cta?: Link
  products: Product[]
}

export const FeaturedProductsList = function FeaturedProductsList({
  title,
  description,
  cta,
  products,
}: Props) {
  return (
    <section className="bg-background @container">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 py-10 @4xl:flex-row @4xl:py-24 @5xl:px-20">
        <div className="top-28 flex w-full items-end justify-between gap-4 self-start px-3 @xl:px-6 @4xl:sticky @4xl:max-w-md @4xl:flex-col @4xl:items-start @4xl:justify-start @5xl:px-0">
          {title && (
            <h2 className="text-lg font-semibold text-foreground @4xl:text-6xl @4xl:font-medium">
              {title}
            </h2>
          )}
          {description && <p className="hidden pb-2 text-foreground @4xl:block">{description}</p>}
          {cta && (
            <Button
              link={{ href: cta.href }}
              className="h-5 bg-transparent !px-0 text-sm @4xl:h-12 @4xl:bg-primary @4xl:!px-6"
            >
              {cta.label}
            </Button>
          )}
        </div>

        {products && <ProductList products={products} />}
      </div>
    </section>
  )
}

export default FeaturedProductsList
