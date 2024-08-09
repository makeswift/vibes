import BlogPostCard from '@/vibes/2px/components/blog-post-card'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background @container sm:min-h-64 lg:min-h-80">
      <BlogPostCard
        date="17.03.24"
        author={{ name: 'Cicero', href: '/' }}
        link={{ href: '/', label: 'READ MORE' }}
        image={{ url: '/2px/blog-post-card-section.png', altText: 'A photo of the workshop' }}
        title="Update 23 from the workshop"
        content={
          <>
            <span>
              {`After outgrowing our old spot, we knew it was time for a change. And boy, did we find a
          gem! Our new workshop is nestled in a converted industrial building with tons of
          character. Think exposed brick, massive windows, and enough room to let our creativity
          run wild.`}
            </span>
            <br />
            <span>
              {`The moment we stepped into this space, we could already envision our design magic
          happening here. The natural light flooding in is perfect for getting those product shots
          just right, and the high ceilings give us plenty of room to experiment with larger
          pieces. (Oversized statement chairs, anyone?)`}
            </span>
            <br />
            <span>
              {`But the best part? We've now got dedicated areas for each stage of our process. There's
          a cozy brainstorming nook where we can sketch and dream up new designs, a prototyping
          zone equipped with all our tools...`}
            </span>
          </>
        }
      />
    </div>
  )
}
