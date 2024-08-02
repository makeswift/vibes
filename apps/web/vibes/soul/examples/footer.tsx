import Footer from '@/vibes/soul/components/footer'

export const footerLinks = [
  {
    category: 'Categories',
    categoryLinks: [
      { text: 'Coats & Jackets', href: '/men/coats-jackets' },
      { text: 'T-Shirts', href: '/men/t-shirts' },
      { text: 'Sweatshirts', href: '/men/sweatshirts' },
      { text: 'Pants', href: '/men/pants' },
    ],
  },
  {
    category: 'Company',
    categoryLinks: [
      { text: 'About', href: '/about' },
      { text: 'Stories', href: '/about/stories' },
      { text: 'Careers', href: '/about/careers' },
      { text: 'Stores', href: '/about/stores' },
    ],
  },
  {
    category: 'Help & Support',
    categoryLinks: [
      { text: 'FAQs', href: '/support/faqs' },
      { text: 'Contact Us', href: '/support/contact-us' },
      { text: 'Returns', href: '/support/returns' },
      { text: 'Shipping', href: '/support/shipping' },
    ],
  },
]

export default function Preview() {
  return <Footer links={footerLinks} logo={{ alt: 'SOUL' }} companyName="Soul" />
}
