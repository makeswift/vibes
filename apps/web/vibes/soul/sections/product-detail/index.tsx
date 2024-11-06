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
    <section className="flex flex-col bg-background @container">
      <div className="mx-auto grid h-full w-full max-w-screen-2xl flex-grow @4xl:min-h-[800px] @4xl:grid-cols-2">
        <ProductGallery images={product.images ?? []} />

        {/* Product Details */}
        <div className="my-auto flex flex-col gap-8 px-3 text-foreground @xl:px-6 @5xl:px-20">
          <div className="space-y-3">
            {product.subtitle != null && product.subtitle !== '' && (
              <p className="font-mono text-sm uppercase">{product.subtitle}</p>
            )}
            <h2 className="font-heading text-3xl font-medium leading-none">{product.title}</h2>
            <Rating rating={product.rating ?? 0} />
            {product.description != null && product.description !== '' && (
              <p>{product.description}</p>
            )}
            <PriceLabel price={product.price ?? ''} className="!text-2xl" />
          </div>
          <ProductDetailForm fields={fields} productId={product.id} action={action} />
        </div>
      </div>
    </section>
  )
}
