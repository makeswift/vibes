import { Icon } from '@/components/ui/icon'

import { navigation } from './navigation'
import { PageLink } from './page-link'

interface Props {
  slug: string[]
}

export function Sidebar({ slug }: Props) {
  const chapter = navigation.chapters.find(chapter => chapter.slug === slug[0])

  return (
    <div className="space-y-2">
      {chapter?.groups.map(group => (
        <div key={group.name}>
          <div className="flex items-center gap-2 py-1.5 font-heading text-sm leading-normal">
            <Icon name={group.icon} />
            {group.name}
          </div>

          <ul>
            {group.pages.map(path => (
              <li key={path}>
                <PageLink path={path} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
