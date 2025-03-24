import { CompareDrawerProvider } from '@/vibes/soul/primitives/compare-drawer';
import { ProductCard } from '@/vibes/soul/primitives/product-card';

export default function Preview() {
  return (
    <CompareDrawerProvider items={[]}>
      <div className="bg-background p-8 @container">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
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
              price: '$123.99',
              badge: 'New',
            }}
            showCompare
          />
          <ProductCard
            product={{
              id: '1',
              href: '#',
              title: 'Product Name',
              subtitle: 'Blue/Black/Green',
              price: {
                type: 'sale',
                previousValue: '$123.99',
                currentValue: '$99.99',
              },
              badge: 'New',
            }}
            showCompare
          />
        </div>
      </div>
      <div className="bg-foreground p-8 @container">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <ProductCard
            colorScheme="dark"
            product={{
              id: '1',
              href: '#',
              title: 'Product Name',
              image: {
                src: 'https://rstr.in/monogram/vibes/oUL4h2FvqIl',
                alt: 'Product Name',
              },
              subtitle: 'Blue/Black/Green',
              price: '$123.99',
              badge: 'New',
            }}
            showCompare
          />
          <ProductCard
            colorScheme="dark"
            product={{
              id: '1',
              href: '#',
              title: 'Product Name',
              subtitle: 'Blue/Black/Green',
              price: {
                type: 'sale',
                previousValue: '$123.99',
                currentValue: '$99.99',
              },
              badge: 'New',
            }}
            showCompare
          />
        </div>
      </div>
    </CompareDrawerProvider>
  );
}
