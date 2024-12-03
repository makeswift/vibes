import { locales } from '@/vibes/soul/data/locales'
import { localeAction, searchAction } from '@/vibes/soul/examples/primitives/navigation/actions'
import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/luxury'
import { HeaderSection } from '@/vibes/soul/sections/header-section'

export default function Preview() {
  const linksPromise = new Promise<{ href: string; label: string }[]>(res =>
    setTimeout(() => res(navigationLinks), 3000)
  )
  const cartCountPromise = new Promise<number>(res => setTimeout(() => res(3), 2000))
  const logoPromise = new Promise<string | { src?: string; alt: string }>(res =>
    setTimeout(() => res(logo), 1000)
  )

  return (
    <>
      <HeaderSection
        banner={{
          children: (
            <>
              Get <strong>15% off</strong> and free shipping with discount code{' '}
              <strong>&quot;welcome&quot;</strong>
            </>
          ),
        }}
        navigation={{
          links: linksPromise,
          logo: logoPromise,
          cartCount: cartCountPromise,
          cartHref: '#',
          accountHref: '#',
          activeLocaleId: 'US',
          searchHref: '#',
          locales,
          searchAction: searchAction('Luxury'),
          localeAction: localeAction,
        }}
      />
      <div className="h-[2000px] w-full bg-contrast-100"></div>
    </>
  )
}
