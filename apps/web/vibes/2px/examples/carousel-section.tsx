import CarouselSection, { Slide } from '@/vibes/2px/components/carousel-section'
import ProductCard from '@/vibes/2px/components/product-card'

const slides = [
  {
    item: (
      <ProductCard
        title="Sintra Curved Bench in oak"
        image="/2px/sintra-curved-bench.png"
        price="€2,600"
      />
    ),
    link: {
      href: '#',
      target: '_self',
    },
  },
  {
    item: (
      <ProductCard
        title="Alentejo Coffee Table"
        tag="new season"
        image="/2px/alentejo-coffee-table.png"
        price="€4,200"
      />
    ),
    link: {
      href: '#',
      target: '_self',
    },
  },
  {
    item: <ProductCard title="Arc de Stool '52" image="/2px/arc-de-stool.png" price="€1,100" />,
    link: {
      href: '#',
      target: '_self',
    },
  },
  {
    item: (
      <ProductCard title="À Table - DiningTable" image="/2px/a-table-dining.jpg" price="€14,000" />
    ),
    link: {
      href: '#',
      target: '_self',
    },
  },
] as Slide[]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <CarouselSection slides={slides} title="New in" showArrows loop />
    </div>
  )
}
