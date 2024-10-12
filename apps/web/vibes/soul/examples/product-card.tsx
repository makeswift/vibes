import { ProductCard } from '@/vibes/soul/components/product-card'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 @container">
      <ProductCard
        id="1"
        href="#"
        name="Product Name"
        image={{
          src: 'https://rstr.in/monogram/vibes/oUL4h2FvqIl',
          alt: 'Product Name',
        }}
        subtitle="Blue/Black/Green"
        price="123.99"
        badge="New"
      />
    </div>
  )
}
