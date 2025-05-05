import { CompareCard } from '@/vibes/soul/primitives/compare-card';

export default function Preview() {
  return (
    <div className="bg-background flex min-h-48 items-center justify-center p-8">
      <CompareCard
        imageSizes="(min-width: 42rem) 25vw, (min-width: 32rem) 33vw, (min-width: 28rem) 50vw, 100vw"
        product={{
          id: '1',
          href: '#',
          title: 'Mini Bar Bag',
          image: {
            src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1YzIwNTljMi04NzcwLTRiM2ItYmIzMy02ZTk0ODNkY2M5MDk=/mini-bar-bag.jpeg',
            alt: 'Mini Bar Bag',
          },
          subtitle: 'Blue/Green',
          price: '$65',
          badge: 'New',
          description: <Description />,
          rating: 4.3,
          customFields,
        }}
      />
    </div>
  );
}

const customFields = [
  {
    name: 'SKU',
    value: 'MBB-BLUE-GRN',
  },
  {
    name: 'Material',
    value: 'Premium Canvas',
  },
  {
    name: 'Dimensions',
    value: '8" x 5" x 3"',
  },
  {
    name: 'Features',
    value: 'Adjustable Strap, Secure Closure, Interior Card Slots',
  },
];

function Description() {
  return (
    <>
      <p>
        Elevate your style with the <strong>Mini Bar Bag</strong>, a compact yet statement-making
        accessory designed for life on the go. Featuring a sleek, structured silhouette and a
        polished bar detail, this bag effortlessly transitions from day to night, adding a touch of
        sophistication to any ensemble.
      </p>
      <p>
        The Mini Bar Bag offers just enough space for your essentials, with a secure closure and an
        adjustable strap for versatile carrying options. Whether you&apos;re heading to brunch, a
        night out, or a special event, this chic mini bag is the perfect finishing touch to complete
        your look.
      </p>
    </>
  );
}
