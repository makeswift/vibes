import Button from '@/vibes/soul/components/button'

export default function Preview() {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-10 p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-20">
      <Button variant="primary" size="default">
        Shop Now
      </Button>
      <Button variant="dark" size="default">
        Shop Now
      </Button>
      <Button variant="light" size="default">
        Shop Now
      </Button>
    </div>
  )
}
