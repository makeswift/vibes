import Button from '@/vibes/2px/components/button'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center gap-5 bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Button variant="primary" loading={false} asChild={false}>
        Button
      </Button>
      <Button variant="secondary" loading={false} asChild={false}>
        Button
      </Button>
      <Button variant="primary" loading={true} asChild={false}>
        Button
      </Button>
      <Button variant="secondary" loading={true} asChild={false}>
        Button
      </Button>
    </div>
  )
}