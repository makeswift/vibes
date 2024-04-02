import Image from 'next/image'

import navigation from './navigation.json'
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
          <div className="font-heading flex items-center gap-2 py-1.5 text-sm leading-normal">
            <Image
              src={group.icon}
              width={20}
              height={20}
              alt="Icon"
              priority
              className="stroke-foreground"
            />
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
