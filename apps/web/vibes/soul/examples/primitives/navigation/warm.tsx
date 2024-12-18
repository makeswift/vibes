import { locales } from '@/vibes/soul/data/locales';
import { Navigation } from '@/vibes/soul/primitives/navigation';

import { localeAction, searchAction } from './actions';

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

export default function Preview() {
  return (
    <div className="relative min-h-48">
      <Navigation
        accountHref="#"
        activeLocaleId="en"
        cartCount={5}
        cartHref="#"
        links={navigationLinks}
        localeAction={localeAction}
        locales={locales}
        logo={logo}
        searchAction={searchAction('Warm')}
        searchCtaLabel="View all items"
        searchHref="#"
      />
    </div>
  );
}
