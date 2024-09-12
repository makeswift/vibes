import { Breadcrumb, Breadcrumbs } from '@/vibes/soul/components/breadcrumbs'

export const breadcrumbs: Breadcrumb[] = [
  {
    id: '1',
    label: 'Home',
    href: '#',
  },
  {
    id: '2',
    label: 'Bags',
    href: '#',
  },
  {
    id: '3',
    label: 'Handle Bags',
    href: '#',
  },
]

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </div>
  )
}
