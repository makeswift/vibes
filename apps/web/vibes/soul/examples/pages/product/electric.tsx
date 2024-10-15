import { ProductPage } from '@/vibes/soul/components/page-product'
import {
  accordions,
  productDescriptionImage,
} from '@/vibes/soul/examples/sections/product-description/electric'
import { product } from '@/vibes/soul/examples/sections/product-detail/electric'

export default function Preview() {
  return (
    <ProductPage
      product={product}
      accordions={accordions}
      productDescriptionImage={productDescriptionImage}
    />
  )
}
