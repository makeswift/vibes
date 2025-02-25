import { CompareCard } from '@/vibes/soul/primitives/compare-card';

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-8">
      <CompareCard
        addToCartLabel="Add to cart"
        imageSizes="(min-width: 42rem) 25vw, (min-width: 32rem) 33vw, (min-width: 28rem) 50vw, 100vw"
        product={{
          id: '1',
          href: '#',
          title: 'Jada Square Toe Ballet Flat',
          image: {
            src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
            alt: 'Jada Square Toe Ballet Flat',
          },
          subtitle: 'Black/Brown',
          price: '$350',
          badge: 'New',
        }}
      />
    </div>
  );
}
