import { Badge } from '@/vibes/soul/components/badge'

export default function Preview() {
  return (
    <div className="flex h-screen gap-4 items-center justify-center">
      <Badge>Round</Badge>
      <Badge variant="square">Square</Badge>
    </div>
  )
}
