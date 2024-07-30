import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Getting started',
    pages: [{ title: 'Introduction', slug: 'introduction', file: 'docs/introduction.mdx' }],
  },
  {
    title: 'Components',
    pages: [
      { title: 'Accordions', slug: 'Accordions', file: 'docs/accordions.mdx' },
      { title: 'Announcement Bar', slug: 'announcement-bar', file: 'docs/announcement-bar.mdx' },
      { title: 'Blog Post Card', slug: 'blog-post-card', file: 'docs/blog-post-card.mdx' },
      { title: 'Button', slug: 'button', file: 'docs/button.mdx' },
      { title: 'Category Card', slug: 'category-card', file: 'docs/category-card.mdx' },
      { title: 'Categories', slug: 'categories', file: 'docs/categories.mdx' },
      { title: 'Checkbox', slug: 'checkbox', file: 'docs/checkbox.mdx' },
      { title: 'Compare', slug: 'compare', file: 'docs/compare.mdx' },
      { title: 'Compare Bar', slug: 'compare-bar', file: 'docs/compare-bar.mdx' },
      { title: 'Dropdown', slug: 'dropdown', file: 'docs/dropdown.mdx' },
      { title: 'Favorite', slug: 'favorite', file: 'docs/favorite.mdx' },
      { title: 'Feature', slug: 'feature', file: 'docs/feature.mdx' },
      {
        title: 'Featured Product List',
        slug: 'featured-product-list',
        file: 'docs/featured-product-list.mdx',
      },
      { title: 'Footer', slug: 'footer', file: 'docs/footer.mdx' },
      { title: 'Hero', slug: 'hero', file: 'docs/hero.mdx' },
      { title: 'Hero Category', slug: 'hero-category', file: 'docs/hero-category.mdx' },
      { title: 'Input', slug: 'input', file: 'docs/input.mdx' },
      { title: 'Navigation', slug: 'navigation', file: 'docs/navigation.mdx' },
      { title: 'Newsletter', slug: 'newsletter', file: 'docs/newsletter.mdx' },
      { title: 'Product Card', slug: 'product-card', file: 'docs/product-card.mdx' },
      { title: 'Product Chip', slug: 'product-chip', file: 'docs/product-chip.mdx' },
      { title: 'Product List', slug: 'product-list', file: 'docs/product-list.mdx' },
      {
        title: 'Product List Carousel',
        slug: 'product-list-carousel',
        file: 'docs/product-list-carousel.mdx',
      },
      {
        title: 'Product Description',
        slug: 'product-description',
        file: 'docs/product-description.mdx',
      },
      { title: 'Rating', slug: 'rating', file: 'docs/rating.mdx' },
    ],
  },
] satisfies Navigation
