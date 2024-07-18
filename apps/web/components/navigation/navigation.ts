import * as Index from '@/vibes'

export type Link = {
  title: string
  href: string
}

export type Page = {
  title: string
  slug: string
}

export type Group = {
  title: string
  pages: Page[]
}

export type Vibe = {
  name: string
  slug: string
  groups: Group[]
}

export type Navigation = {
  links: Link[]
  vibes: Vibe[]
}

export const navigation = {
  links: [],
  vibes: Object.values(Index).map(registry => ({
    name: registry.name,
    slug: registry.slug,
    groups: registry.navigation.map(group => ({
      title: group.title,
      pages: group.pages.map(page => ({
        title: page.title,
        slug: page.slug,
      })),
    })),
  })),
} satisfies Navigation
