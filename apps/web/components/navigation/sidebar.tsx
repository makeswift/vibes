import { Link } from './link'
import { navigation } from './navigation'
import { PageLink } from './page-link'

interface Props {
  vibeSlug: string
  pageSlug: string
}

export function Sidebar({ vibeSlug, pageSlug }: Props) {
  const vibe = navigation.vibes.find(vibe => vibe.slug === vibeSlug)

  if (!vibe) return null

  const group = vibe?.groups.find(group => group.pages.some(page => page.slug === pageSlug))

  if (!group) return null

  return (
    <ul className="space-y-2 text-foreground">
      <div className="mb-2 font-heading text-lg font-medium">{group.title}</div>
      {group.pages.map(page => (
        <li key={page.slug}>
          <PageLink vibe={vibe} page={page} />
        </li>
      ))}
    </ul>
  )
}
