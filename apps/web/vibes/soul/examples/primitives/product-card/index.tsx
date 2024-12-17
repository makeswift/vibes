import { ProductCard } from '@/vibes/soul/primitives/product-card';

export default function Preview() {
  return (
    <div>
      <div className="bg-background p-8 @container">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <ProductCard
            className="w-full"
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
            className="w-full"
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
          <ProductCard
            className="w-full"
            product={{
              id: '1',
              href: '#',
              title: 'Product Name',
              image: {
                src: 'https://rstr.in/monogram/vibes/oUL4h2FvqIl',
                alt: 'Product Name',
              },
              subtitle: 'Blue/Black/Green',
              price: {
                type: 'range',
                minValue: '$99.99',
                maxValue: '$123.99',
              },
            }}
            showCompare
          />
        </div>
      </div>
      <div className="bg-foreground p-8 @container">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <ProductCard
            className="w-full"
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
            colorScheme="dark"
            showCompare
          />
          <ProductCard
            className="w-full"
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
            colorScheme="dark"
            showCompare
          />
          <ProductCard
            className="w-full"
            product={{
              id: '1',
              href: '#',
              title: 'Product Name',
              image: {
                src: 'https://rstr.in/monogram/vibes/oUL4h2FvqIl',
                alt: 'Product Name',
              },
              subtitle: 'Blue/Black/Green',
              price: {
                type: 'range',
                minValue: '$99.99',
                maxValue: '$123.99',
              },
            }}
            colorScheme="dark"
            showCompare
          />
        </div>
      </div>
    </div>
  );
}
