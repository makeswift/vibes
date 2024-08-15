import BlogListSection from '@/vibes/2px/components/blog-list-section'

export const posts = [
  {
    title: 'CarmWorks: A conversation between Man and Nature',
    link: { href: '/' },
    date: '01.03.24, 11:01',
  },
  {
    title: 'Update 23 from the workshop',
    link: { href: '/' },
    date: '01.03.24, 11:01',
  },
  {
    title: 'Nicholas Bijan Pourfard: Luthier Turned Furniture Designer',
    link: { href: '/' },
    date: '01.03.24, 11:01',
  },
  {
    title: 'studioutte: The Poetry of Form and Space',
    link: { href: '/' },
    date: '01.03.24, 12:23',
  },
]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white @container sm:min-h-64 lg:min-h-80">
      <BlogListSection
        title="More from our Blog"
        cta={{ label: 'See all articles', href: '#' }}
        posts={posts}
      />
    </div>
  )
}
