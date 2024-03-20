// vibes.site/docs/eclipse/button
import { MDXRemote } from 'next-mdx-remote/rsc'
import dynamic from 'next/dynamic'
import { permanentRedirect } from 'next/navigation'

import { readFile } from 'fs/promises'
import { MDXComponents } from 'mdx/types'

const common = [
  {
    name: 'AccordionList',
    import: dynamic(() =>
      import('@/components/ui/accordions').then(module => ({ default: module.AccordionList }))
    ),
  },
  {
    name: 'AccordionItem',
    import: dynamic(() =>
      import('@/components/ui/accordions').then(module => ({ default: module.AccordionItem }))
    ),
  },
  {
    name: 'AccordionTrigger',
    import: dynamic(() =>
      import('@/components/ui/accordions').then(module => ({ default: module.AccordionTrigger }))
    ),
  },
  {
    name: 'AccordionContent',
    import: dynamic(() =>
      import('@/components/ui/accordions').then(module => ({ default: module.AccordionContent }))
    ),
  },
  {
    name: 'Button',
    import: dynamic(() =>
      import('@/components/ui/button').then(module => ({ default: module.Button }))
    ),
  },
  {
    name: 'ComponentPreview',
    import: dynamic(() =>
      import('@/components/ui/component-preview').then(module => ({
        default: module.ComponentPreview,
      }))
    ),
  },
  {
    name: 'Content',
    import: dynamic(() =>
      import('@/components/ui/content').then(module => ({ default: module.Content }))
    ),
  },
  {
    name: 'Heading',
    import: dynamic(() =>
      import('@/components/ui/table-of-contents').then(module => ({
        default: module.Heading,
      }))
    ),
  },
  {
    name: 'Steps',
    import: dynamic(() =>
      import('@/components/ui/steps').then(module => ({ default: module.Steps }))
    ),
  },
  {
    name: 'Step',
    import: dynamic(() =>
      import('@/components/ui/steps').then(module => ({ default: module.Step }))
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
  {
    name: 'Table',
    import: dynamic(() =>
      import('@/components/ui/table').then(module => ({
        default: module.Table,
      }))
    ),
  },
  {
    name: 'TableRow',
    import: dynamic(() =>
      import('@/components/ui/table').then(module => ({
        default: module.TableRow,
      }))
    ),
  },
  {
    name: 'TableCell',
    import: dynamic(() =>
      import('@/components/ui/table').then(module => ({
        default: module.TableCell,
      }))
    ),
  },
  {
    name: 'TableOfContents',
    import: dynamic(() =>
      import('@/components/ui/table-of-contents').then(module => ({
        default: module.TableOfContents,
      }))
    ),
  },
]

const imports = {
  eclipse: {
    button: [
      {
        name: 'LinearButton',
        import: dynamic(() =>
          import('@/components/vibes/eclipse/button').then(module => ({
            default: module.Button,
          }))
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

  const allImports = [...common, ...(imports[vibe]?.[page] || [])]

  for (const { name, import: importPromise } of allImports) {
    const component = await importPromise
    components[name] = component
  }

  return <MDXRemote source={file} components={components} />
}
