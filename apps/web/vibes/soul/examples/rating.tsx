import Rating from '@/vibes/soul/components/rating'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Rating rating={3.5} />
    </div>
  )
}
