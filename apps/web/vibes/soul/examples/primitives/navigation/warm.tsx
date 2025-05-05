import { localeAction, searchAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { Navigation } from '@/vibes/soul/primitives/navigation';

export default function Preview() {
  const linksPromise = new Promise<Array<{ href: string; label: string }>>((res) =>
    setTimeout(() => res(navigationLinks), 1000),
  );
  const cartCountPromise = new Promise<number>((res) => setTimeout(() => res(3), 2000));
  const logoPromise = new Promise<string | { src: string; alt: string }>((res) =>
    setTimeout(() => res(logo), 1000),
  );

  return (
    <div className="bg-contrast-100 relative min-h-screen p-4">
      <Navigation
        accountHref="#"
        activeLocaleId="en"
        cartCount={cartCountPromise}
        cartHref="#"
        links={linksPromise}
        localeAction={localeAction}
        locales={locales}
        logo={logoPromise}
        searchAction={searchAction('Warm')}
        searchHref="#"
      />
    </div>
  );
}

export const navigationLinks = [
  {
    label: 'Shop',
    href: '#',
    groups: [
      {
        label: 'Bike Bags',
        href: '#',
        links: [
          { label: 'New Arrivals', href: '#' },
          { label: 'Best Sellers', href: '#' },
          { label: 'Sale', href: '#' },
        ],
      },
      {
        label: 'Bags You Wear',
        href: '#',
        links: [
          { label: 'Small', href: '#' },
          { label: 'Medium', href: '#' },
          { label: 'Large', href: '#' },
        ],
      },
      {
        label: 'Camera Straps',
        href: '#',
        links: [
          { label: 'Wrist Straps', href: '#' },
          { label: 'Body Straps', href: '#' },
          { label: 'Camera Padding Inserts', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Journal',
    href: '#',
    groups: [
      {
        links: [
          { label: 'Adventures', href: '#' },
          { label: 'Bike Check', href: '#' },
          { label: 'How Tos', href: '#' },
          { label: 'Interviews', href: '#' },
        ],
      },
      {
        links: [
          { label: 'News', href: '#' },
          { label: 'Videos', href: '#' },
          { label: 'All', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '#',
    groups: [
      {
        href: '#',
        links: [
          { label: 'Our Story', href: '#' },
          { label: 'Policies', href: '#' },
          { label: 'Retailers', href: '#' },
          { label: 'Press', href: '#' },
        ],
      },
    ],
  },
];

export const logo = {
  src: '/soul/outer-shell-logo.png',
  alt: 'Outer Shell Logo',
};

const locales = [
  { id: 'en', label: 'United States' },
  { id: 'fr', label: 'France' },
  { id: 'de', label: 'Denmark' },
  { id: 'it', label: 'Italy' },
];
