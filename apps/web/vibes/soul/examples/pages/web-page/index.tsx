import { locales } from '@/vibes/soul/data/locales';
import { action } from '@/vibes/soul/examples/primitives/inline-email-form/actions';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/electric';
import {
  contactInformation,
  copyright,
  footerLinks,
} from '@/vibes/soul/examples/sections/footer/electric';
import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { Footer } from '@/vibes/soul/sections/footer';
import {
  Amex,
  ApplePay,
  Bitcoin,
  GooglePay,
  Mastercard,
  Paypal,
  Visa,
} from '@/vibes/soul/sections/footer/payment-icons';
import { Facebook, Instagram, X, Youtube } from '@/vibes/soul/sections/footer/social-icons';
import { Subscribe } from '@/vibes/soul/sections/subscribe';
import { WebPage, WebPageContent } from '@/vibes/soul/sections/web-page-content';

const breadcrumbs = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Shipping & Returns',
    href: '#',
  },
];

const socialMediaLinks = [
  {
    href: '#',
    icon: <Facebook />,
  },
  {
    href: '#',
    icon: <X />,
  },
  {
    href: '#',
    icon: <Instagram />,
  },
  {
    href: '#',
    icon: <Youtube />,
  },
];

const paymentIconsArray: React.ReactNode[] = [
  <Visa key="Visa" />,
  <Amex key="Amex" />,
  <Mastercard key="Mastercard" />,
  <Paypal key="Paypal" />,
  <GooglePay key="GooglePay" />,
  <ApplePay key="ApplePay" />,
  <Bitcoin key="Bitcoin" />,
];

const webPage: WebPage = {
  content: `
    <p>
      <em style="font-style: normal;">
        <strong>Returns Policy</strong>
      </em>
      <strong style="font-weight: 400;">
        <em style="font-style: normal;">
          <br />
          <br />
        </em>
      </strong>
      You may return most new, unopened items within 30 days of delivery
      for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an
      incorrect or defective item, etc.).
      <br />
      <br />
      You should expect to receive your refund within four weeks of giving
      your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period
      includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes
      us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our
      refund request (5 to 10 business days).
      <br />
      <br />
      If you need to return an item, please <a href="#">Contact Us</a> with your order number and details about the product
      you would like to return. We will respond quickly with instructions for how to return items from your order.
      <br />
      <br />
      <strong>Shipping</strong>
      <em style="font-style: normal;">
        <br />
        <br />
      </em>
      We can ship to virtually any address in the world. Note that there
      are restrictions on some products, and some products cannot be shipped to international
      destinations.
      <br />
      <br />
      When you place an order, we will estimate shipping and delivery dates for you based on the
      availability of your items and the shipping options you choose. Depending on the shipping provider you choose,
      shipping date estimates may appear on the shipping quotes page.
      <br />
      <br />
      Please also note that the shipping rates
      for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the
      policies of the shipping companies we use, all weights will be rounded up to the next full pound.
      <br />
    </p>
  `,
  title: 'Shipping & Returns',
  seo: {
    pageTitle: 'Shipping & Returns',
    metaDescription: 'Information about shipping and return policy',
    metaKeywords: '',
  },
};

function getWebPage(): Promise<WebPage> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(webPage);
    }, 1000);
  });
}

export default function Preview() {
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

      <WebPageContent breadcrumbs={breadcrumbs} webPage={getWebPage()} />

      <Subscribe
        action={action}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        title="Sign up for our newsletter"
      />

      <Footer
        contactInformation={contactInformation}
        copyright={copyright}
        logo={logo}
        paymentIcons={paymentIconsArray}
        sections={footerLinks}
        socialMediaLinks={socialMediaLinks}
      />
    </>
  );
}
