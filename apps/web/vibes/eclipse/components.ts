import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'accordions',
    dependencies: ['clsx', '@radix-ui/react-accordion'],
    registryDependencies: [],
    files: ['components/accordions/index.tsx', 'components/accordions/styles.module.css'],
  },
  {
    name: 'button',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/button/index.tsx'],
  },
  {
    name: 'button-link',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/button-link/index.tsx'],
  },
  {
    name: 'card',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/card/index.tsx'],
  },
  {
    name: 'carousel',
    dependencies: ['clsx', 'embla-carousel-react', 'lucide-react'],
    registryDependencies: ['button'],
    files: ['components/carousel/index.tsx'],
  },
  {
    name: 'code-block',
    dependencies: ['clsx', 'prismjs'],
    registryDependencies: [],
    files: ['components/code-block/index.tsx'],
  },
  {
    name: 'copy-command',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/copy-command/index.tsx'],
  },
  {
    name: 'feature-grid',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/feature-grid/index.tsx'],
  },
  {
    name: 'feed',
    dependencies: [],
    registryDependencies: [],
    files: ['components/feed/index.tsx'],
  },
  {
    name: 'footer',
    dependencies: [],
    registryDependencies: [],
    files: ['components/footer/index.tsx'],
  },
  {
    name: 'form',
    dependencies: [],
    registryDependencies: [],
    files: ['components/form/index.tsx'],
  },
  {
    name: 'glow-container',
    dependencies: [],
    registryDependencies: [],
    files: ['components/glow-container/index.tsx'],
  },
  {
    name: 'list',
    dependencies: [],
    registryDependencies: [],
    files: ['components/list/index.tsx'],
  },
  {
    name: 'marquee',
    dependencies: [],
    registryDependencies: [],
    files: ['components/marquee/index.tsx'],
  },
  {
    name: 'navigation',
    dependencies: ['@radix-ui/react-accordion', '@radix-ui/react-navigation-menu'],
    registryDependencies: ['button'],
    files: ['components/navigation/index.tsx'],
  },
  {
    name: 'pricing-cards',
    dependencies: [],
    registryDependencies: [],
    files: ['components/pricing-cards/index.tsx'],
  },
  {
    name: 'table',
    dependencies: [],
    registryDependencies: [],
    files: ['components/table/index.tsx'],
  },
  {
    name: 'tabs',
    dependencies: ['@radix-ui/react-tabs'],
    registryDependencies: ['card'],
    files: ['components/tabs/index.tsx'],
  },
  {
    name: 'toast',
    dependencies: ['@radix-ui/react-toast'],
    registryDependencies: [],
    files: ['components/toast/index.tsx'],
  },
] satisfies Components
