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
        searchAction={searchAction('Luxury')}
        searchHref="#"
      />
    </div>
  );
}

export const navigationLinks = [
  {
    label: 'New',
    href: '#',
  },
  {
    label: 'Sale',
    href: '#',
  },
  {
    label: 'Footware',
    href: '#',
    groups: [
      {
        label: 'By Category',
        href: '#',
        links: [
          { label: 'Sandals', href: '#' },
          { label: 'Flats', href: '#' },
          { label: 'Sneakers', href: '#' },
          { label: 'Loafers', href: '#' },
          { label: 'Heels', href: '#' },
          { label: 'Boots', href: '#' },
          { label: 'Sale', href: '#' },
          { label: 'View All', href: '#' },
          { label: 'Last Chance', href: '#' },
        ],
      },
      {
        label: 'By Collection',
        href: '#',
        links: [
          { label: 'Fall Drop One', href: '#' },
          { label: 'Travel Edit', href: '#' },
          { label: 'Ballet Everyday', href: '#' },
          { label: 'FRĒDA X WOLFSPOUT', href: '#' },
          { label: 'Loafer Shop', href: '#' },
          { label: 'Best of FRĒDA', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Discover',
    href: '#',
    groups: [
      {
        label: 'Find US',
        href: '#',
        links: [
          { label: 'Locations', href: '#' },
          { label: 'Events', href: '#' },
          { label: 'Press', href: '#' },
          { label: 'Contact Us', href: '#' },
        ],
      },
      {
        label: 'Who is FRĒDA?',
        href: '#',
        links: [
          { label: 'Behind the Brand', href: '#' },
          { label: 'Our Family-Run Factories', href: '#' },
          { label: 'Journal', href: '#' },
          { label: 'Careers', href: '#' },
        ],
      },
    ],
  },
];

export const logo = {
  src: '/soul/freda-logo.png',
  alt: 'Freda Salvador Logo',
};

const locales = [
  { id: 'en', label: 'United States' },
  { id: 'fr', label: 'France' },
  { id: 'de', label: 'Denmark' },
  { id: 'it', label: 'Italy' },
];
