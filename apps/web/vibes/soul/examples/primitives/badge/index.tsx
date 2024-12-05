import { Badge } from '@/vibes/soul/primitives/badge';

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center gap-4">
      <Badge variant="pill">Pill</Badge>
      <Badge variant="rounded">Rounded</Badge>
    </div>
  );
}
