import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const examples = [
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
  {
    name: 'tabs-example',
    dependencies: [],
    registryDependencies: ['tabs'],
    files: ['examples/tabs.tsx'],
    component: lazy(() => import('./examples/tabs')),
  },
] satisfies Components
