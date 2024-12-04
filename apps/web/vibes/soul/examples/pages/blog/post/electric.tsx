import { locales } from '@/vibes/soul/data/locales'
import { action } from '@/vibes/soul/examples/primitives/inline-email-form/actions'
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions'
import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/electric'
import { posts } from '@/vibes/soul/examples/sections/blog-post-list'
import {
  contactInformation,
  copyright,
  footerLinks,
} from '@/vibes/soul/examples/sections/footer/electric'
import { Banner } from '@/vibes/soul/primitives/banner'
import { Navigation } from '@/vibes/soul/primitives/navigation'
import { BlogPostContent } from '@/vibes/soul/sections/blog-post-content'
import { FeaturedBlogPostCarousel } from '@/vibes/soul/sections/featured-blog-post-carousel'
import { Footer } from '@/vibes/soul/sections/footer'
import {
  Amex,
  ApplePay,
  Bitcoin,
  GooglePay,
  Mastercard,
  Paypal,
  Visa,
} from '@/vibes/soul/sections/footer/payment-icons'
import { Facebook, Instagram, X, Youtube } from '@/vibes/soul/sections/footer/social-icons'
import { Subscribe } from '@/vibes/soul/sections/subscribe'

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
]

const paymentIconsArray: React.ReactNode[] = [
  <Visa key="Visa" />,
  <Amex key="Amex" />,
  <Mastercard key="Mastercard" />,
  <Paypal key="Paypal" />,
  <GooglePay key="GooglePay" />,
  <ApplePay key="ApplePay" />,
  <Bitcoin key="Bitcoin" />,
]

export default function Preview() {
  return (
    <>
      <Banner id="example-banner">
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </Banner>

      <Navigation
        links={navigationLinks}
        logo={logo}
        cartHref="#"
        accountHref="#"
        locales={locales}
        localeAction={localeAction}
        activeLocaleId="en"
        searchHref="#"
      />

      <BlogPostContent
        title="Top 5 Plants to Purify Your Home's Air"
        author="Sam Smith"
        date="June 30, 2024"
        tags={[
          {
            label: 'Plants',
            link: {
              href: '#',
            },
          },
          {
            label: 'Home',
            link: {
              href: '#',
            },
          },
          {
            label: 'Gardening',
            link: {
              href: '#',
            },
          },
        ]}
        image={{
          src: 'https://rstr.in/monogram/vibes/RNZYqBoUs7C',
          alt: 'A plant with large leaves and a short stem.',
        }}
        content={`
       <h2>Best Air-Purifying Plants</h2>
        <ol>
            <li>
                <h3>Snake Plant (Sansevieria)</h3>
                <p>The <strong>Snake Plant</strong>, also known as Mother-in-Law's Tongue, is one of the most effective plants for filtering out several toxins. It thrives in low light, making it perfect for bedrooms and living rooms.</p>
                <ul>
                    <li>Filters out formaldehyde, xylene, benzene, and toluene.</li>
                    <li>Easy to care for with low light and water requirements.</li>
                </ul>
            </li>
            <li>
                <h3>Spider Plant (Chlorophytum comosum)</h3>
                <p><strong>Spider Plants</strong> are great for beginners due to their hardiness. They are efficient at removing harmful substances from the air and are also pet-friendly.</p>
                <ul>
                    <li>Removes carbon monoxide, formaldehyde, and other toxins.</li>
                    <li>Produces offshoots that can be propagated.</li>
                </ul>
            </li>
            <li>
                <h3>Peace Lily (Spathiphyllum)</h3>
                <p>The <strong>Peace Lily</strong> is known for its ability to eliminate a variety of pollutants while also being an attractive flowering plant. It does require some care, especially when it comes to watering.</p>
                <ul>
                    <li>Removes ammonia, benzene, formaldehyde, and trichloroethylene.</li>
                    <li>Beautiful white blooms that brighten any room.</li>
                </ul>
            </li>
            <li>
                <h3>Aloe Vera (Aloe barbadensis miller)</h3>
                <p>Apart from its medicinal benefits, <strong>Aloe Vera</strong> is also a great air purifier. It thrives in bright sunlight and requires little maintenance.</p>
                <ul>
                    <li>Filters out formaldehyde and benzene.</li>
                    <li>Easy to care for, requires sunlight.</li>
                </ul>
            </li>
            <li>
                <h3>Boston Fern (Nephrolepis exaltata)</h3>
                <p>The <strong>Boston Fern</strong> is great for removing pollutants, but it loves humid environments, making it a perfect fit for kitchens and bathrooms.</p>
                <ul>
                    <li>Removes formaldehyde and xylene.</li>
                    <li>Thrives in high humidity environments.</li>
                </ul>
            </li>
        </ol>
      `}
      />

      <FeaturedBlogPostCarousel
        title="Related posts"
        blogPosts={posts}
        cta={{
          href: '#',
          label: 'View All',
        }}
      />

      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        action={action}
      />

      <Footer
        logo={logo}
        sections={footerLinks}
        contactInformation={contactInformation}
        copyright={copyright}
        paymentIcons={paymentIconsArray}
        socialMediaLinks={socialMediaLinks}
      />
    </>
  )
}
