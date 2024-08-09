import CarouselSection from '@/vibes/2px/components/carousel-section'
import ProductCard from '@/vibes/2px/components/product-card'

const items = [
  <ProductCard
    key={'sintra-curved-bench'}
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
  />,

  <ProductCard
    key={'alentejo-coffee-table'}
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
  />,

  <ProductCard
    key={'arc-de-stool'}
    title="Arc de Stool '52"
    image={{ src: '/2px/arc-de-stool.png', alt: "Arc de Stool '52", height: 400, width: 300 }}
    price="€1,100"
    className="border-r-0"
    link="/"
  />,

  <ProductCard
    key={'a-table-dining'}
    title="À Table - Dining Table"
    image={{
      src: '/2px/a-table-dining.jpg',
      alt: 'À Table - DiningTable',
      width: 300,
      height: 400,
    }}
    price="€14,000"
    link="/"
  />,
]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background @container sm:min-h-64 lg:min-h-80">
      <CarouselSection items={items} title="New in" showArrows loop />
    </div>
  )
}
