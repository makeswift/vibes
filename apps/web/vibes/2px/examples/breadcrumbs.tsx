import Breadcrumbs from '@/vibes/2px/components/breadcrumbs'

export default function Preview() {
  const crumb = [
    { id: '1', name: 'Home', link: { href: '/' } },
    { id: '2', name: '2px', link: { href: '/docs/2px' } },
    { id: '3', name: 'Breadcrumbs', link: { href: '/docs/2px/breadcrumbs' } },
  ]

  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Breadcrumbs breadcrumbs={crumb} />
    </div>
  )
}
