import ProductCard, { Product } from '@/vibes/soul/components/product-card'

interface Props {
  products: Product[]
}

export const ProductsList = function ProductsList({ products }: Props) {
  return (
    <section className="w-full bg-background pt-0.5 @container">
      {products && (
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-2 gap-y-4 px-3 @xl:gap-x-5 @xl:gap-y-10 @xl:px-6 @4xl:grid-cols-3 @5xl:px-20">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductsList
