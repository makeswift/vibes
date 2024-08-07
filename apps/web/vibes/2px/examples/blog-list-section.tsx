import BlogListSection from '@/vibes/2px/components/blog-list-section'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white @container sm:min-h-64 lg:min-h-80">
      <BlogListSection
        text="More from our Blog"
        cta={{ label: 'See all articles', href: '#' }}
        blogPosts={[
          {
            title: 'CarmWorks: A conversation between Man and Nature, 01.03.24, 11:01',
            link: '/',
          },
          {
            title: 'Update 23 from the workshop, 01.03.24, 11:01',
            link: '/',
          },
          {
            title: 'Nicholas Bijan Pourfard: Luthier Turned Furniture Designer, 01.03.24, 11:01',
            link: '/',
          },
          {
            title: 'studioutte: The Poetry of Form and Space, 11.03.24, 12:23',
            link: '/',
          },
        ]}
      />
    </div>
  )
}
