import { Pagination } from '@/vibes/soul/components/pagination'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center p-5 @container">
      <Pagination pages={8} />
    </div>
  )
}
