'use client'

import { useState } from 'react'

import clsx from 'clsx'

import Button from '@/vibes/soul/components/button'
import ProductCard from '@/vibes/soul/components/product-card'
import Price from '@/vibes/soul/components/product-card/price'
import Rating from '@/vibes/soul/components/rating'

import Favorite from '../favorite'
import ProductGallery from './ProductGallery'

export interface ProductDetail {
  product: ProductCard
  images: string[]
  content?: string
  rating?: number
  sizes?: string[]
}

export const ProductDetail = function ProductDetail({
  product,
  images,
  content,
  rating,
  sizes,
}: ProductDetail) {
  const [favorited, setFavorited] = useState(false)
  const [selectedSize, setSelectedSize] = useState(sizes?.[0] ?? null)

  return (
    <section className="w-full bg-background @container">
      <div className="mx-auto grid w-full max-w-7xl @3xl:grid-cols-2">
        <ProductGallery images={images} />
        <div className="my-auto flex flex-col gap-4 px-3 py-10 text-foreground @3xl:p-20">
          <h2 className="text-3xl font-medium">{product.name}</h2>

          <Rating rating={rating ?? 0} />

          {content && <p>{content}</p>}

          <Price price={product.price} />

          <div className="flex max-w-sm flex-wrap gap-2.5 pt-16">
            {sizes &&
              sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={clsx(
                    'flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors duration-300',
                    selectedSize === size ? 'bg-foreground text-background' : 'bg-contrast-100'
                  )}
                >
                  {size}
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
