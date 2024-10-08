import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'dropdown',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/dropdown/index.tsx',
      './components/icons/ChevronDownIcon.tsx',
      '../../lib/utils.ts',
    ],
  },
  {
    name: 'button',
    dependencies: ['@radix-ui/react-slot'],
    registryDependencies: [],
    files: [
      './components/button/index.tsx',
      '../../lib/utils.ts',
      './components/icons/LoadingIcon.tsx',
    ],
  },
  {
    name: 'file-uploader',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/file-uploader/index.tsx',
      '../../lib/utils.ts',
      './components/icons/CheckIcon.tsx',
      './components/icons/CrossIcon.tsx',
    ],
  },
  {
    name: 'input',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/input/index.tsx',
      '../../lib/utils.ts',
      './components/icons/CheckIcon.tsx',
      './components/icons/CrossIcon.tsx',
    ],
  },
  {
    name: 'radio-button',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/radio-button/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'accordions',
    dependencies: ['@radix-ui/react-accordion', 'clsx'],
    registryDependencies: [],
    files: [
      './components/accordions/index.tsx',
      '../../lib/utils.ts',
      './components/icons/ChevronDownIcon.tsx',
    ],
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/rating/index.tsx',
      '../../lib/utils.ts',
      './components/icons/StarEmptyIcon.tsx',
      './components/icons/StarFilledIcon.tsx',
      './components/icons/StarHalfIcon.tsx',
    ],
  },
  {
    name: 'text-area',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/text-area/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'popover',
    dependencies: ['@radix-ui/react-popover'],
    registryDependencies: [],
    files: ['./components/popover/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'skeleton',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/skeleton/index.tsx',
      '../../lib/utils.ts',
      './components/skeleton/index.module.css',
    ],
  },
  {
    name: 'option-selector',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/option-selector/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'scratch-to-reveal-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/scratch-to-reveal-section/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'carousel-section',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/carousel-section/index.tsx',
      './components/carousel-section/index.module.css',
      '../../lib/utils.ts',
      './components/icons/ChevronLeftIcon.tsx',
    ],
  },
  {
    name: 'products-carousel',
    dependencies: ['carousel-section', 'product-card'],
    registryDependencies: [],
    files: ['./components/products-carousel/index.tsx'],
  },
  {
    name: 'checkbox',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/checkbox/index.tsx',
      '../../lib/utils.ts',
      './components/icons/CheckIcon.tsx',
    ],
  },
  {
    name: 'alert-box',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/alert-box/index.tsx',
      './components/icons/AlertIcon.tsx',
      './components/icons/CheckIcon.tsx',
      './components/icons/CrossIcon.tsx',
      './components/icons/InfoIcon.tsx',
      '../../lib/utils.ts',
    ],
  },
  {
    name: 'callout-section',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['./components/callout-section/index.tsx'],
  },
  {
    name: 'marquee-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/marquee-section/index.tsx'],
  },
  {
    name: 'counter',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/counter/index.tsx',
      '../../lib/utils.ts',
      './components/icons/MinusDashedIcon.tsx',
      './components/icons/MinusSolidIcon.tsx',
      './components/icons/PlusDashedIcon.tsx',
      './components/icons/PlusSolidIcon.tsx',
    ],
  },
  {
    name: 'calendar',
    dependencies: ['react-day-picker'],
    registryDependencies: [],
    files: [
      './components/calendar/index.tsx',
      '../../lib/utils.ts',
      './components/icons/ChevronLeftIcon.tsx',
    ],
  },
  {
    name: 'blog-list-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/blog-list-section/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'breadcrumbs',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/breadcrumbs/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'media-and-text-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/media-and-text-section/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'footer-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/footer-section/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'fullscreen-product-card-section',
    dependencies: [],
    registryDependencies: ['counter', 'button'],
    files: ['./components/fullscreen-product-card-section/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'section-header',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/section-header/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'hero-header',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['./components/hero-header/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'blog-post-card',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/blog-post-card/index.tsx'],
  },
  {
    name: 'faq-section',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['./components/faq-section/index.tsx'],
  },
  {
    name: 'tabs',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/tabs/index.tsx'],
  },
  {
    name: 'text-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/text-section/index.tsx'],
  },
  {
    name: 'badge',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/badge/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'swatch',
    dependencies: ['@radix-ui/react-tabs'],
    registryDependencies: [],
    files: ['./components/swatch/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'product-card',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/product-card/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'gallery',
    dependencies: ['button', 'dropdown', 'swatch'],
    registryDependencies: [],
    files: [
      './components/gallery/index.tsx',
      '../../lib/utils.ts',
      './components/gallery/expandable-text.tsx',
      './components/gallery/options-selector.tsx',
    ],
  },
  {
    name: 'newsletter-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/newsletter-section/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'header',
    dependencies: [],
    registryDependencies: ['badge'],
    files: [
      './components/header/index.tsx',
      '../../lib/utils.ts',
      './components/icons/ChevronDownIcon.tsx',
      './components/icons/CrossIcon.tsx',
      './components/icons/SearchIcon.tsx',
    ],
  },
  {
    name: 'slideshow-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/slideshow-section/index.tsx', '../../lib/utils.ts'],
  },
  {
    name: 'date-picker',
    dependencies: ['@nextui-org/date-input', '@internationalized/date'],
    registryDependencies: ['calendar'],
    files: [
      './components/date-picker/index.tsx',
      './components/date-picker/useOnClickOutside.ts',
      '../../lib/utils.ts',
      './components/icons/CalendarIcon.tsx',
    ],
  },
] satisfies Components
