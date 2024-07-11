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
    <ul className="space-y-2 text-foreground">
      {vibe.groups.map(group => (
        <div className="py-1">
          <div className="mb-2 font-heading text-lg font-medium">{group.title}</div>
          {group.pages.map(page => (
            <li key={page.slug} className="py-1">
              <PageLink vibe={vibe} page={page} />
            </li>
          ))}
        </div>
      ))}
    </ul>
  )
}
