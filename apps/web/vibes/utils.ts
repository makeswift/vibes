import { Vibe } from './schema'

import * as Vibes from '.'

export function getVibe(slug: string): Vibe | undefined {
  return Object.values(Vibes).find(vibe => vibe.slug === slug)
}
