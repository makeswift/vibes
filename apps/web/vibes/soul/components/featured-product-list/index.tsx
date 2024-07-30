import Link from 'next/link'

import Button from '@/vibes/soul/components/button'
import ProductCard from '@/vibes/soul/components/product-card'

type Props = {
  title?: string
  description?: string
  link?: { label: string; href: string; target?: string }
  products?: ProductCard[]
}

export const FeaturedProductList = function FeaturedProductList({
  title,
  description,
  link,
  products,
}: Props) {
  return (
    <section className="bg-background @container">
      <div className="container relative mx-auto flex flex-col gap-6 px-3 py-10 @4xl:flex-row @4xl:px-20 @4xl:py-24">
        <div className="top-28 flex w-full items-end justify-between gap-4 self-start @4xl:sticky @4xl:max-w-md @4xl:flex-col @4xl:items-start @4xl:justify-start">
          {title && (
            <h2 className="text-lg font-semibold text-foreground @4xl:text-6xl @4xl:font-medium">
              {title}
            </h2>
          )}
          {description && <p className="hidden pb-2 text-foreground @4xl:block">{description}</p>}
          {link && (
            <>
              <Button
                link={{
                  href: link.href,
                  target: link.target,
                }}
                className="hidden @4xl:block"
              >
                {link.label}
              </Button>
              <Link
                href={link.href}
                target={link.target}
                className="text-sm font-semibold @4xl:hidden"
              >
                {link.label}
              </Link>
            </>
          )}
        </div>

        {products && (
          <div className="grid w-full grid-cols-2 gap-2 @xl:gap-5 @4xl:grid-cols-1 @6xl:grid-cols-2">
            {products.map(product => (
              <ProductCard
                key={product.name}
                name={product.name}
                tags={product.tags}
                label={product.label}
                price={product.price}
                image={product.image}
                ctaLink={product.ctaLink}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedProductList
