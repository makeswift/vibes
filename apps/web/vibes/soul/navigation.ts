import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Getting started',
    pages: [{ title: 'Introduction', slug: 'introduction', file: 'docs/introduction.mdx' }],
  },
  {
    title: 'Components',
    pages: [
      {
        title: 'Accordions',
        slug: 'accordions',
        file: 'docs/accordions.mdx',
        component: 'accordions',
      },
      {
        title: 'Announcement Bar',
        slug: 'announcement-bar',
        file: 'docs/announcement-bar.mdx',
        component: 'announcement-bar',
      },
      {
        title: 'Blog Post Card',
        slug: 'blog-post-card',
        file: 'docs/blog-post-card.mdx',
        component: 'blog-post-card',
      },
      { title: 'Button', slug: 'button', file: 'docs/button.mdx', component: 'button' },
      {
        title: 'Category Card',
        slug: 'category-card',
        file: 'docs/category-card.mdx',
        component: 'category-card',
      },
      {
        title: 'Carousel',
        slug: 'carousel',
        file: 'docs/carousel.mdx',
        component: 'carousel',
      },
      { title: 'Checkbox', slug: 'checkbox', file: 'docs/checkbox.mdx', component: 'checkbox' },
      { title: 'Compare', slug: 'compare', file: 'docs/compare.mdx', component: 'compare' },
      {
        title: 'Compare Bar',
        slug: 'compare-bar',
        file: 'docs/compare-bar.mdx',
        component: 'compare-bar',
      },
      { title: 'Dropdown', slug: 'dropdown', file: 'docs/dropdown.mdx', component: 'dropdown' },
      { title: 'Favorite', slug: 'favorite', file: 'docs/favorite.mdx', component: 'favorite' },
      { title: 'Feature', slug: 'feature', file: 'docs/feature.mdx', component: 'feature' },
      {
        title: 'Featured Product List',
        slug: 'featured-product-list',
        file: 'docs/featured-product-list.mdx',
        component: 'featured-product-list',
      },
      { title: 'Footer', slug: 'footer', file: 'docs/footer.mdx', component: 'footer' },
      { title: 'Hero', slug: 'hero', file: 'docs/hero.mdx', component: 'hero' },
      {
        title: 'Hero Category',
        slug: 'hero-category',
        file: 'docs/hero-category.mdx',
        component: 'hero-category',
      },
      {
        title: 'Icon Block',
        slug: 'icon-block',
        file: 'docs/icon-block.mdx',
        component: 'icon-block',
      },
      { title: 'Input', slug: 'input', file: 'docs/input.mdx', component: 'input' },
      {
        title: 'Navigation',
        slug: 'navigation',
        file: 'docs/navigation.mdx',
        component: 'navigation',
      },
      {
        title: 'Newsletter',
        slug: 'newsletter',
        file: 'docs/newsletter.mdx',
        component: 'newsletter',
      },
      {
        title: 'Product Card',
        slug: 'product-card',
        file: 'docs/product-card.mdx',
        component: 'product-card',
      },
      {
        title: 'Product Chip',
        slug: 'product-chip',
        file: 'docs/product-chip.mdx',
        component: 'product-chip',
      },
      {
        title: 'Product List',
        slug: 'product-list',
        file: 'docs/product-list.mdx',
        component: 'product-list',
      },
      {
        title: 'Product Description',
        slug: 'product-description',
        file: 'docs/product-description.mdx',
        component: 'product-description',
      },
      { title: 'Rating', slug: 'rating', file: 'docs/rating.mdx', component: 'rating' },
    ],
  },
] satisfies Navigation
