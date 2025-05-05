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
          title: 'Philodendron Imperial Red',
          image: {
            src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
            alt: 'Philodendron Imperial Red',
          },
          subtitle: 'Blue/Black/Green',
          price: '$44.95',
          badge: 'New',
          description: <Description />,
          rating: 4.5,
          customFields,
        }}
      />
    </div>
  );
}

const customFields = [
  {
    name: 'SKU',
    value: 'RR-PLTR',
  },
  {
    name: 'Weight',
    value: '18 oz',
  },
  {
    name: 'Material',
    value: 'Clay',
  },
  {
    name: 'Ceramic Features',
    value: 'Hand-Finished, High-Fired Stoneware with Waterproof Matte Glaze',
  },
];

function Description() {
  return (
    <>
      <p>
        Bring a touch of the tropics into your home with the stunning{' '}
        <strong>Philodendron Imperial Red</strong>. This vibrant houseplant features broad, glossy
        leaves that emerge a deep burgundy-red and mature to a rich, dark green, creating a striking
        contrast in any space. Known for its easy-care nature, the Imperial Red thrives in bright,
        indirect light and requires minimal maintenance, making it perfect for both beginners and
        seasoned plant lovers.
      </p>
      <p>
        Add a bold pop of color to your living room, office, or bedroom with this eye-catching
        plant. Its upright, compact growth habit makes it ideal for tabletops, shelves, or as a
        statement piece on the floor. Not only does the Philodendron Imperial Red enhance your
        décor, but it also helps purify the air, promoting a healthier indoor environment.
      </p>
      <ul>
        <li>Dramatic red and green foliage</li>
        <li>Low-maintenance and easy to grow</li>
        <li>Air-purifying qualities</li>
        <li>Perfect for home or office décor</li>
      </ul>
      <p>
        Brighten up your space and enjoy the lush beauty of the Philodendron Imperial Red today!
      </p>
    </>
  );
}
