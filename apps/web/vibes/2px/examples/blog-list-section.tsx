import BlogListSection from '@/vibes/2px/components/blog-list-section'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <BlogListSection
        text="More from our Blog"
        cta={{ label: 'See all articles', href: '#' }}
        blogPosts={[
          {
            title: 'CarmWorks: A conversation between Man and Nature',
            date: '01.03.24, 11:01',
          },
          {
            title: 'Update 23 from the workshop',
            date: '17.03.24, 18:23',
          },
          {
            title: 'Nicholas Bijan Pourfard: Luthier Turned Furniture Designer',
            date: '12.03.24, 18:50',
          },
          {
            title: 'studioutte: The Poetry of Form and Space',
            date: '11.03.24, 12:23',
          },
        ]}
      />
    </div>
  )
}
