import { locales } from '@/vibes/soul/data/locales'
import { localeAction, searchAction } from '@/vibes/soul/examples/primitives/navigation/actions'
import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/luxury'
import { HeaderSection } from '@/vibes/soul/sections/header-section'

export default function Preview() {
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
          links: navigationLinks,
          logo,
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
