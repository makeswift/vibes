import { localeAction, searchAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/luxury';
import { Header } from '@/vibes/soul/sections/header';

export default function Preview() {
  const linksPromise = new Promise<Array<{ href: string; label: string }>>((res) =>
    setTimeout(() => res(navigationLinks), 3000),
  );
  const cartCountPromise = new Promise<number>((res) => setTimeout(() => res(3), 2000));
  const logoPromise = new Promise<string | { src: string; alt: string }>((res) =>
    setTimeout(() => res(logo), 1000),
  );

  return (
    <>
      <Header
        banner={{
          id: 'example-banner',
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
      <div className="h-[2000px] w-full bg-contrast-100" />
    </>
  );
}

const locales = [
  { id: 'en', label: 'United States' },
  { id: 'fr', label: 'France' },
  { id: 'de', label: 'Denmark' },
  { id: 'it', label: 'Italy' },
];
