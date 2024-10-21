import { Vibe } from '@/vibes/schema'

import { getChapter } from './navigation'
import { PageLink } from './page-link'

interface Props {
  vibeSlug: string
  vibes: Record<string, Vibe>
}

export function Sidebar({ vibes, vibeSlug }: Props) {
  const chapter = getChapter(vibes, vibeSlug)

  if (!chapter) return null

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 shrink-0 xl:block">
      <ul className="h-full space-y-5 overflow-y-auto py-10 text-foreground">
        {chapter.groups.map(group => (
          <div key={group.title}>
            <div className="mb-2.5 text-sm font-bold">{group.title}</div>
            {group.pages.map(page => (
              <li key={page.slug} className="[&_a]:block [&_a]:py-1.5">
                <PageLink chapterSlug={vibeSlug} page={page} />
              </li>
            ))}
          </div>
        ))}
      </ul>
    </aside>
  )
}
