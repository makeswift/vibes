import Link from 'next/link'

import FooterSection from '@/vibes/2px/components/footer-section'

import FacebookIcon from '../components/icons/FacebookIcon'
import InstagramIcon from '../components/icons/InstagramIcon'
import PinterestIcon from '../components/icons/PinterestIcon'
import TwitterIcon from '../components/icons/TwitterIcon'

export const footerGroups: {
  title: string
  links: {
    label: string
    href: string
    target: '_self' | '_blank'
  }[]
}[] = [
  {
    title: 'categories',
    links: [
      {
        label: 'On sale',
        href: '/',
        target: '_blank',
      },
      {
        label: 'New arrivals',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Men',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Women',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Accessories',
        href: '/',
        target: '_blank',
      },
    ],
  },
  {
    title: 'top brands',
    links: [
      {
        label: 'Arcminute',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Base London',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Birkenstock',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Good For Nothing',
        href: '/',
        target: '_blank',
      },
    ],
  },
  {
    title: 'about us',
    links: [
      {
        label: 'Contact us',
        href: '/',
        target: '_blank',
      },
      {
        label: 'About brand',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Blog',
        href: '/',
        target: '_blank',
      },
    ],
  },
  {
    title: 'help',
    links: [
      {
        label: 'Shipping & returns',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Privacy policy',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Terms & conditions',
        href: '/',
        target: '_blank',
      },
      {
        label: 'FAQ',
        href: '/',
        target: '_blank',
      },
    ],
  },
]

export const footerSocials = [
  {
    link: 'https://www.facebook.com',
    icon: <FacebookIcon />,
  },
  {
    link: 'https://www.instagram.com',
    icon: <InstagramIcon />,
  },
  {
    link: 'https://www.twitter.com',
    icon: <TwitterIcon />,
  },
  {
    link: 'https://www.pinterest.com',
    icon: <PinterestIcon />,
  },
]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white @container sm:min-h-64 lg:min-h-80">
      <FooterSection
        title={
          <>
            VIBE DESIGNED AND built by&nbsp;
            <Link href="www.tinloof.com" target="_blank" className="hover:underline">
              WWW.TINLOOF.COM
            </Link>
          </>
        }
        logo={{ url: '/2px/logo.svg', alt: '2px Logo', width: 293, height: 149 }}
        footNote={
          <p className="flex gap-6">
            <span>© 2024 2px</span>
            <span>
              Built by{' '}
              <Link href="www.tinloof.com" target="_blank">
                Tinloof
              </Link>
            </span>
          </p>
        }
        socials={footerSocials}
        groups={footerGroups}
      />
    </div>
  )
}
