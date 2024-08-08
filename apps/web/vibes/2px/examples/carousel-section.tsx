import CarouselSection, { type Slide } from '@/vibes/2px/components/carousel-section'
import ProductCard from '@/vibes/2px/components/product-card'

const slides = [
  {
    item: (
      <ProductCard
        title="Sintra Curved Bench in oak"
        image={{
          src: '/2px/sintra-curved-bench.png',
          alt: 'Sintra Curved Bench in oak',
          width: 300,
          height: 400,
        }}
        price="€2,600"
        className="border-r-0"
        link="/"
      />
    ),
  },
  {
    item: (
      <ProductCard
        title="Alentejo Coffee Table"
        tag="new season"
        image={{
          src: '/2px/alentejo-coffee-table.png',
          alt: 'Alentejo Coffee Table',
          height: 400,
          width: 300,
        }}
        price="€4,200"
        className="border-r-0"
        link="/"
      />
    ),
  },
  {
    item: (
      <ProductCard
        title="Arc de Stool '52"
        image={{ src: '/2px/arc-de-stool.png', alt: "Arc de Stool '52", height: 400, width: 300 }}
        price="€1,100"
        className="border-r-0"
        link="/"
      />
    ),
  },
  {
    item: (
      <ProductCard
        title="À Table - DiningTable"
        image={{
          src: '/2px/a-table-dining.jpg',
          alt: 'À Table - DiningTable',
          width: 300,
          height: 400,
        }}
        price="€14,000"
        link="/"
      />
    ),
  },
] as Slide[]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background @container sm:min-h-64 lg:min-h-80">
      <CarouselSection slides={slides} title="New in" showArrows loop />
    </div>
  )
}
