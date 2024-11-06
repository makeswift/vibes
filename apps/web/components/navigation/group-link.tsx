'use client'

import { usePathname } from 'next/navigation'

import { Link } from './link'
import { Group } from './navigation'

function isInSameGroup({
  chapterSlug,
  group,
  pathname,
  href,
}: {
  chapterSlug: string
  group: Group
  pathname: string
  href: string
}) {
  const hrefs = group.pages.map(page => `/docs/${chapterSlug}/${page.slug}`)

  return hrefs.includes(pathname) && hrefs.includes(href)
}

interface Props
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href' | 'active' | 'children'> {
  chapterSlug: string
  group: Group
}

export function GroupLink({ chapterSlug, group, ...rest }: Props) {
  const pathname = usePathname()
  const href = `/docs/${chapterSlug}/${group.pages[0]!.slug}`

  return (
    <Link {...rest} href={href} active={isInSameGroup({ chapterSlug, group, pathname, href })}>
      {group.title}
    </Link>
  )
}
