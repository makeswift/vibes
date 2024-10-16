import { Brand, Breadcrumb } from '@/vibes/soul/types'

export const getBreadcrumbs = (brand: Brand): Breadcrumb[] => {
  return breadcrumbs[brand]
}

interface BrandBreadcrumbsMap {
  [key: string]: Breadcrumb[]
}

const breadcrumbs: BrandBreadcrumbsMap = {
  electric: [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'Plants',
      href: '#',
    },
    {
      label: 'Indoor',
      href: '#',
    },
  ],
  luxury: [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'Shoes',
      href: '#',
    },
    {
      label: 'Flats',
      href: '#',
    },
  ],
  warm: [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'Bags',
      href: '#',
    },
    {
      label: 'Handle Bags',
      href: '#',
    },
  ],
}
