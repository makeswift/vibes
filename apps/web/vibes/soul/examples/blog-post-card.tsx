import BlogPostCard from '@/vibes/soul/components/blog-post-card'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 @container">
      <BlogPostCard
        title="Vestibulum eleifend placerat ligula"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget velit hendrerit erat imperdiet tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        thumbnail={{
          url: 'https://rstr.in/monogram/vibes/7ayVnws_5R1',
          altText: 'Vestibulum eleifend placerat ligula',
        }}
        link={{ href: '/' }}
        date="2024-07-01"
        author="Author Name"
      />
    </div>
  )
}
