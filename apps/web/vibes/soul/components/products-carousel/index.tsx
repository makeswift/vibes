import Carousel from '@/vibes/soul/components/carousel'
import ProductCard, { Product } from '@/vibes/soul/components/product-card'

interface Props {
  products: Product[]
}

export const ProductsCarousel = function ProductsCarousel({ products }: Props) {
  return (
    <Carousel>
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          className="[&>div]:min-w-[179px] @4xl:[&>div]:min-w-[360px]"
        />
      ))}
    </Carousel>
  )
}

export default ProductsCarousel
