import { locales } from '@/vibes/soul/data/locales';
import { action } from '@/vibes/soul/examples/sections/inline-email-form/actions';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/luxury';
import { posts } from '@/vibes/soul/examples/sections/blog-post-list';
import {
  contactInformation,
  copyright,
  footerLinks,
} from '@/vibes/soul/examples/sections/footer/luxury';
import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { BlogPostContent, BlogPostContentBlogPost } from '@/vibes/soul/sections/blog-post-content';
import { FeaturedBlogPostCarousel } from '@/vibes/soul/sections/featured-blog-post-carousel';
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

const breadcrumbs = [
  {
    id: '1',
    label: 'Home',
    href: '#',
  },
  {
    id: '2',
    label: 'Blog',
    href: '#',
  },
  {
    id: '3',
    label: "Top 5 Plants to Purify Your Home's Air",
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

const blogPost = {
  author: 'Freda Salvador',
  content: `
    <h2>OCTOBER CAMPAIGN</h2>
    <p>Fall fashion is very much happening and we are very much loving everything. Boots, loafers, leopard print, sweaters, plaid, denim, gold…to name just a few of our favorite things.</p>
    <p>For our October campaign, we wanted to have fun with the styling. It’s all about taking classic looks and reimagining them with certain pieces. All your staples with a refreshed energy. Mixing textures, playing with sequins, making a statement print a neutral–we’re feeling it all.</p>

    <img src="https://rstr.in/monogram/vibes/VhqWQX3Sb-f/6g-xaTC90eo" alt="A woman wearing a brown pantsuit with a snakeskin print blazer and black flats."/>

    <h2>EVERYDAY COOL</h2>
    <h3>WITH THE LANNA BOOT + ELIS BAG</h3>
    <blockquote>
    “I’m always into leopard and believe it is as much of a neutral as black. And paired with the LANNA Boot–which we’re calling the ballet flat of boots because it truly works with everything–it’s just perfect. Tie it all together with a studded bag and cozy sweater.”
    </blockquote>
  `,
  date: 'October 03, 2024',
  image: {
    src: 'https://rstr.in/monogram/vibes/lJaCK7qAO8W/k9soESSDDU1',
    alt: 'A woman wearing a green velvet dress, black boots, and a small black handbag.',
  },
  title: 'STYLING STORIES:',
};

function getBlogPost(): Promise<BlogPostContentBlogPost> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogPost);
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

      <BlogPostContent blogPost={getBlogPost()} breadcrumbs={breadcrumbs} />

      <FeaturedBlogPostCarousel
        blogPosts={posts}
        cta={{
          href: '#',
          label: 'View All',
        }}
        title="Related posts"
      />

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
