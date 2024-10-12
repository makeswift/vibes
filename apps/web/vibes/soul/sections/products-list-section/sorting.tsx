import { Suspense, use } from 'react'

import { Dropdown } from '@/vibes/soul/components/dropdown'

export interface Option {
  label: string
  href: string
}

interface Props {
  options: Option[] | Promise<Option[]>
  label?: string
}

export function Sorting({ label = 'Sort', options }: Props) {
  return (
    <Suspense fallback={<SortingSkeleton label={label} />}>
      <SortingResolved options={options} label={label} />
    </Suspense>
  )
}

function SortingResolved({ label = 'Sort', options }: Props) {
  const resolved = use(Promise.resolve(options))

  return <Dropdown label={label} variant="round" items={resolved.map(option => option.label)} />
}

export function SortingSkeleton({ label = 'Sort' }: { label?: string }) {
  return <Dropdown label={label} variant="round" disabled items={[]} />
}
