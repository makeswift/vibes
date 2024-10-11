import { Dropdown } from '@/vibes/soul/components/dropdown'

export default function Preview() {
  return (
    <div className="mx-auto mt-10 flex h-screen max-w-52 flex-col gap-4">
      <Dropdown
        label="Dropdown"
        items={['Most Recent', 'Most Popular', 'Price: Low to High', 'Price: High to Low']}
      />
      <Dropdown
        label="Dropdown"
        items={['Most Recent', 'Most Popular', 'Price: Low to High', 'Price: High to Low']}
        error="You must select an option"
      />
    </div>
  )
}
