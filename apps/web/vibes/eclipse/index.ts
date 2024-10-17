import { Vibe } from '@/vibes/schema'

// import { brands } from './brands'
// import { components } from './components'
// import { examples } from './examples'
// import { navigation } from './navigation'

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
  navigation: [
    {
      title: 'Getting started',
      pages: [{ title: 'Installation', slug: 'installation', file: 'docs/installation.mdx' }],
    },
  ],
  components: [
    {
      name: 'accordions',
      dependencies: ['clsx', '@radix-ui/react-accordion'],
      registryDependencies: [],
      files: ['components/accordions/index.tsx'],
    },
  ],
  brands: [
    {
      name: 'Aquamarine',
      logo: '',
      cssVars: {
        '--primary': '176 97% 46%',
        '--accent': '248 90% 62%',
        '--background': '220 30% 4%',
        '--foreground': '0 0% 100%',
        '--success': '142 50% 50%',
        '--error': '357 69% 45%',
        '--warning': '25 73% 45%',
        '--info': '220 70% 45%',
        '--contrast-100': '220 20% 76%',
        '--contrast-200': '220 15% 60%',
        '--contrast-300': '220 12% 50%',
        '--contrast-400': '220 15% 36%',
        '--contrast-500': '220 20% 25%',

        '--font-family-heading': '',
        '--font-family-body': '',
        '--font-family-mono': '',
      },
    },
  ],
  comingSoon: true,
} satisfies Vibe
