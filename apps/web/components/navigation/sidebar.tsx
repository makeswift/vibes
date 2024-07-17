import { Link } from './link'
import { navigation } from './navigation'
import { PageLink } from './page-link'

interface Props {
  vibeSlug: string
}

export function Sidebar({ vibeSlug }: Props) {
  const vibe = navigation.vibes.find(vibe => vibe.slug === vibeSlug)

  if (!vibe) return null

  return (
    <ul className="space-y-4 text-foreground">
      {vibe.groups.map(group => (
        <div key={group.title} className="py-1">
          <div className="mb-2 font-heading text-sm font-bold">{group.title}</div>
          {group.pages.map(page => (
            <li key={page.slug} className="[&_a]:block [&_a]:py-1.5">
              <PageLink vibe={vibe} page={page} />
            </li>
          ))}
        </div>
      ))}
    </ul>
  )
}
