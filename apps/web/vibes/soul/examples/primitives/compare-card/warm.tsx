import { CompareCard } from '@/vibes/soul/primitives/compare-card';

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-8">
      <CompareCard
        imageSizes="(min-width: 42rem) 25vw, (min-width: 32rem) 33vw, (min-width: 28rem) 50vw, 100vw"
        product={{
          id: '1',
          href: '#',
          title: 'Mini Bar Bag',
          image: {
            src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
            alt: 'Mini Bar Bag',
          },
          subtitle: 'Blue/Green',
          price: '$65',
          badge: 'New',
        }}
      />
    </div>
  );
}
