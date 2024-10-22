import { Vibe, Navigation as VibeNavigation } from '@/vibes/schema'

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
  description: string
  tags: string[]
  thumbnail: string
  author: {
    name: string
    url: string
  }
  groups: Group[]
}

export type Navigation = {
  links: Link[]
  chapters: Chapter[]
}

export function toChapter({
  name,
  slug,
  description,
  tags,
  thumbnail,
  author,
  navigation,
}: Vibe): Chapter {
  return {
    name,
    slug,
    description,
    tags,
    thumbnail,
    author,
    groups: navigation.map(group => ({
      title: group.title,
      pages: group.pages.map(page => ({
        title: page.title,
        slug: page.slug,
      })),
    })),
  }
}
