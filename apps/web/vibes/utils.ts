import * as Vibes from '.'
import { Navigation, Vibe } from './schema'

export function getVibe(slug: string): Vibe | undefined {
  return Object.values(Vibes).find(vibe => vibe.slug === slug)
}
