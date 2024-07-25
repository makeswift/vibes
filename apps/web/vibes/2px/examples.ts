import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const examples = [
  {
    name: 'radio-button-example',
    dependencies: [],
    registryDependencies: ['radio-button'],
    files: ['examples/radio-button.tsx'],
    component: lazy(() => import('./examples/radio-button')),
  },
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
] satisfies Components
