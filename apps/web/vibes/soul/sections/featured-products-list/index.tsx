import { ButtonLink } from '@/vibes/soul/primitives/button-link'
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

export function FeaturedProductsList({
  title,
  description,
  cta,
  products,
}: FeaturedProductsListProps) {
  return (
    <section className="@container">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-stretch gap-x-16 gap-y-10 px-4 py-10 @xl:px-6 @xl:py-14 @4xl:flex-row @4xl:px-8 @4xl:py-20">
        <div className="@4xl:w-1/3">
          <div className="sticky top-10">
            <h2 className="mb-3 font-heading text-4xl font-medium leading-none text-foreground @4xl:text-5xl">
              {title}
            </h2>
            {description != null && description !== '' && (
              <p className="mb-8 max-w-xl text-lg font-light leading-normal text-foreground">
                {description}
              </p>
            )}

            {cta?.href != null && cta.href !== '' && cta.label !== '' && (
              <ButtonLink href={cta.href} variant="secondary">
                {cta.label}
              </ButtonLink>
            )}
          </div>
        </div>

        <ProductsList products={products} className="flex-1" />
      </div>
    </section>
  )
}
