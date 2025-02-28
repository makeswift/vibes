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
              title: 'Mini Bar Bag',
              subtitle: 'Blue/Green',
              price: '$65',
              image: {
                src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
                alt: 'Mini Bar Bag',
              },
              href: '#',
              rating: 4.3,
            }}
            showCompare
          />
          <ProductCard
            className="w-full"
            product={{
              id: '1',
              title: 'Mini Bar Bag',
              subtitle: 'Blue/Green',
              price: '$65',
              href: '#',
              rating: 4.3,
            }}
            showCompare
          />
        </div>
      </div>
      <div className="bg-foreground p-8 @container">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <ProductCard
            className="w-full"
            colorScheme="dark"
            product={{
              id: '1',
              title: 'Mini Bar Bag',
              subtitle: 'Blue/Green',
              price: '$65',
              image: {
                src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
                alt: 'Mini Bar Bag',
              },
              href: '#',
              rating: 4.3,
            }}
            showCompare
          />
          <ProductCard
            className="w-full"
            colorScheme="dark"
            product={{
              id: '1',
              title: 'Mini Bar Bag',
              subtitle: 'Blue/Green',
              price: '$65',
              href: '#',
              rating: 4.3,
            }}
            showCompare
          />
        </div>
      </div>
    </div>
  );
}
