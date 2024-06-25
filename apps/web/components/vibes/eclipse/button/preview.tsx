import Button from '.'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Button variant="primary" size="default">
        Text
      </Button>
    </div>
  )
}
