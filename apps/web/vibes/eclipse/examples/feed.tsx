import { Feed } from '@/vibes/eclipse/components/feed'

export default function Preview() {
  const items = [
    {
      title: 'Post title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
      image: {
        url: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        dimensions: { width: 20, height: 20 },
      },
      category: 'Changelog' as const,
      imageAlt: 'Image',
      author: 'John Smith',
      link: { href: '/post' },
    },
    {
      title: 'Post title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
      image: {
        url: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        dimensions: { width: 20, height: 20 },
      },
      category: 'Changelog' as const,
      imageAlt: 'Image',
      author: 'John Smith',
      link: { href: '/post' },
    },
    {
      title: 'Post title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
      image: {
        url: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        dimensions: { width: 20, height: 20 },
      },
      category: 'Changelog' as const,
      imageAlt: 'Image',
      author: 'John Smith',
      link: { href: '/post' },
    },
    {
      title: 'Post title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
      image: {
        url: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        dimensions: { width: 20, height: 20 },
      },
      category: 'Changelog' as const,
      imageAlt: 'Image',
      author: 'John Smith',
      link: { href: '/post' },
    },
    {
      title: 'Post title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
      image: {
        url: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        dimensions: { width: 20, height: 20 },
      },
      category: 'Changelog' as const,
      imageAlt: 'Image',
      author: 'John Smith',
      link: { href: '/post' },
    },
    {
      title: 'Post title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
      image: {
        url: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        dimensions: { width: 20, height: 20 },
      },
      category: 'Changelog' as const,
      imageAlt: 'Image',
      author: 'John Smith',
      link: { href: '/post' },
    },
    {
      title: 'Post title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies nunc. Nulla facilisi. Nullam nec nunc nec nunc.',
      image: {
        url: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        dimensions: { width: 20, height: 20 },
      },
      category: 'Changelog' as const,
      imageAlt: 'Image',
      author: 'John Smith',
      link: { href: '/post' },
    },
  ]

  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Feed className="w-full" items={items} />
    </div>
  )
}
