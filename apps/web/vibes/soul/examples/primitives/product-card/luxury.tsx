import { CompareDrawerProvider } from '@/vibes/soul/primitives/compare-drawer';
import { ProductCard } from '@/vibes/soul/primitives/product-card';

export default function Preview() {
  return (
    <CompareDrawerProvider items={[]}>
      <div className="bg-background @container p-8">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <ProductCard
            product={{
              id: '1',
              title: 'JADA SQUARE TOE BALLET FLAT',
              subtitle: '',
              badge: 'Bestseller',
              price: '$350',
              image: {
                src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTUwMzNmMy0zYzRlLTQzOTUtYTc3MC1jYWM0OWE1YWMyY2E=/jada-square-toe.webp',
                alt: 'JADA SQUARE TOE BALLET FLAT',
              },
              href: '#',
              rating: 4.5,
            }}
          />
          <ProductCard
            product={{
              id: '1',
              title: 'JADA SQUARE TOE BALLET FLAT',
              subtitle: '',
              badge: 'Bestseller',
              price: '$350',
              href: '#',
              rating: 4.5,
            }}
          />
        </div>
      </div>
      <div className="bg-foreground @container p-8">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <ProductCard
            colorScheme="dark"
            product={{
              id: '1',
              title: 'JADA SQUARE TOE BALLET FLAT',
              subtitle: '',
              badge: 'Bestseller',
              price: '$350',
              image: {
                src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTUwMzNmMy0zYzRlLTQzOTUtYTc3MC1jYWM0OWE1YWMyY2E=/jada-square-toe.webp',
                alt: 'JADA SQUARE TOE BALLET FLAT',
              },
              href: '#',
              rating: 4.5,
            }}
          />
          <ProductCard
            colorScheme="dark"
            product={{
              id: '1',
              title: 'JADA SQUARE TOE BALLET FLAT',
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
