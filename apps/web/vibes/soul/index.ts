
import { brands } from './brands'
import { examples } from './examples'
import { navigation } from './navigation'
import { primitives } from './primitives'
import { sections } from './sections'
import { Vibe } from '@/vibes/schema'

export default {
  name: 'Soul',
  slug: 'soul',
  tags: ['Ecommerce'],
  description: `A minimalistic modern ecommerce theme inspired by Nike, Lululemon and other leading apparel brands.`,
  thumbnail: 'https://rstr.in/monogram/vibes/O7uLelHbgdn',
  author: {
    name: 'Monogram',
    url: 'https://monogram.io',
  },
  navigation,
  components: [...primitives, ...sections, ...examples],
  brands,
} satisfies Vibe
