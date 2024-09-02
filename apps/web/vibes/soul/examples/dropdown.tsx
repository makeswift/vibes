import Dropdown from '@/vibes/soul/components/dropdown'

export default function Preview() {
  return (
    <div className="mx-auto mt-10 h-screen max-w-52">
      <Dropdown
        label="Dropdown"
        items={['Most Recent', 'Most Popular', 'Price: Low to High', 'Price: High to Low']}
      />
    </div>
  )
}
