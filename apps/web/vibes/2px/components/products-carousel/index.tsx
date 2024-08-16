import CarouselSection from '@/vibes/2px/components/carousel-section'
import ProductCard, { Product } from '@/vibes/2px/components/product-card'

interface Props {
  className?: string
  products: Product[]
  title?: string
}

export default function ProductsCarousel({ className, products, title }: Props) {
  return (
    <CarouselSection
      title={title}
      className={className}
      items={products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
      showArrows
    />
  )
}
