import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'accordions',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/accordions/index.tsx'],
    component: lazy(() => import('./components/accordions')),
  },
  {
    name: 'button',
    dependencies: [],
    registryDependencies: [],
    files: ['components/button/index.tsx'],
    component: lazy(() => import('./components/button')),
  },
  {
    name: 'category-card',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/category-card/index.tsx'],
    component: lazy(() => import('./components/category-card')),
  },
  {
    name: 'hero-category',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/hero-category/index.tsx'],
    component: lazy(() => import('./components/hero-category')),
  },
  {
    name: 'input',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/input/index.tsx'],
    component: lazy(() => import('./components/input')),
  },
  {
    name: 'navigation',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/navigation/index.tsx'],
    component: lazy(() => import('./components/navigation')),
  },
  {
    name: 'product-description',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/product-description/index.tsx'],
    component: lazy(() => import('./components/product-description')),
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/rating/index.tsx'],
    component: lazy(() => import('./components/rating')),
  },
] satisfies Components
