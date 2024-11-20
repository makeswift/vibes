import { Vibe } from '@/vibes/schema'

export interface Link {
  title: string
  href: string
}

export interface Page {
  title: string
  slug: string
}

export interface Group {
  title: string
  pages: Page[]
}

export interface Chapter {
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

export interface Navigation {
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
