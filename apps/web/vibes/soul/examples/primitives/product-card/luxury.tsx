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
              title: 'Jada Square Toe Ballet Flat',
              subtitle: '',
              badge: 'Bestseller',
              price: '$350',
              image: {
                src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
                alt: 'Jada Square Toe Ballet Flat',
              },
              href: '#',
              rating: 4.5,
            }}
          />
          <ProductCard
            product={{
              id: '1',
              title: 'Jada Square Toe Ballet Flat',
              subtitle: '',
              badge: 'Bestseller',
              price: '$350',
              href: '#',
              rating: 4.5,
            }}
          />
        </div>
      </div>
      <div className="bg-foreground p-8 @container">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <ProductCard
            colorScheme="dark"
            product={{
              id: '1',
              title: 'Jada Square Toe Ballet Flat',
              subtitle: '',
              badge: 'Bestseller',
              price: '$350',
              image: {
                src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
                alt: 'Jada Square Toe Ballet Flat',
              },
              href: '#',
              rating: 4.5,
            }}
          />
          <ProductCard
            colorScheme="dark"
            product={{
              id: '1',
              title: 'Jada Square Toe Ballet Flat',
              subtitle: '',
              badge: 'Bestseller',
              price: '$350',
              href: '#',
              rating: 4.5,
            }}
          />
        </div>
      </div>
    </CompareDrawerProvider>
  );
}
