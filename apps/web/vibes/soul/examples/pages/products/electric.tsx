import { getFilters, getProducts, getSortOptions } from '@/vibes/soul/data';
import { locales } from '@/vibes/soul/data/locales';
import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/electric';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/electric';
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/sections/footer/electric';
import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { FeaturedProductsCarousel } from '@/vibes/soul/sections/featured-products-carousel';
import { Footer } from '@/vibes/soul/sections/footer';
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section';

export default function Preview() {
  const productsPromise = getProducts('Electric');
  const sortOptions = getSortOptions();
  const filters = getFilters('Electric');

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
      <ProductsListSection
        breadcrumbs={breadcrumbs}
        filters={filters}
        products={productsPromise}
        sortOptions={sortOptions}
        title="All Plants"
        totalCount={productsPromise.then((products) => products.length)}
      />
      <FeaturedProductsCarousel products={productsPromise} title="Recently Viewed" />
      <Footer copyright={copyright} logo={logo} sections={footerLinks} />
    </>
  );
}
