import { Spinner } from '@/vibes/soul/primitives/spinner'

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center gap-10">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  )
}
