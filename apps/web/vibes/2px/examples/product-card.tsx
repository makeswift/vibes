import ProductCard from '@/vibes/2px/components/product-card'
import obsidianStool from '@/vibes/2px/examples/assets/obsidian-stool.png'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <ProductCard
        image={{
          src: obsidianStool.src,
          alt: 'Obsidian stool',
          width: obsidianStool.width,
          height: obsidianStool.height,
        }}
        price="549,00 €"
        tag="New season"
        title="Obsidian stool"
        link="/"
      />
    </div>
  )
}
