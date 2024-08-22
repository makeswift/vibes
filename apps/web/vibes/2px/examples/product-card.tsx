import ProductCard from '@/vibes/2px/components/product-card'
import obsidianStool from '@/vibes/2px/examples/assets/obsidian-stool.png'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <div className="flex flex-col @3xl:flex-row">
        <ProductCard
          id="obsidian-stool"
          image={{
            src: obsidianStool.src,
            altText: 'Obsidian stool',
            width: obsidianStool.width,
            height: obsidianStool.height,
          }}
          price="549,00 €"
          badge="New season"
          name="Obsidian stool"
          href="/"
        />
        <ProductCard
          id="obsidian-stool"
          image={{
            src: obsidianStool.src,
            altText: 'Obsidian stool',
            width: obsidianStool.width,
            height: obsidianStool.height,
          }}
          price={{
            type: 'sale',
            currentValue: '549,00 €',
            previousValue: '599,00 €',
          }}
          badge="New season"
          name="Obsidian stool"
          href="/"
        />
        <ProductCard
          id="obsidian-stool"
          image={{
            src: obsidianStool.src,
            altText: 'Obsidian stool',
            width: obsidianStool.width,
            height: obsidianStool.height,
          }}
          price={{
            type: 'range',
            minValue: '549,00 €',
            maxValue: '599,00 €',
          }}
          badge="New season"
          name="Obsidian stool"
          href="/"
        />
      </div>
    </div>
  )
}
