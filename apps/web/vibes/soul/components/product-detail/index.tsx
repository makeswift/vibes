'use client'

import { ReactNode, useState } from 'react'

import clsx from 'clsx'

import Button from '@/vibes/soul/components/button'
import Favorite from '@/vibes/soul/components/favorite'
import { ProductCard } from '@/vibes/soul/components/product-card'
import Price from '@/vibes/soul/components/product-card/price'
import ProductGallery from '@/vibes/soul/components/product-detail/product-gallery'
import Rating from '@/vibes/soul/components/rating'

export interface ProductDetailProps {
  product: ProductCard
  images: string[]
  content?: ReactNode
  rating?: number
  options?: string[]
}

export const ProductDetail = function ProductDetail({
  product,
  images,
  content,
  rating,
  options,
}: ProductDetailProps) {
  const [favorited, setFavorited] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options?.[0] ?? null)

  return (
    <section className="w-full bg-background @container">
      <div className="mx-auto grid w-full max-w-7xl @3xl:grid-cols-2">
        <ProductGallery images={images} />
        <div className="my-auto flex flex-col gap-4 px-3 py-10 text-foreground @xl:px-6 @xl:py-20 @5xl:px-20">
          <h2 className="text-3xl font-medium">{product.name}</h2>

          <Rating rating={rating ?? 0} />

          {content && content}

          <Price price={product.price} className="!text-2xl" />

          <div className="flex max-w-sm flex-wrap gap-2.5 pt-16">
            {options &&
              options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={clsx(
                    'flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors duration-300',
                    option === selectedOption
                      ? 'bg-foreground text-background'
                      : 'bg-contrast-100 hover:bg-contrast-200'
                  )}
                >
                  {option}
                </button>
              ))}
          </div>

          <div className="flex max-w-sm gap-2">
            <Button className="flex-grow">Add to Cart</Button>
            <Favorite favorited={favorited} setFavorited={setFavorited} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
