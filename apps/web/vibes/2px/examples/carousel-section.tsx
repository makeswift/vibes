import CarouselSection from '@/vibes/2px/components/carousel-section'
import ProductCard from '@/vibes/2px/components/product-card'

const items = [
  <ProductCard
    id="sintra-curved-bench"
    key={'sintra-curved-bench'}
    name="Sintra Curved Bench in oak"
    image={{
      src: '/2px/sintra-curved-bench.png',
      altText: 'Sintra Curved Bench in oak',
      width: 300,
      height: 400,
    }}
    price="€2,600"
    className="border-r-0"
    href="/"
  />,

  <ProductCard
    id="alentejo-coffee-table"
    key={'alentejo-coffee-table'}
    name="Alentejo Coffee Table"
    badge="new season"
    image={{
      src: '/2px/alentejo-coffee-table.png',
      altText: 'Alentejo Coffee Table',
      height: 400,
      width: 300,
    }}
    price="€4,200"
    className="border-r-0"
    href="/"
  />,

  <ProductCard
    id="arc-de-stool"
    key={'arc-de-stool'}
    name="Arc de Stool '52"
    image={{ src: '/2px/arc-de-stool.png', altText: "Arc de Stool '52", height: 400, width: 300 }}
    price="€1,100"
    className="border-r-0"
    href="/"
  />,

  <ProductCard
    id="a-table-dining"
    key={'a-table-dining'}
    name="À Table - Dining Table"
    image={{
      src: '/2px/a-table-dining.jpg',
      altText: 'À Table - DiningTable',
      width: 300,
      height: 400,
    }}
    price="€14,000"
    href="/"
  />,
]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background @container sm:min-h-64 lg:min-h-80">
      <CarouselSection items={items} title="New in" showArrows loop />
    </div>
  )
}
