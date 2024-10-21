import { Vibe } from '@/vibes/schema'

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

export type Chapter = {
  name: string
  slug: string
  groups: Group[]
}

export type Navigation = {
  links: Link[]
  chapters: Chapter[]
}

export function mapVibesToNavigation(vibes: Record<string, Vibe>): Navigation {
  return {
    links: [],
    chapters: Object.values(vibes).map(registry => ({
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
  }
}

export function getChapter(vibes: Record<string, Vibe>, slug: string): Chapter | undefined {
  return mapVibesToNavigation(vibes).chapters.find(vibe => vibe.slug === slug)
}
