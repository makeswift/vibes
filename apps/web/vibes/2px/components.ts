import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'accordions',
    dependencies: ['@radix-ui/react-accordion'],
    registryDependencies: [],
    files: ['./components/accordions/index.tsx'],
    component: lazy(() => import('./components/accordions')),
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/rating/index.tsx'],
    component: lazy(() => import('./components/rating')),
  },
  {
    name: 'button',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/button/index.tsx'],
    component: lazy(() => import('./components/button')),
  },
  {
    name: 'breadcrumbs',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/breadcrumbs/index.tsx'],
    component: lazy(() => import('./components/breadcrumbs')),
  },
  {
    name: 'tabs',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/tabs/index.tsx'],
    component: lazy(() => import('./components/tabs')),
  },
  {
    name: 'badge',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/badge/index.tsx'],
    component: lazy(() => import('./components/badge')),
  },
  {
    name: 'product-card',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/product-card/index.tsx'],
    component: lazy(() => import('./components/product-card')),
  },
] satisfies Components
