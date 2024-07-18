import { Vibe } from '@/vibes/schema'

import { brands } from './brands'
import { components } from './components'
import { examples } from './examples'
import { navigation } from './navigation'

export default {
  name: 'Soul',
  slug: 'soul',
  navigation,
  components: [...components, ...examples],
  brands,
} satisfies Vibe
