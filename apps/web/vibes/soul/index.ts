import { Vibe } from '@/vibes/schema'

import { brands } from './brands'
import { components } from './components'
import { examples } from './examples'
import { navigation } from './navigation'

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
  components: [...components, ...examples],
  brands,
  comingSoon: false,
} satisfies Vibe
