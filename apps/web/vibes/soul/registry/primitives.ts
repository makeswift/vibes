import { Components } from '@/vibes/schema';

export const primitives = [
  {
    name: 'accordion',
    dependencies: ['clsx', '@radix-ui/react-accordion'],
    registryDependencies: [],
    files: ['primitives/accordion/index.tsx'],
  },
  {
    name: 'alert',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['button'],
    files: ['primitives/alert/index.tsx'],
  },
  {
    name: 'animated-underline',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/animated-underline/index.tsx'],
  },
  {
    name: 'badge',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/badge/index.tsx'],
  },
  {
    name: 'banner',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/banner/index.tsx'],
  },
  {
    name: 'blog-post-card',
    dependencies: ['clsx'],
    registryDependencies: ['skeleton'],
    files: ['primitives/blog-post-card/index.tsx'],
  },
  {
    name: 'button',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/button/index.tsx'],
  },
  {
    name: 'button-link',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/button-link/index.tsx'],
  },
  {
    name: 'calendar',
    dependencies: ['clsx', 'lucide-react', 'react-day-picker'],
    registryDependencies: [],
    files: ['primitives/calendar/index.tsx'],
  },
  {
    name: 'card',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['skeleton'],
    files: ['primitives/card/index.tsx'],
  },
  {
    name: 'carousel',
    dependencies: ['embla-carousel-react', 'lucide-react', 'clsx'],
    registryDependencies: [],
    files: ['primitives/carousel/index.tsx'],
  },
  {
    name: 'chip',
    dependencies: ['lucide-react'],
    registryDependencies: [],
    files: ['primitives/chip/index.tsx'],
  },
  {
    name: 'compare-card',
    dependencies: ['clsx'],
    registryDependencies: ['skeleton', 'product-card', 'rating', 'button-link', 'reveal'],
    files: [
      'primitives/compare-card/index.tsx',
      'primitives/compare-card/add-to-cart-form.tsx',
      'primitives/compare-card/schema.ts',
    ],
  },
  {
    name: 'compare-drawer',
    dependencies: ['@radix-ui/react-portal', 'lucide-react', 'nuqs'],
    registryDependencies: ['button-link', 'toaster'],
    files: ['primitives/compare-drawer/index.tsx', 'primitives/compare-drawer/loader.ts'],
  },
  {
    name: 'counter',
    dependencies: ['lucide-react', 'clsx'],
    registryDependencies: [],
    files: ['primitives/counter/index.tsx'],
  },
  {
    name: 'cursor-pagination',
    dependencies: ['lucide-react', 'nuqs', 'clsx'],
    registryDependencies: ['streamable', 'skeleton'],
    files: ['primitives/cursor-pagination/index.tsx'],
  },
  {
    name: 'favorite',
    dependencies: ['@radix-ui/react-toggle'],
    registryDependencies: [],
    files: [
      'primitives/favorite/index.tsx',
      'primitives/favorite/heart.tsx',
      'primitives/favorite/styles.css',
    ],
  },
  {
    name: 'icon',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['skeleton'],
    files: ['primitives/icon/index.tsx'],
  },
  {
    name: 'logo',
    dependencies: ['clsx'],
    registryDependencies: ['streamable', 'skeleton'],
    files: ['primitives/logo/index.tsx'],
  },
  {
    name: 'modal',
    dependencies: ['@radix-ui/react-dialog', 'clsx'],
    registryDependencies: [],
    files: ['primitives/modal/index.tsx'],
  },
  {
    name: 'navigation',
    dependencies: [
      '@conform-to/react',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      'clsx',
      'lodash.debounce',
      'lucide-react',
    ],
    registryDependencies: [
      'form-status',
      'streamable',
      'button',
      'logo',
      'price-label',
      'product-card',
      'toaster',
    ],
    files: ['primitives/navigation/index.tsx', 'primitives/navigation/schema.ts'],
  },
  {
    name: 'offset-pagination',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/offset-pagination/index.tsx'],
  },
  {
    name: 'price-label',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/price-label/index.tsx'],
  },
  {
    name: 'product-card',
    dependencies: ['clsx', 'nuqs'],
    registryDependencies: ['badge', 'price-label', 'skeleton', 'checkbox', 'compare-drawer'],
    files: ['primitives/product-card/index.tsx', 'primitives/product-card/compare.tsx'],
  },
  {
    name: 'rating',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/rating/index.tsx'],
  },
  {
    name: 'reveal',
    dependencies: ['clsx'],
    registryDependencies: ['animated-underline', 'button'],
    files: ['primitives/reveal/index.tsx'],
  },
  {
    name: 'side-panel',
    dependencies: ['@radix-ui/react-dialog', 'clsx', 'lucide-react'],
    registryDependencies: ['button'],
    files: ['primitives/side-panel/index.tsx'],
  },
  {
    name: 'skeleton',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/skeleton/index.tsx'],
  },
  {
    name: 'spinner',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/spinner/index.tsx'],
  },
  {
    name: 'streamable',
    dependencies: ['uuid'],
    registryDependencies: [],
    files: ['lib/streamable.tsx'],
  },
  {
    name: 'tabs',
    dependencies: ['@radix-ui/react-tabs', 'clsx'],
    registryDependencies: [],
    files: ['primitives/tabs/index.tsx'],
  },
  {
    name: 'toaster',
    dependencies: ['sonner'],
    registryDependencies: ['alert'],
    files: ['primitives/toaster/index.tsx'],
  },
] satisfies Components;
