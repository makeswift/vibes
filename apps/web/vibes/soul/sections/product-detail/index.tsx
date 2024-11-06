import { Price, PriceLabel } from '@/vibes/soul/primitives/price-label'
import { Rating } from '@/vibes/soul/primitives/rating'
import { ProductGallery } from '@/vibes/soul/sections/product-detail/product-gallery'

import { ProductDetailForm, ProductDetailFormAction } from './product-detail-form'
import { Field } from './schema'

type ProductDetailProduct = {
  id: string
  title: string
  href: string
  images: { src: string; alt: string }[]
  price?: Price
  subtitle?: string
  badge?: string
  rating?: number
  description?: string
}

type Props = {
  product: ProductDetailProduct
  action: ProductDetailFormAction
  fields: Field[]
}

export function ProductDetail({ product, action, fields }: Props) {
  return (
    <section className="@container">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 items-stretch gap-x-10 gap-y-10 px-4 py-10 @xl:px-6 @xl:py-14 @2xl:grid-cols-2 @4xl:px-8 @4xl:py-20 @5xl:gap-x-16">
        <div className="hidden @2xl:block">
          <ProductGallery images={product.images ?? []} className="sticky top-8" />
        </div>

        {/* Product Details */}
        <div className="text-foreground">
          {product.subtitle != null && product.subtitle !== '' && (
            <p className="font-mono text-sm uppercase">{product.subtitle}</p>
          )}

          <h1 className="mb-4 mt-2 font-heading text-2xl font-medium leading-none @xl:text-3xl @4xl:text-4xl">
            {product.title}
          </h1>

          <Rating rating={product.rating ?? 0} />

          {product.description != null && product.description !== '' && (
            <p className="my-3 text-contrast-500">{product.description}</p>
          )}

          <PriceLabel price={product.price ?? ''} className="mb-6 text-2xl" />

          <div className="@2xl:hidden">
            <ProductGallery images={product.images ?? []} />
          </div>

          <ProductDetailForm fields={fields} productId={product.id} action={action} />
        </div>
      </div>
    </section>
  )
}
