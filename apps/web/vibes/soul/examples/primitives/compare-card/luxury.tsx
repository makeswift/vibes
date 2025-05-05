import { CompareCard } from '@/vibes/soul/primitives/compare-card';

export default function Preview() {
  return (
    <div className="bg-background flex min-h-48 items-center justify-center p-8">
      <CompareCard
        addToCartLabel="Add to cart"
        imageSizes="(min-width: 42rem) 25vw, (min-width: 32rem) 33vw, (min-width: 28rem) 50vw, 100vw"
        product={{
          id: '1',
          href: '#',
          title: 'JADA SQUARE TOE BALLET FLAT',
          image: {
            src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTUwMzNmMy0zYzRlLTQzOTUtYTc3MC1jYWM0OWE1YWMyY2E=/jada-square-toe.webp',
            alt: 'JADA SQUARE TOE BALLET FLAT',
          },
          subtitle: 'Black/Brown',
          price: '$350',
          badge: 'New',
          description: <Description />,
          rating: 4.2,
          customFields,
        }}
      />
    </div>
  );
}

const customFields = [
  {
    name: 'SKU',
    value: 'JADA-SQ-BLK',
  },
  {
    name: 'Material',
    value: 'Premium Italian Leather',
  },
  {
    name: 'Sole',
    value: 'Flexible Rubber',
  },
  {
    name: 'Features',
    value: 'Cushioned Insole, Square Toe Design, Slip-On Style',
  },
];

function Description() {
  return (
    <>
      <p>
        Step into effortless elegance with the <strong>JADA SQUARE TOE BALLET FLAT</strong>.
        Designed with a modern square toe silhouette, this versatile flat combines timeless style
        with contemporary flair. Crafted from premium materials, the Jada offers a comfortable,
        flexible fit that moves with you throughout your day, making it perfect for both work and
        weekend wear.
      </p>
      <p>
        Whether you&apos;re dressing up for the office or keeping it casual for a day out, the Jada
        Square Toe Ballet Flat adds a chic finishing touch to any outfit. Its cushioned insole
        ensures all-day comfort, while the minimalist design pairs seamlessly with everything from
        tailored trousers to your favorite jeans.
      </p>
    </>
  );
}
