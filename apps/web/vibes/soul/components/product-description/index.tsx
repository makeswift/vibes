import Image from 'next/image'

import { Accordions } from '@/vibes/soul/components/accordions'

export interface Props {
  accordions: {
    title: string
    body: string
  }[]
  image?: {
    url: string
    dimensions: {
      width: number
      height: number
    }
    alt: string
  }
}

export const ProductDescription = function ProductDescription({
  accordions,
  image,
}: Readonly<Props>) {
  return (
    <div className="relative flex w-full flex-col-reverse items-start justify-between gap-x-4 gap-y-4 @md:py-24 @lg:flex-row @lg:px-10 @xl:gap-x-10 @6xl:px-44 @7xl:gap-x-32">
      <Accordions accordions={accordions} />

      {image && (
        <Image
          src={image.url}
          height={image.dimensions.height}
          width={image.dimensions.width}
          alt={image.alt}
          className="aspect-auto w-full object-cover  @lg:sticky @lg:top-20 @lg:w-1/3 @lg:rounded-2xl @7xl:h-[617px] @7xl:w-auto"
        />
      )}
    </div>
  )
}

export default ProductDescription
