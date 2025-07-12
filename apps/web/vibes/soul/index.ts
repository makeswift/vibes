import { Vibe } from '@/vibes/schema';

import { brands } from './brands';
import { examples } from './examples';
import { navigation } from './navigation';
import { primitives } from './registry/primitives';
import { sections } from './registry/sections';

export default {
  name: 'Soul',
  slug: 'soul',
  tags: ['Ecommerce'],
  description: `A minimalistic modern ecommerce theme inspired by Nike, Lululemon and other leading apparel brands.`,
  thumbnail: '/soul/soul-introduction.webp',
  author: {
    name: 'Monogram',
    url: 'https://monogram.io',
  },
  navigation,
  components: [...primitives, ...sections, ...examples],
  brands,
} satisfies Vibe;
