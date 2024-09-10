'use client'

import { useState } from 'react'

import { clsx } from 'clsx'

import { Button } from '@/vibes/soul/components/button'
import { Favorite } from '@/vibes/soul/components/favorite'
import { Product } from '@/vibes/soul/components/product-card'
import { Price } from '@/vibes/soul/components/product-card/price'
import { ProductGallery } from '@/vibes/soul/components/product-detail/product-gallery'
import { Rating } from '@/vibes/soul/components/rating'

interface Image {
  altText: string
  src: string
}

interface ProductDetail extends Product {
  options?: string[]
  images?: Image[]
}

export interface ProductDetailProps {
  product: ProductDetail
}

export const ProductDetail = function ProductDetail({ product }: ProductDetailProps) {
  const [favorited, setFavorited] = useState(false)
  const [selectedOption, setSelectedOption] = useState(product.options?.[0] ?? null)

  return (
    <section className="flex flex-col bg-background @container">
      <div className="mx-auto grid h-full w-full max-w-screen-2xl flex-grow @4xl:min-h-[800px] @4xl:grid-cols-2">
        <ProductGallery images={product.images ?? []} />

        {/* Product Details */}
        <div className="my-auto flex flex-col gap-4 px-3 py-10 text-foreground @xl:px-6 @4xl:py-28 @5xl:px-20">
          <h2 className="font-heading text-3xl font-medium leading-none">{product.name}</h2>
          <Rating rating={product.rating ?? 0} />
          {product.description && <p>{product.description}</p>}
          <Price price={product.price || ''} className="!text-2xl" />

          {product.options && (
            <div className="mt-6 flex flex-wrap gap-2.5 @4xl:mt-16">
              {product.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={clsx(
                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors duration-300',
                    'ring-primary focus-visible:outline-0 focus-visible:ring-2',
                    option === selectedOption
                      ? 'bg-foreground text-background'
                      : 'bg-contrast-100 hover:bg-contrast-200'
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          <div className="mt-4 flex max-w-sm gap-2">
            <Button className="flex-grow">Add to Cart</Button>
            <Favorite checked={favorited} setChecked={setFavorited} />
          </div>
        </div>
      </div>
    </section>
  )
}
