import Button from '@/vibes/soul/components/button'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-10 p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-20">
      <Button variant="primary">Shop Now</Button>
      <Button variant="secondary">Shop Now</Button>
      <Button variant="tertiary">Shop Now</Button>
    </div>
  )
}
