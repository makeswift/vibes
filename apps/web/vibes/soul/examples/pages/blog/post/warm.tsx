import { locales } from '@/vibes/soul/data/locales';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { logo, navigationLinks } from '@/vibes/soul/examples/primitives/navigation/warm';
import { posts } from '@/vibes/soul/examples/sections/blog-post-list/warm';
import {
  contactInformation,
  copyright,
  footerLinks,
} from '@/vibes/soul/examples/sections/footer/warm';
import { action } from '@/vibes/soul/examples/sections/inline-email-form/actions';
import { Banner } from '@/vibes/soul/primitives/banner';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { BlogPost, BlogPostContent } from '@/vibes/soul/sections/blog-post-content';
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
  author: 'Sam Smith',
  content: `
    <p>A couple weeks ago, we outfitted Chloe and Erik for the their first “official” bikepacking trip - a weekend of camping and riding north from San Francisco to Wildcat Campground, on the Coast Trail in Bolinas. As with any “firsts” like these, there were bound to be some lessons learned along with many pleasant surprises. Chloe wrote the bits below, and they sent along some lovely photos to go along with it. Have a read and hear how it went for these two!</p>
    <p>When your friends snag a last minute campsite at Wildcat, you jump on the offer, no questions asked.  That’s how Erik and I ended up scrambling to prep our newly acquired gravel bikes for our first ~proper~ bikepacking trip. The plan was simple: ride up to Olema from San Francisco on Saturday morning (about 45 miles), hit the Five Brooks trailhead early in the afternoon, and arrive at the coastal campsite an hour or so later.  Since we would only be camping one night and would also be meeting friends who were hiking in, we were able to pack light.  Even so, it took several re-orgs to fit all the essentials: clothes and sandals in the Outer Shell Handlebar bag, tools and food in the Framebag, and sleeping bag, pad, and tent in the Expedition Seatbag.  Once in place, however, the rigs were surprisingly light, maneuverable, and OF COURSE  stylish (camo vs. marigold--who wore it better?!).</p>
    <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTphZmIzM2NjZC1hM2VlLTQ2NjktYTkwNy1iZDljYTU3NzU2OTI=/happy-riders.jpeg" alt="Two people standing next to their bikes, both wearing helmets. They are smiling and looking at the camera." />
    <p>We took it easy on the way up, stopping as needed for food,  navigation, and beer (gatorade, basically), and it was smooth sailing until we hit the dirt.  Having put a bit too much trust in Google maps, I led us up a steep and slippery trail which quickly became too technical for our skill level and 40mm tires. The next hour consisted mostly of walking the bikes up a very steep hill and (unsuccessfully) dodging poison oak.  Lesson learned: pay close attention to elevation compared to distance and DON’T just blindly follow a recommended route.  Rookie mistake.  Once the trail flattened out, though, we had a blast.  My Canyon Grail handled so beautifully on gravel and packed dirt, it was easy to forget how loaded up it was.  I had no problem lifting it over obstacles in the path, and felt confident on fast descents thanks to its grippy tires and disc brakes.</p>
    <p>The highlight for me was the descent into the campsite.  Due to the earlier mishap, we were arriving much later than expected. The sun was low in the sky, and the clouds over the ocean were clearly gearing up for something special.  We rolled into camp and finally spotted our group, completely backlit by the sunset and waving like crazy- no better way to end a ride!</p>

    <p>Before I even went to bed that night, I had decided that this was one of my favorite camping trips ever.  The  combination of surreal scenery, wonderful crew, and adrenaline of the ride made it hard to beat.  I was challenged by both the total distance and some of the terrain, but never felt in over my head.  I got a better feel for my bike, learned how to pack efficiently, and improved my navigation skills.  Best of all, it was so easy to do! In just one week we were able to assemble all the bags and camping gear needed to make it happen. There was no car involved.  We could go anywhere, road or dirt, carrying everything we needed. It’s hard to feel more free than that.</p>
  `,
  date: 'June 30, 2024',
  image: {
    src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphMTRiMGFjMC1hMTdjLTQwYmQtYTExYy00ZDEwYjgwZTA5ZDk=/bike-ocean.jpeg',
    alt: 'A bicycle parked on a grassy cliff overlooking the ocean.',
  },
  title: 'The Good, the Great, and the (My) Bad: Adventures of a First Time Bikepacker',
};

function getBlogPost(): Promise<BlogPost> {
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
