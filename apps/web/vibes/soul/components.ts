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
    name: 'announcement-bar',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/announcement-bar/index.tsx'],
    component: lazy(() => import('./components/announcement-bar')),
  },
  {
    name: 'button',
    dependencies: [],
    registryDependencies: [],
    files: ['components/button/index.tsx'],
    component: lazy(() => import('./components/button')),
  },
  {
    name: 'categories',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/categories/index.tsx'],
    component: lazy(() => import('./components/categories')),
  },
  {
    name: 'category-card',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/category-card/index.tsx'],
    component: lazy(() => import('./components/category-card')),
  },
  {
    name: 'checkbox',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/checkbox/index.tsx'],
    component: lazy(() => import('./components/checkbox')),
  },
  {
    name: 'compare',
    dependencies: ['checkbox'],
    registryDependencies: [],
    files: ['./components/compare/index.tsx'],
    component: lazy(() => import('./components/compare')),
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
