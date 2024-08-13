import ProductCard, { Product } from '@/vibes/2px/components/product-card'

import CarouselSection from '../carousel-section'

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
