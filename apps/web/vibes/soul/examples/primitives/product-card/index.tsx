import { ProductCard } from '@/vibes/soul/primitives/product-card';

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center gap-8 bg-background p-8">
      <ProductCard
        className="w-80"
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
      />
      <ProductCard
        className="w-80"
        product={{
          id: '1',
          href: '#',
          title: 'Product Name',
          subtitle: 'Blue/Black/Green',
          price: '123.99',
          badge: 'New',
        }}
        showCompare
      />
    </div>
  );
}
