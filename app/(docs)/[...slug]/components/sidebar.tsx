import Image from 'next/image'

import { PageLink } from './page-link'

interface Props {
  groups: {
    name: string
    icon: string
    pages: string[]
  }[]
}

export function Sidebar({ groups }: Props) {
  return (
    <div className="h-full overflow-y-scroll py-8">
      {groups.map(group => (
        <div key={group.name} className="mb-2">
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
