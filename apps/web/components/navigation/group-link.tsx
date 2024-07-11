'use client'

import { usePathname } from 'next/navigation'

import { Link } from './link'
import { Group, Vibe } from './navigation'

function isInSameGroup({
  vibe,
  group,
  pathname,
  href,
}: {
  vibe: Vibe
  group: Group
  pathname: string
  href: string
}) {
  const hrefs = group.pages.map(page => `/docs/${vibe.slug}/${page.slug}`)

  return hrefs.includes(pathname) && hrefs.includes(href)
}

interface Props
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href' | 'active' | 'children'> {
  vibe: Vibe
  group: Group
}

export function GroupLink({ vibe, group, ...rest }: Props) {
  const pathname = usePathname()
  const href = `/docs/${vibe.slug}/${group.pages[0].slug}`

  return (
    <Link {...rest} href={href} active={isInSameGroup({ vibe, group, pathname, href })}>
      {group.title}
    </Link>
  )
}
