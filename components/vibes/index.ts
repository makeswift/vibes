import { lazy } from 'react'

const components = {
  'eclipse/accordions': lazy(() => import('./eclipse/accordions/preview')),
  'eclipse/button': lazy(() => import('./eclipse/button/preview')),
  'eclipse/card': lazy(() => import('./eclipse/card/preview')),
  'eclipse/code-block': lazy(() => import('./eclipse/code-block/preview')),
  'eclipse/copy-command': lazy(() => import('./eclipse/copy-command/preview')),
  'eclipse/feature-grid': lazy(() => import('./eclipse/feature-grid/preview')),
  'eclipse/feed': lazy(() => import('./eclipse/feed/preview')),
  'eclipse/footer': lazy(() => import('./eclipse/footer/preview')),
  'eclipse/form': lazy(() => import('./eclipse/form/preview')),
  'eclipse/glow-container': lazy(() => import('./eclipse/glow-container/preview')),
  'eclipse/list': lazy(() => import('./eclipse/list/preview')),
  'eclipse/marquee': lazy(() => import('./eclipse/marquee/preview')),
  'eclipse/navigation': lazy(() => import('./eclipse/navigation/preview')),
  'eclipse/pricing-cards': lazy(() => import('./eclipse/pricing-cards/preview')),
  'eclipse/table': lazy(() => import('./eclipse/table/preview')),
  'eclipse/tabs': lazy(() => import('./eclipse/tabs/preview')),
  'eclipse/video': lazy(() => import('./eclipse/video/preview')),
} as const

export default components
