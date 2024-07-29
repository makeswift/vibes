import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const examples = [
  {
    name: 'accordions-example',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['examples/accordions.tsx'],
    component: lazy(() => import('./examples/accordions')),
  },
  {
    name: 'announcement-bar-example',
    dependencies: [],
    registryDependencies: ['announcement-bar'],
    files: ['examples/announcement-bar.tsx'],
    component: lazy(() => import('./examples/announcement-bar')),
  },
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
  {
    name: 'categories-example',
    dependencies: [],
    registryDependencies: ['categories'],
    files: ['examples/categories.tsx'],
    component: lazy(() => import('./examples/categories')),
  },
  {
    name: 'category-card-example',
    dependencies: [],
    registryDependencies: ['category-card'],
    files: ['examples/category-card.tsx'],
    component: lazy(() => import('./examples/category-card')),
  },
  {
    name: 'checkbox-example',
    dependencies: [],
    registryDependencies: ['checkbox'],
    files: ['examples/checkbox.tsx'],
    component: lazy(() => import('./examples/checkbox')),
  },
  {
    name: 'compare-example',
    dependencies: ['checkbox'],
    registryDependencies: [],
    files: ['examples/compare.tsx'],
    component: lazy(() => import('./examples/compare')),
  },
  {
    name: 'hero-example',
    dependencies: [],
    registryDependencies: ['hero'],
    files: ['examples/hero.tsx'],
    component: lazy(() => import('./examples/hero')),
  },
  {
    name: 'hero-category-example',
    dependencies: [],
    registryDependencies: ['hero-category'],
    files: ['examples/hero-category.tsx'],
    component: lazy(() => import('./examples/hero-category')),
  },
  {
    name: 'input-example',
    dependencies: [],
    registryDependencies: ['input'],
    files: ['examples/input.tsx'],
    component: lazy(() => import('./examples/input')),
  },
  {
    name: 'navigation-example',
    dependencies: [],
    registryDependencies: ['navigation'],
    files: ['examples/navigation.tsx'],
    component: lazy(() => import('./examples/navigation')),
  },
  {
    name: 'product-description-example',
    dependencies: [],
    registryDependencies: ['product-description'],
    files: ['examples/product-description.tsx'],
    component: lazy(() => import('./examples/product-description')),
  },
  {
    name: 'rating-example',
    dependencies: [],
    registryDependencies: ['rating'],
    files: ['examples/rating.tsx'],
    component: lazy(() => import('./examples/rating')),
  },
] satisfies Components
