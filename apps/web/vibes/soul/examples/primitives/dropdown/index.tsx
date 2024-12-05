import { Dropdown } from '@/vibes/soul/primitives/dropdown';

export default function Preview() {
  return (
    <div className="mx-auto mt-10 flex h-screen max-w-52 flex-col gap-4">
      <Dropdown
        items={['Most Recent', 'Most Popular', 'Price: Low to High', 'Price: High to Low']}
        label="Dropdown"
      />
      <Dropdown
        error="You must select an option"
        items={['Most Recent', 'Most Popular', 'Price: Low to High', 'Price: High to Low']}
        label="Dropdown"
      />
    </div>
  );
}
