import { Vibe } from '@/vibes/schema'

// import { brands } from './brands'
// import { components } from './components'
// import { examples } from './examples'
// import { navigation } from './navigation'

export default {
  name: '2px',
  slug: '2px',
  author: {
    name: 'Tinloof',
    url: 'https://tinloof.com',
  },
  description: 'A 2px vibe',
  thumbnail: '/2px/thumbnail.png',
  tags: ['Ecommerce'],
  navigation: [
    {
      title: 'Getting started',
      pages: [{ title: 'Installation', slug: 'installation', file: 'docs/installation.mdx' }],
    },
  ],
  components: [
    {
      name: 'dropdown',
      dependencies: [],
      registryDependencies: [],
      files: ['./components/dropdown/index.tsx'],
    },
  ],
  brands: [
    {
      name: 'Obsidian',
      logo: '',
      cssVars: {
        '--primary': '43	100%	73%',
        '--accent': '9 99% 61%',
        '--background': '0 255% 100%',
        '--foreground': '0 0% 0%',
        '--success': '126 100% 34%',
        '--error': '0 100% 50%',
        '--warning': '0 0% 0%',
        '--info': '0 0% 0%',
        '--contrast-100': '0 0% 96%',
        '--contrast-200': '0 0% 87%',
        '--contrast-300': '0 0% 67%',
        '--contrast-400': '0 0% 51%',
        '--contrast-500': '0 0% 27%',
        '--font-family-heading': '',
        '--font-family-body': '',
        '--font-family-mono': '',
      },
    },
  ],
  comingSoon: true,
} satisfies Vibe
