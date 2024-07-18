import { Footer } from '@/vibes/eclipse/components/footer'

export default function Preview() {
  const footerGroups = [
    {
      heading: 'Company',
      icon: {
        url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
        dimensions: { width: 20, height: 20 },
      },
      iconAlt: 'Company',
      footerLinks: [
        { text: 'About', link: { href: '/about' } },
        { text: 'Careers', link: { href: '/careers' } },
        { text: 'Contact', link: { href: '/contact' } },
      ],
    },
    {
      heading: 'Resources',
      icon: {
        url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
        dimensions: { width: 20, height: 20 },
      },
      iconAlt: 'Resources',
      footerLinks: [
        { text: 'Blog', link: { href: '/blog' } },
        { text: 'Help Center', link: { href: '/help' } },
        { text: 'Guides', link: { href: '/guides' } },
      ],
    },
    {
      heading: 'Legal',
      icon: {
        url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
        dimensions: { width: 20, height: 20 },
      },
      iconAlt: 'Legal',
      footerLinks: [
        { text: 'Privacy Policy', link: { href: '/privacy' } },
        { text: 'Terms of Service', link: { href: '/terms' } },
      ],
    },
    {
      heading: 'Social',
      icon: {
        url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
        dimensions: { width: 20, height: 20 },
      },
      iconAlt: 'Social',
      footerLinks: [
        { text: 'Twitter', link: { href: '/privacy' } },
        { text: 'Facebook', link: { href: '/terms' } },
        { text: 'LinkedIn', link: { href: '/terms' } },
      ],
    },
  ]

  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Footer className="w-full" footerGroups={footerGroups} />
    </div>
  )
}
