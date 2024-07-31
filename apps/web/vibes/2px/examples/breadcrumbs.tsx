import Breadcrumbs, { Breadcrumb } from '@/vibes/2px/components/breadcrumbs'

export default function Preview() {
  const crumb = [
    { label: 'Home', link: { href: '/', target: '_self' } },
    { label: '2px', link: { href: '/docs/2px', target: '_self' } },
    { label: 'Breadcrumbs', link: { href: '/docs/2px/breadcrumbs', target: '_self' } },
  ] as Breadcrumb[]

  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Breadcrumbs crumb={crumb} />
    </div>
  )
}
