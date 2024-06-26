import { Navigation } from '@/registry/eclipse/components/navigation'

export default function Preview() {
  const mainLinks = [
    { text: 'Home', link: { href: '/' } },
    { text: 'About', link: { href: '/about' } },
    { text: 'Services', link: { href: '/services' } },
    { text: 'Contact', link: { href: '/contact' } },
  ]

  const secondaryLinks = [{ text: 'Login', link: { href: '/login' } }]

  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] sm:min-h-64 lg:min-h-80">
      <Navigation className="w-full" mainLinks={mainLinks} secondaryLinks={secondaryLinks} />
    </div>
  )
}
