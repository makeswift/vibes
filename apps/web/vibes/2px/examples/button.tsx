import Button from '../components/button'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Button text="Button" variant="primary" loading={false} size="large" />
    </div>
  )
}
