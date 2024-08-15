'use client'

import Header from '@/vibes/2px/components/header'

import Logo from './assets/logo.svg'

export const headerLinks = [
  {
    label: 'Shop All',
    href: '/',
  },
  {
    label: 'Collections',
    groups: [
      {
        label: 'Column title',
        href: '/',
        links: [
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
          {
            label: 'Concrete dreams',
            href: '/',
          },
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
        ],
      },
      {
        label: 'Column title',
        href: '/',
        links: [
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
          {
            label: 'Concrete dreams',
            href: '/',
          },
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
        ],
      },
      {
        label: 'Column title',
        href: '/',
        links: [
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
          {
            label: 'Concrete dreams',
            href: '/',
          },
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
        ],
      },
      {
        label: 'Column title',
        href: '/',
        links: [
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
          {
            label: 'Concrete dreams',
            href: '/',
          },
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
        ],
      },
    ],
  },
  {
    label: 'Learn',
    groups: [
      {
        label: 'Column title',
        href: '/',
        links: [
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
          {
            label: 'Concrete dreams',
            href: '/',
          },
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
        ],
      },
      {
        label: 'Column title',
        href: '/',
        links: [
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
          {
            label: 'Concrete dreams',
            href: '/',
          },
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
        ],
      },
      {
        label: 'Column title',
        href: '/',
        links: [
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
          {
            label: 'Concrete dreams',
            href: '/',
          },
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
        ],
      },
      {
        label: 'Column title',
        href: '/',
        links: [
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
          {
            label: 'Concrete dreams',
            href: '/',
          },
          {
            label: 'Summer 2024',
            href: '/',
          },
          {
            label: 'Spring 2024',
            href: '/',
          },
          {
            label: 'Winter 2024',
            href: '/',
          },
        ],
      },
    ],
  },
]

export default function Preview() {
  return (
    <div className="flex min-h-48 max-w-[90rem] bg-white sm:min-h-64 lg:min-h-80">
      <Header
        accountHref="/"
        cartHref="/"
        searchAction={async () => []}
        links={headerLinks}
        activeLocale="English"
        cartCount={3}
        locales={[
          {
            id: 'en',
            region: 'US',
            language: 'English',
          },
          {
            id: 'fr',
            region: 'FR',
            language: 'Français',
          },
        ]}
        logo={{
          url: Logo.src,
          altText: '2px Logo',
        }}
      />
    </div>
  )
}
