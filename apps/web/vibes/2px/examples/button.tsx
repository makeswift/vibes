import Button from '@/vibes/2px/components/button'

export default function Preview() {
  return (
    <div className="flex min-h-48 w-full flex-col items-center  justify-center gap-5 bg-background p-5 font-body sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <div className="w-full @container">
        <Button variant="primary" loading={false} asChild={false}>
          Button
        </Button>
      </div>
      <div className="w-full @container">
        <Button variant="secondary" loading={false} asChild={false}>
          Button
        </Button>
      </div>
      <div className="w-full @container">
        <Button variant="primary" loading={true} asChild={false}>
          Button
        </Button>
      </div>
      <div className="w-full @container">
        <Button variant="secondary" loading={true} asChild={false}>
          Button
        </Button>
      </div>
    </div>
  )
}
