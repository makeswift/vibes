import ProductPage from '@/vibes/soul/components/page-product'
import { accordions, productDescriptionImage } from '@/vibes/soul/examples/product-description-blue'
import { product } from '@/vibes/soul/examples/product-detail-blue'

export default function Preview() {
  return (
    <ProductPage
      product={product}
      accordions={accordions}
      productDescriptionImage={productDescriptionImage}
    />
  )
}
