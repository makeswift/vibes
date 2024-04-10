import Feed from '.'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-16 sm:min-h-64 lg:min-h-80">
      <Feed
        className="w-full"
        items={[
          {
            title: 'Post title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
            image: {
              url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
              dimensions: { width: 20, height: 20 },
            },
            category: 'Changelog',
            imageAlt: 'Image',
            author: 'John Smith',
            link: { href: '/post' },
          },
          {
            title: 'Post title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
            image: {
              url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
              dimensions: { width: 20, height: 20 },
            },
            category: 'Changelog',
            imageAlt: 'Image',
            author: 'John Smith',
            link: { href: '/post' },
          },
          {
            title: 'Post title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
            image: {
              url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
              dimensions: { width: 20, height: 20 },
            },
            category: 'Changelog',
            imageAlt: 'Image',
            author: 'John Smith',
            link: { href: '/post' },
          },
          {
            title: 'Post title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
            image: {
              url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
              dimensions: { width: 20, height: 20 },
            },
            category: 'Changelog',
            imageAlt: 'Image',
            author: 'John Smith',
            link: { href: '/post' },
          },
          {
            title: 'Post title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
            image: {
              url: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NjMyZmQyMS0yOTZlLTQ0YmMtOWQ5Zi01ZTg0NWMyMjRkODU=/users.svg',
              dimensions: { width: 20, height: 20 },
            },
            category: 'Changelog',
            imageAlt: 'Image',
            author: 'John Smith',
            link: { href: '/post' },
          },
        ]}
      />
    </div>
  )
}
