import { Vibe } from '@/vibes/schema'

import { brands } from './brands'
import { components } from './components'
import { examples } from './examples'
import { navigation } from './navigation'

export default {
  name: '2px',
  slug: '2px',
  navigation,
  components: [...components, ...examples],
  brands,
  author: {
    name: 'Tinloof',
    url: 'https://tinloof.com',
  },
  description: 'A 2px vibe',
  thumbnail: '/2px/thumbnail.png',
  tags: ['Ecommerce'],
} satisfies Vibe
