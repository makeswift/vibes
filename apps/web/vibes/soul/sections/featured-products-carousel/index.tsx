import Link from 'next/link'

import { Product } from '@/vibes/soul/primitives/product-card'
import { ProductsCarousel } from '@/vibes/soul/primitives/products-carousel'

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

export const FeaturedProductsCarousel = function FeaturedProductsCarousel({
  title,
  description,
  cta,
  products,
}: Props) {
  return (
    <section className="@container">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-row flex-wrap justify-between gap-5 px-3 pt-10 text-foreground @xl:px-6 @4xl:items-end @4xl:pt-20 @5xl:px-20">
        {products.length > 0 ? (
          <>
            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-2xl font-medium leading-none">{title}</h2>
              {description != null && description !== '' && (
                <p className="max-w-md text-contrast-400">{description}</p>
              )}
            </div>
            {cta != null && cta.href !== '' && cta.label !== '' && (
              <Link
                href={cta.href}
                className="rounded-lg font-semibold text-foreground ring-primary focus-visible:outline-0 focus-visible:ring-2"
              >
                {cta.label}
              </Link>
            )}
          </>
        ) : (
          <FeaturedProductsCarouselSkeleton />
        )}
      </div>
      <ProductsCarousel products={products} />
    </section>
  )
}

export const FeaturedProductsCarouselSkeleton = function FeaturedProductsCarouselSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="h-6 w-32 animate-pulse rounded-lg bg-contrast-100" />
        <div className="h-12 w-72 animate-pulse rounded-lg bg-contrast-100" />
      </div>
      <div className="h-6 w-24 animate-pulse rounded-lg bg-contrast-100 @4xl:h-12 @4xl:rounded-full" />
    </>
  )
}
