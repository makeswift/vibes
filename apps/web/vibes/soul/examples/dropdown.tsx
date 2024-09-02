import Dropdown from '@/vibes/soul/components/dropdown'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-10 p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-20">
      <Dropdown
        label="Dropdown"
        items={['Most Recent', 'Most Popular', 'Price: Low to High', 'Price: High to Low']}
      />
    </div>
  )
}
