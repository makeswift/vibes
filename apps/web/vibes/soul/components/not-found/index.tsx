import { Product } from '@/vibes/soul/components/product-card'
import { ProductsCarousel } from '@/vibes/soul/components/products-carousel'

interface Props {
  products: Product[]
}

export const NotFound = function NotFound({ products }: Props) {
  return (
    <section className="@container">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-3 py-20 @xl:px-6 @5xl:px-20 @5xl:pt-32">
        <h1 className="text-2xl font-medium @4xl:text-3xl">
          We can&apos;t find the page you&apos;re looking for.
        </h1>
        <p className="@4xl:text-lg">
          But while you&apos;re here, why don&apos;t you have a look around.
        </p>
      </div>

      <ProductsCarousel products={products} />
    </section>
  )
}
