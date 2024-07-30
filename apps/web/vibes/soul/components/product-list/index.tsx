import Pagination from '@/vibes/soul/components/pagination'
import ProductCard from '@/vibes/soul/components/product-card'

type Props = {
  products: ProductCard[]
}

export const ProductList = function ProductList({ products }: Props) {
  return (
    <section className="flex flex-col gap-6 bg-background pb-10 @container">
      {products && (
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-3 @xl:gap-5 @xl:px-20 @4xl:grid-cols-3">
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
      <Pagination pages={8} />
    </section>
  )
}

export default ProductList
