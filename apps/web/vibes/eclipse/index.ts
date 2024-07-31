import { Vibe } from '@/vibes/schema'

import { brands } from './brands'
import { components } from './components'
import { examples } from './examples'
import { navigation } from './navigation'

export default {
  name: 'Eclipse',
  slug: 'eclipse',
  tags: ['SaaS'],
  description: `A modern dark mode SaaS website vibe inspired by Linear, featuring minimalistic design, background textures, translucent foreground elements, and animated glow effects.`,
  thumbnail: '/eclipse/thumbnail.png',
  author: {
    name: 'Makeswift',
    url: 'https://makeswift.com',
  },
  navigation,
  components: [...components, ...examples],
  brands,
} satisfies Vibe
