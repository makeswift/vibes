import { readFile } from 'fs/promises'
import matter from 'gray-matter'

import { SidebarLink } from './sidebar-link'

export async function PageLink({ path }: { path: string }) {
  const { data } = matter(await readFile(`${process.cwd()}/mdx/${path}.mdx`))

  return <SidebarLink href={`/${path}`}>{data.title}</SidebarLink>
}
