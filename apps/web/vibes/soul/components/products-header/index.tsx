import { Button } from '@/vibes/soul/components/button'
import Dropdown from '@/vibes/soul/components/dropdown'
import { Icon } from '@/vibes/soul/components/icon'

type Props = {
  title: string
  numberOfProducts: number
}

export const ProductsHeader = function ProductsHeader({ title, numberOfProducts }: Props) {
  return (
    <div className="z-10 flex items-center justify-between bg-background pb-10 pt-28 text-foreground @container @lg:pt-44">
      <h1 className="pl-3 text-xl font-medium @lg:pl-20 @lg:text-[40px]">
        {title} <span className="text-contrast-200">{numberOfProducts}</span>
      </h1>

      <div className="flex gap-2 pr-3 @lg:pr-20">
        <Button variant="dark" size="small">
          <span className="hidden @lg:block">Filter</span>
          <Icon name="Sliders" size={18} />
        </Button>
        <Dropdown
          label="Sort"
          items={['Most Recent', 'Most Popular', 'Price: Low to High', 'Price: High to Low']}
          size="small"
        />
      </div>
    </div>
  )
}

export default ProductsHeader
