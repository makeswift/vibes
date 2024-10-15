import { Pagination } from '@/vibes/soul/primitives/pagination'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center p-5 @container">
      <Pagination pages={8} />
    </div>
  )
}
