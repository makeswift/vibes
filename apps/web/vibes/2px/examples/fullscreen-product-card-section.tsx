'use client'

import FullscreenProductCardSection from '@/vibes/2px/components/fullscreen-product-card-section'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white @container sm:min-h-64 lg:min-h-80">
      <FullscreenProductCardSection
        name={`Arc de Stool '52`}
        cartCta={{
          label: 'Add to cart',
          onClick: count => {
            console.log('Product added to cart - count:', count)
          },
        }}
        image={{
          url: '/2px/fullscreen-table-card-example.jpg',
          alt: 'Arc de Stool 52',
          width: 1920,
          height: 1080,
        }}
        price="€1,100"
        detailsColor="light"
      />
    </div>
  )
}
