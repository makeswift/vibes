import { Breadcrumb, Breadcrumbs } from '@/vibes/soul/components/breadcrumbs'

export const breadcrumbs: Breadcrumb[] = [
  {
    id: '1',
    label: 'Home',
    href: '#',
  },
  {
    id: '2',
    label: 'Plants',
    href: '#',
  },
  {
    id: '3',
    label: 'Indoor',
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
