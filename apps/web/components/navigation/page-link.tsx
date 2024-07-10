'use client'

import { usePathname } from 'next/navigation'

import { Link } from './link'
import { Page, Vibe } from './navigation'

interface Props
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href' | 'active' | 'children'> {
  vibe: Vibe
  page: Page
}

export function PageLink({ vibe, page, ...rest }: Props) {
  const pathname = usePathname()
  const href = `/docs/${vibe.slug}/${page.slug}`

  return (
    <Link {...rest} href={href} active={pathname === href}>
      {page.title}
    </Link>
  )
}
