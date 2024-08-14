import Footer from '@/vibes/soul/components/footer'

export const footerLinks = [
  {
    title: 'Categories',
    links: [
      { label: 'Coats & Jackets', href: '#' },
      { label: 'T-Shirts', href: '#' },
      { label: 'Sweatshirts', href: '#' },
      { label: 'Pants', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Stories', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Stores', href: '#' },
    ],
  },
  {
    title: 'Help & Support',
    links: [
      { label: 'FAQs', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Shipping', href: '#' },
    ],
  },
]

const copyright = `© ${new Date().getFullYear()} SOUL - Powered by BigCommerce`

export default function Preview() {
  return (
    <Footer
      sections={footerLinks}
      logo={{
        src: 'https://rstr.in/monogram/vibes/5UckSov0byo',
        altText: 'SOUL Logo',
      }}
      copyright={copyright}
    />
  )
}
