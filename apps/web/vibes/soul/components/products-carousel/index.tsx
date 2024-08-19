import Carousel from '@/vibes/soul/components/carousel'
import ProductCard, { Product, ProductCardSkeleton } from '@/vibes/soul/components/product-card'

interface Props {
  products: Product[]
}

export const ProductsCarousel = function ProductsCarousel({ products }: Props) {
  return (
    <Carousel>
      {products && products.length > 0
        ? products.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              className="[&>div]:min-w-[179px] @4xl:[&>div]:min-w-[360px]"
            />
          ))
        : Array.from({ length: 5 }).map((_, index) => (
            <ProductCardSkeleton
              key={index}
              className="[&>div]:min-w-[179px] @4xl:[&>div]:min-w-[360px]"
            />
          ))}
    </Carousel>
  )
}

export default ProductsCarousel
