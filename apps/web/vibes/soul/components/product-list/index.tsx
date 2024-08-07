import ProductCard from '@/vibes/soul/components/product-card'

type Props = {
  products: ProductCard[]
}

export const ProductList = function ProductList({ products }: Props) {
  return (
    <section className="bg-background @container">
      {products && (
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-3 @xl:gap-5 @xl:px-6 @4xl:grid-cols-3 @5xl:px-20">
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
    </section>
  )
}

export default ProductList
