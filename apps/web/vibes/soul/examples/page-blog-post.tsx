import { BlogPostPage } from '@/vibes/soul/components/page-blog-post'

export default function Preview() {
  return (
    <BlogPostPage
      id="1"
      title="Top 5 Plants to Purify Your Home's Air"
      author="Sam Smith"
      date="June 30, 2024"
      image="https://rstr.in/monogram/vibes/RNZYqBoUs7C"
      content={`
      <h2>This is a section heading</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
      `}
      relatedPostsTitle="Related posts"
      cta={{
        href: '#',
        label: 'View All',
      }}
    />
  )
}
