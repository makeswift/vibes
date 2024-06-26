import { navigation } from './navigation'
import { SidebarLink } from './sidebar-link'

interface Props {
  vibeSlug: string
}

export function Sidebar({ vibeSlug }: Props) {
  const vibe = navigation.vibes.find(vibe => vibe.slug === vibeSlug)

  return (
    <div className="space-y-2 text-docs-foreground">
      {vibe?.groups.map(group => (
        <div key={group.title}>
          <div className="flex items-center gap-2 py-1.5 font-docs-heading text-sm leading-normal">
            {group.title}
          </div>

          <ul>
            {group.pages.map(page => (
              <li key={page.slug}>
                <SidebarLink href={`/docs/${vibeSlug}/${page.slug}`}>{page.title}</SidebarLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
