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
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 xl:block">
      <ul className="h-full space-y-5 overflow-y-scroll py-10 text-foreground">
        {vibe.groups.map(group => (
          <div key={group.title}>
            <div className="mb-2.5 text-sm font-bold">{group.title}</div>
            {group.pages.map(page => (
              <li key={page.slug} className="[&_a]:block [&_a]:py-1.5">
                <PageLink vibe={vibe} page={page} />
              </li>
            ))}
          </div>
        ))}
      </ul>
    </aside>
  )
}
