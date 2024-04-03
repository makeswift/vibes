import matter from 'gray-matter'

import { getPage } from '@/lib/getPage'

import { SidebarLink } from './sidebar-link'

export async function PageLink({ path }: { path: string }) {
  const { data } = matter(await getPage(path))

  return <SidebarLink href={`/${path}`}>{data.title}</SidebarLink>
}
