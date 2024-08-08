import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'accordions',
    dependencies: ['clsx', '@radix-ui/react-accordion'],
    registryDependencies: [],
    files: ['components/accordions/index.tsx', 'components/accordions/chevron.tsx'],
  },
  {
    name: 'announcement-bar',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/announcement-bar/index.tsx'],
  },
  {
    name: 'badge',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/badge/index.tsx'],
  },
  {
    name: 'blog-post-card',
    dependencies: [],
    registryDependencies: [],
    files: ['components/blog-post-card/index.tsx'],
  },
  {
    name: 'button',
    dependencies: [],
    registryDependencies: [],
    files: ['components/button/index.tsx'],
  },
  {
    name: 'card-carousel',
    dependencies: ['clsx', 'embla-carousel-react', 'lucide-react'],
    registryDependencies: [],
    files: ['components/card-carousel/index.tsx', 'components/card-carousel/scrollbar.tsx'],
  },
  {
    name: 'carousel',
    dependencies: ['clsx', 'embla-carousel-react', 'lucide-react'],
    registryDependencies: [],
    files: ['components/carousel/index.tsx'],
  },
  {
    name: 'category-card',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/category-card/index.tsx'],
  },
  {
    name: 'checkbox',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-checkbox'],
    registryDependencies: [],
    files: ['components/checkbox/index.tsx'],
  },
  {
    name: 'compare-drawer',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['button'],
    files: ['components/compare-drawer/index.tsx', 'components/compare-drawer/product-chip.tsx'],
  },
  {
    name: 'dropdown',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-dropdown-menu'],
    registryDependencies: [],
    files: ['components/dropdown/index.tsx'],
  },
  {
    name: 'favorite',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: [
      'components/favorite/index.tsx',
      'components/favorite/heart.tsx',
      'components/favorite/styles.css',
    ],
  },
  {
    name: 'feature',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['button'],
    files: ['components/feature/index.tsx', 'components/icon/index.tsx'],
  },
  {
    name: 'featured-product-list',
    dependencies: [],
    registryDependencies: ['button', 'product-card'],
    files: ['components/featured-product-list/index.tsx'],
  },
  {
    name: 'footer',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/footer/index.tsx'],
  },
  {
    name: 'header',
    dependencies: ['clsx', 'lucide-react', 'react-headroom'],
    registryDependencies: [],
    files: ['components/header/index.tsx', 'components/header/hamburger-menu-button.tsx'],
  },
  {
    name: 'icon-block',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/icon-block/index.tsx', 'components/icon/index.tsx'],
  },
  {
    name: 'input',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/input/index.tsx'],
  },
  {
    name: 'media-section',
    dependencies: ['clsx'],
    registryDependencies: ['button'],
    files: ['components/media-section/index.tsx'],
  },
  {
    name: 'newsletter',
    dependencies: ['clsx'],
    registryDependencies: ['input'],
    files: ['components/newsletter/index.tsx'],
  },

  {
    name: 'pagination',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/pagination/index.tsx'],
  },
  {
    name: 'product-card',
    dependencies: ['clsx'],
    registryDependencies: ['badge', 'checkbox'],
    files: [
      'components/product-card/index.tsx',
      'components/product-card/compare.tsx',
      'components/product-card/price.tsx',
    ],
  },
  {
    name: 'product-detail',
    dependencies: ['clsx', 'embla-carousel-react'],
    registryDependencies: ['button', 'favorite', 'product-card', 'rating'],
    files: [
      'components/product-detail/index.tsx',
      'components/product-detail/product-gallery.tsx',
      'components/product-card/price.tsx',
    ],
  },
  {
    name: 'product-list',
    dependencies: [],
    registryDependencies: ['product-card'],
    files: ['components/product-list/index.tsx'],
  },
  {
    name: 'product-description',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['components/product-description/index.tsx'],
  },
  {
    name: 'products-header',
    dependencies: [],
    registryDependencies: ['accordions', 'button', 'dropdown'],
    files: ['components/products-header/index.tsx'],
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['components/rating/index.tsx'],
  },
  {
    name: 'slideshow',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: [
      'components/slideshow/index.tsx',
      'components/slideshow/progress-bar.tsx',
      'components/slideshow/progress-section.tsx',
    ],
  },
] satisfies Components
