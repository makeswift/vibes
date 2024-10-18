import { CompareSection } from '@/vibes/soul/sections/compare-section'

export default function Preview({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  return <CompareSection />
}
