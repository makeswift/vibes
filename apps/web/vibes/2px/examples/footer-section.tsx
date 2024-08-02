import FooterSection from '@/vibes/2px/components/footer-section'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <FooterSection
        title="VIBE DESIGNED AND built by WWW.TINLOOF.COM"
        logo={{ url: '/2px/logo.svg', alt: '2px Logo' }}
        legal={{ copyright: '© 2024 2px', builtBy: 'Built by Tinloof' }}
        socials={{
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          twitter: 'https://www.twitter.com',
          pinterest: 'https://www.pinterest.com',
        }}
        groups={[
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
        ]}
      />
    </div>
  )
}
