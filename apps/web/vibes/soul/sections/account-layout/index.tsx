import { ReactNode } from 'react'

type Props = {
  links: {
    href: string
    label: string
  }[]
  children: ReactNode
}

export function AccountLayout({ links, children }: Props) {
  return (
    <div className="@container">
      <div className="flex gap-8">
        <div className="basis-1/4">
          <nav>
            <ul>
              {links.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="basis-3/4">{children}</div>
      </div>
    </div>
  )
}
