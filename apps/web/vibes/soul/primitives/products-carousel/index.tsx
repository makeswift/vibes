import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
} from '@/vibes/soul/primitives/carousel'
import { ProductCard, ProductCardSkeleton } from '@/vibes/soul/primitives/product-card'
import { ProductCardProduct } from '@/vibes/soul/types'

interface Props {
  products: ProductCardProduct[]
  className?: string
}

export function ProductsCarousel({ products, className }: Props) {
  return (
    <Carousel className={className}>
      <CarouselContent className="mb-20 px-3 @xl:px-6 @4xl:px-20">
        {products.length > 0
          ? products.map(product => (
              <CarouselItem key={product.id} className="basis-full @md:basis-1/2 @xl:basis-1/4">
                <ProductCard {...product} />
              </CarouselItem>
            ))
          : Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-full @md:basis-1/2 @xl:basis-1/4">
                <ProductCardSkeleton />
              </CarouselItem>
            ))}
      </CarouselContent>
      <CarouselControls className="px-3 @xl:px-6 @5xl:px-20" />
    </Carousel>
  )
}
