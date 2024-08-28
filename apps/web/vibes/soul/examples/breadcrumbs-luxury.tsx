import { Breadcrumb } from '@/vibes/soul/components/breadcrumbs'
import Breadcrumbs from '@/vibes/soul/components/breadcrumbs'

export const breadcrumbs: Breadcrumb[] = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Shoes',
    href: '#',
  },
  {
    label: 'Boots',
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
