import Image from 'next/image'

import { Accordions } from '@/vibes/soul/components/accordions'
import { AccordionItem } from '@/vibes/soul/components/accordions'

export interface Props {
  accordions: AccordionItem[]
  image?: {
    url: string
    dimensions: {
      width: number
      height: number
    }
    alt: string
  }
  video?: string
}

export const ProductDescription = function ProductDescription({
  accordions,
  image,
  video,
}: Readonly<Props>) {
  return (
    <div className="@container">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-start justify-between gap-x-4 gap-y-4 bg-background py-6 @lg:flex-row @lg:px-10 @lg:py-24 @xl:gap-x-10 @6xl:px-20 @7xl:gap-x-32">
        {/* Accordions */}
        <Accordions accordions={accordions} className="px-5 @lg:sticky @lg:top-20" />

        {/* Image || Video Container */}
        <div
          className="relative aspect-square w-full overflow-hidden 
        @lg:sticky @lg:top-20 @lg:aspect-[9/12] @lg:rounded-2xl @4xl:min-w-96"
        >
          {image ? (
            <Image src={image.url} fill alt={image.alt} className="object-cover" />
          ) : video ? (
            <video className="h-full object-cover" muted loop autoPlay>
              <source src={video} type="video/mp4" />
            </video>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
