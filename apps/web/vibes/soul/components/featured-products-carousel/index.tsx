import Link from 'next/link'

import { Product } from '@/vibes/soul/components/product-card'
import ProductsCarousel from '@/vibes/soul/components/products-carousel'

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
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-between gap-5 px-3 pt-10 text-foreground @xl:px-6 @4xl:flex-row @4xl:items-end @5xl:px-20">
        <div className="flex flex-col gap-5">
          {title && <h2 className="text-2xl font-medium">{title}</h2>}
          {description && <p className="max-w-md text-contrast-400">{description}</p>}
        </div>
        {cta && (
          <Link
            href={cta.href}
            className="rounded-lg font-semibold text-foreground ring-primary focus-visible:outline-0 focus-visible:ring-2"
          >
            {cta.label}
          </Link>
        )}
      </div>
      <ProductsCarousel products={products} />
    </section>
  )
}

export default FeaturedProductsCarousel
