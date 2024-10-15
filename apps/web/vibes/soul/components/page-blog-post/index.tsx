import { AnnouncementBar } from '@/vibes/soul/components/announcement-bar'
import { BlogPostCard } from '@/vibes/soul/components/blog-post-card'
import { BlogPostContent } from '@/vibes/soul/components/blog-post-content'
import { Carousel } from '@/vibes/soul/components/carousel'
import { Footer } from '@/vibes/soul/components/footer'
import {
  Amex,
  ApplePay,
  Bitcoin,
  GooglePay,
  Mastercard,
  Paypal,
  Visa,
} from '@/vibes/soul/components/footer/payment-icons'
import { Facebook, Instagram, X, Youtube } from '@/vibes/soul/components/footer/social-icons'
import { Header } from '@/vibes/soul/components/header'
import { Subscribe } from '@/vibes/soul/components/subscribe'
import { posts } from '@/vibes/soul/examples/blog-post-list'
import { headerLinks } from '@/vibes/soul/examples/header-electric'

interface BlogPostPageProps {
  id: string
  title: string
  author: string
  date: string
  image: string
  content: string
}

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

const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export const BlogPostPage = function BlogPostPage({
  id,
  title,
  author,
  date,
  content,
  image,
}: BlogPostPageProps) {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <Header
        links={headerLinks}
        logo="SOUL"
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocale="EN"
      />

      <BlogPostContent
        id={id}
        title={title}
        author={author}
        date={date}
        image={image}
        content={content}
      />

      <Carousel
        className="pb-10 @4xl:pb-20"
        contentClassName="!gap-6 [&>*]:min-w-[300px] @5xl:[&>*]:min-w-[466px]"
      >
        {posts.map(
          ({
            id: postId,
            title: postTitle,
            date: postDate,
            content: postContent,
            href: postHref,
            image: postImage,
          }) => {
            return (
              <BlogPostCard
                key={postId}
                id={postId}
                title={postTitle}
                date={postDate}
                content={postContent}
                href={postHref}
                image={postImage}
              />
            )
          }
        )}
      </Carousel>
      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      />
      <Footer
        logo="SOUL"
        sections={[
          {
            title: 'Categories',
            links: [
              { label: 'Coats & Jackets', href: '#' },
              { label: 'T-Shirts', href: '#' },
              { label: 'Sweatshirts', href: '#' },
              { label: 'Pants', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#' },
              { label: 'Stories', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Stores', href: '#' },
            ],
          },
          {
            title: 'Help & Support',
            links: [
              { label: 'FAQs', href: '#' },
              { label: 'Contact Us', href: '#' },
              { label: 'Returns', href: '#' },
              { label: 'Shipping', href: '#' },
            ],
          },
        ]}
        contactInformation={{
          address: 'info@mywebsite.com',
          phone: '+(1)408 123 4567',
        }}
        copyright={`© ${new Date().getFullYear().toString()} SOUL - Powered by Monogram`}
        paymentIcons={paymentIconsArray}
        socialMediaLinks={socialMediaLinks}
      />
    </>
  )
}
