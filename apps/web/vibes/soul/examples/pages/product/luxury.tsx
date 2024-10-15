import {
  accordions,
  productDescriptionImage,
} from '@/vibes/soul/examples/sections/product-description/luxury'
import { product } from '@/vibes/soul/examples/sections/product-detail/luxury'
import { ProductPage } from '@/vibes/soul/pages/product'

export default function Preview() {
  return (
    <ProductPage
      product={product}
      accordions={accordions}
      productDescriptionImage={productDescriptionImage}
    />
  )
}
