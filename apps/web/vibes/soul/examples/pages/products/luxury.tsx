import { getFilters, getProducts, getSortOptions } from '@/vibes/soul/data';
import { locales } from '@/vibes/soul/data/locales';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/luxury';
import { breadcrumbs } from '@/vibes/soul/examples/sections/breadcrumbs/luxury';
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/sections/footer/luxury';
import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { FeaturedProductCarousel } from '@/vibes/soul/sections/featured-product-carousel';
import { Footer } from '@/vibes/soul/sections/footer';
import { ProductListSection } from '@/vibes/soul/sections/product-list-section';

export default async function Preview() {
  const products = await getProducts('Luxury');
  const sortOptions = await getSortOptions();
  const filters = await getFilters('Luxury');

  return (
    <>
      <Banner id="example-banner">
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </Banner>
      <Navigation
        accountHref="#"
        activeLocaleId="en"
        cartHref="#"
        links={navigationLinks}
        localeAction={localeAction}
        locales={locales}
        logo={logo}
        searchHref="#"
      />
      <ProductListSection
        breadcrumbs={breadcrumbs}
        filters={filters}
        products={products}
        sortOptions={sortOptions}
        title="All Shoes"
        totalCount={products.length}
      />
      <FeaturedProductCarousel products={products} title="Recently Viewed" />
      <Footer copyright={copyright} logo={logo} sections={footerLinks} />
    </>
  );
}
