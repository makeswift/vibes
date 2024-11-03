import { ReactNode } from 'react'

import { AccountLayoutLink } from './account-layout-link'

type Props = {
  links: {
    href: string
    label: string
  }[]
  children: ReactNode
}

export function AccountLayout({ links, children }: Props) {
  return (
    <div className="flex justify-center @container">
      <div className="flex w-full gap-12 px-12 py-12 @5xl:max-w-7xl">
        <div className="basis-48">
          <nav>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <AccountLayoutLink href={link.href}>{link.label}</AccountLayoutLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
