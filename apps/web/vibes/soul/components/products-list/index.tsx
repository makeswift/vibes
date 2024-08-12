import ProductCard, { Product } from '@/vibes/soul/components/product-card'

interface Props {
  products: Product[]
}

export const ProductsList = function ProductsList({ products }: Props) {
  return (
    <section className="w-full bg-background @container">
      {products && (
        <div className="grid grid-cols-2 gap-2 px-3 @xl:gap-5 @xl:px-6 @4xl:grid-cols-3 @5xl:px-20">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductsList
