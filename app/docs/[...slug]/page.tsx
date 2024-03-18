// vibes.site/docs/linearesque/button
import { MDXRemote } from 'next-mdx-remote/rsc'
import dynamic from 'next/dynamic'
import { permanentRedirect } from 'next/navigation'

import { readFile } from 'fs/promises'
import { MDXComponents } from 'mdx/types'

const imports = {
  linearesque: {
    card: [
      {
        name: 'Button',
        import: dynamic(() =>
          import('@/components/ui/button').then(module => ({ default: module.Button }))
        ),
      },
      {
        name: 'Tabs',
        import: dynamic(() =>
          import('@/components/ui/tabs').then(module => ({ default: module.Tabs }))
        ),
      },
      {
        name: 'TabsContent',
        import: dynamic(() =>
          import('@/components/ui/tabs').then(module => ({ default: module.TabsContent }))
        ),
      },
      {
        name: 'TabsList',
        import: dynamic(() =>
          import('@/components/ui/tabs').then(module => ({ default: module.TabsList }))
        ),
      },
      {
        name: 'TabsTrigger',
        import: dynamic(() =>
          import('@/components/ui/tabs').then(module => ({ default: module.TabsTrigger }))
        ),
      },
    ],
  },
}
// params { slug: '/controls/checkbox' }
export default async function Page({ params }: { params: { slug?: string[] } }) {
  const file = await readFile(process.cwd() + '/mdx/' + params.slug?.join('/') + '.mdx').catch(() =>
    permanentRedirect('/404')
  )

  const vibe = params.slug?.[0] as keyof typeof imports
  const page = params.slug?.[1] as keyof (typeof imports)[typeof vibe]

  const components = {} as MDXComponents

  for (const { name, import: importPromise } of imports[vibe][page] || []) {
    const component = await importPromise
    components[name] = component
  }

  return <MDXRemote source={file} components={components} />
}
