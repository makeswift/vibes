import { OffsetPagination } from '@/vibes/soul/primitives/offset-pagination'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center p-5 @container">
      <OffsetPagination pages={8} />
    </div>
  )
}
