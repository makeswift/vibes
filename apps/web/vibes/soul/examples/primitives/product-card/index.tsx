import { ProductCard } from '@/vibes/soul/primitives/product-card'

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center bg-background p-8">
      <ProductCard
        product={{
          id: '1',
          href: '#',
          title: 'Product Name',
          image: {
            src: 'https://rstr.in/monogram/vibes/oUL4h2FvqIl',
            alt: 'Product Name',
          },
          subtitle: 'Blue/Black/Green',
          price: '123.99',
          badge: 'New',
        }}
        showCompare
        className="w-80"
      />
    </div>
  )
}
