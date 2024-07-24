import Navigation from '@/vibes/soul/components/navigation'

export default function Preview() {
  const links = [
    { text: 'Men', link: { href: '/men' } },
    { text: 'Women', link: { href: '/women' } },
    { text: 'Accessories', link: { href: '/accessories' } },
    { text: 'Stories', link: { href: '/stories' } },
  ]

  const actions = [{ text: 'Login', link: { href: '/login' } }]

  return (
    <div className="flex min-h-48 items-center justify-center bg-contrast-100 p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Navigation links={links} actions={actions} />
    </div>
  )
}
