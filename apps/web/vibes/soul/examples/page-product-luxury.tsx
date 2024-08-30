import ProductPage from '@/vibes/soul/components/page-product'
import {
  accordions,
  productDescriptionImage,
} from '@/vibes/soul/examples/product-description-luxury'
import { product } from '@/vibes/soul/examples/product-detail-luxury'

export default function Preview() {
  return (
    <ProductPage
      product={product}
      accordions={accordions}
      productDescriptionImage={productDescriptionImage}
    />
  )
}
