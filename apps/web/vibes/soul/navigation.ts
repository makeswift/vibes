import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Getting started',
    pages: [{ title: 'Introduction', slug: 'introduction', file: 'docs/introduction.mdx' }],
  },
  {
    title: 'Styles',
    pages: [
      { title: 'Electric', slug: 'electric', file: 'docs/electric.mdx' },
      { title: 'Warm', slug: 'warm', file: 'docs/warm.mdx' },
      { title: 'Blue', slug: 'blue', file: 'docs/blue.mdx' },
      { title: 'Luxury', slug: 'luxury', file: 'docs/luxury.mdx' },
    ],
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
      { title: 'Badge', slug: 'badge', file: 'docs/badge.mdx', component: 'badge' },
      {
        title: 'Blog Post Card',
        slug: 'blog-post-card',
        file: 'docs/blog-post-card.mdx',
        component: 'blog-post-card',
      },
      { title: 'Button', slug: 'button', file: 'docs/button.mdx', component: 'button' },
      {
        title: 'Card',
        slug: 'card',
        file: 'docs/card.mdx',
        component: 'card',
      },
      {
        title: 'Card Carousel',
        slug: 'card-carousel',
        file: 'docs/card-carousel.mdx',
        component: 'card-carousel',
      },
      { title: 'Checkbox', slug: 'checkbox', file: 'docs/checkbox.mdx', component: 'checkbox' },
      { title: 'Dropdown', slug: 'dropdown', file: 'docs/dropdown.mdx', component: 'dropdown' },
      { title: 'Favorite', slug: 'favorite', file: 'docs/favorite.mdx', component: 'favorite' },

      { title: 'Input', slug: 'input', file: 'docs/input.mdx', component: 'input' },
      {
        title: 'Pagination',
        slug: 'pagination',
        file: 'docs/pagination.mdx',
        component: 'pagination',
      },
      {
        title: 'Product Card',
        slug: 'product-card',
        file: 'docs/product-card.mdx',
        component: 'product-card',
      },
      {
        title: 'Products Carousel',
        slug: 'products-carousel',
        file: 'docs/products-carousel.mdx',
        component: 'products-carousel',
      },
      {
        title: 'Product Description',
        slug: 'product-description',
        file: 'docs/product-description.mdx',
        component: 'product-description',
      },
      {
        title: 'Products List',
        slug: 'products-list',
        file: 'docs/products-list.mdx',
        component: 'products-list',
      },
      { title: 'Rating', slug: 'rating', file: 'docs/rating.mdx', component: 'rating' },
      {
        title: 'Slide Carousel',
        slug: 'slide-carousel',
        file: 'docs/slide-carousel.mdx',
        component: 'slide-carousel',
      },
    ],
  },
  {
    title: 'Sections',
    pages: [
      { title: 'Discount', slug: 'discount', file: 'docs/discount.mdx', component: 'discount' },
      { title: 'Feature', slug: 'feature', file: 'docs/feature.mdx', component: 'feature-grid' },
      {
        title: 'Featured Image',
        slug: 'featured-image',
        file: 'docs/featured-image.mdx',
        component: 'featured-image',
      },
      {
        title: 'Featured Products Carousel',
        slug: 'featured-products-carousel',
        file: 'docs/featured-products-carousel.mdx',
        component: 'featured-products-carousel',
      },
      {
        title: 'Featured Products List',
        slug: 'featured-products-list',
        file: 'docs/featured-products-list.mdx',
        component: 'featured-products-list',
      },
      {
        title: 'Featured Video',
        slug: 'featured-video',
        file: 'docs/featured-video.mdx',
        component: 'featured-video',
      },
      { title: 'Footer', slug: 'footer', file: 'docs/footer.mdx', component: 'footer' },
      {
        title: 'Header',
        slug: 'header',
        file: 'docs/header.mdx',
        component: 'header',
      },
      {
        title: 'Icon Block',
        slug: 'icon-block',
        file: 'docs/icon-block.mdx',
        component: 'icon-block',
      },
      {
        title: 'Product Detail',
        slug: 'product-detail',
        file: 'docs/product-detail.mdx',
        component: 'product-detail',
      },
      {
        title: 'Products Header',
        slug: 'products-header',
        file: 'docs/products-header.mdx',
        component: 'products-header',
      },
      { title: 'Slideshow', slug: 'slideshow', file: 'docs/slideshow.mdx', component: 'slideshow' },
      {
        title: 'Subscribe',
        slug: 'subscribe',
        file: 'docs/subscribe.mdx',
        component: 'subscribe',
      },
    ],
  },
  {
    title: 'Pages',
    pages: [
      {
        title: 'Home',
        slug: 'page-home',
        file: 'docs/page-home.mdx',
      },
      {
        title: 'Product',
        slug: 'page-product',
        file: 'docs/page-product.mdx',
      },
      {
        title: 'Products',
        slug: 'page-products',
        file: 'docs/page-products.mdx',
      },
    ],
  },
] satisfies Navigation
