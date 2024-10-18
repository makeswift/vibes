import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/vibes/soul/primitives/carousel'
import { ProductCard, ProductCardSkeleton } from '@/vibes/soul/primitives/product-card'
import { Image, ProductCardProduct } from '@/vibes/soul/primitives/product-card'

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
      <div className="flex items-center justify-between px-3 @xl:px-6 @5xl:px-20">
        <CarouselScrollbar />
        <CarouselButtons />
      </div>
    </Carousel>
  )
}
