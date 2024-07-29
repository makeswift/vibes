import Pagination from '@/vibes/soul/components/pagination'
import ProductCard from '@/vibes/soul/components/product-card'

type Props = {
  products: ProductCard[]
}

export const ProductList = function ProductList({ products }: Props) {
  return (
    <section className="flex flex-col gap-6 pb-10 @container">
      {products && (
        <div className="@4xl grid grid-cols-2 gap-2 px-3 @3xl:grid-cols-3 @4xl:gap-5 @4xl:px-20">
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
