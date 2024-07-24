import Navigation from '@/vibes/soul/components/navigation'

export default function Preview() {
  const mainLinks = [
    { text: 'Men', link: { href: '/' } },
    { text: 'Women', link: { href: '/about' } },
    { text: 'Accessories', link: { href: '/services' } },
    { text: 'Stories', link: { href: '/contact' } },
  ]

  const secondaryLinks = [{ text: 'Login', link: { href: '/login' } }]

  return (
    <div className="flex min-h-48 items-center justify-center bg-foreground p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Navigation mainLinks={mainLinks} secondaryLinks={secondaryLinks} />
    </div>
  )
}
