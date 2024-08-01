import Link from 'next/link'

import path from 'path'

import { Vibe } from '@/vibes/schema'
import { getVibe } from '@/vibes/utils'

import { CodeBlock } from './code-block'
import { CodeFromFile } from './code-from-file'
import { Reveal } from './reveal'
import { Step, Steps } from './steps'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

function RegistryDependencies({ items, vibe }: { items: string[]; vibe: Vibe }) {
  const pages = vibe.navigation.flatMap(nav => nav.pages)

  return (
    <>
      {items.map((item, index, arr) => {
        const page = pages.find(page => page.component === item)

        return (
          <Link key={item} href={page ? `/docs/${vibe.slug}/${page.component}` : '#'}>
            {item}
            {arr.length > 1 ? (index < arr.length - 1 ? ', ' : 'and ') : ''}
          </Link>
        )
      })}{' '}
      {items.length > 1 ? 'components' : 'component'}
    </>
  )
}

export function Installation({
  vibeSlug,
  componentName,
}: {
  vibeSlug: string
  componentName: string
}) {
  const vibe = getVibe(vibeSlug)

  if (!vibe) return null

  const component = vibe.components.find(component => component.name === componentName)

  if (!component) return null

  return (
    <div className="mt-8">
      <h2 id="installation">Installation</h2>
      <Tabs defaultValue="cli">
        <TabsList>
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>
        <TabsContent value="cli" className="pt-4">
          <Steps>
            <Step>
              <h3>Run the following command</h3>
              <CodeBlock lang="bash">{`npx vibes add ${vibeSlug}/${componentName}`}</CodeBlock>
            </Step>
            <Step>
              <h3>Import the component</h3>
              You can now find the {componentName} component in your project in the{' '}
              <code>/vibes/{vibeSlug}</code> directory
            </Step>
          </Steps>
        </TabsContent>
        <TabsContent value="manual" className="pt-4">
          <Steps>
            {component.registryDependencies.length > 0 && (
              <Step>
                <h3>
                  Add the{' '}
                  <RegistryDependencies items={component.registryDependencies} vibe={vibe} />
                </h3>
                <p>
                  The {componentName} component uses the{' '}
                  <RegistryDependencies items={component.registryDependencies} vibe={vibe} />. Make
                  sure you have {component.registryDependencies.length > 1 ? 'them' : 'it'}{' '}
                  installed in your project
                </p>
              </Step>
            )}
            {component.dependencies.length > 0 && (
              <Step>
                <h3>Install the following dependencies</h3>
                <CodeBlock lang="bash">
                  {`npm install ${component.dependencies.join(' ')}`}
                </CodeBlock>
              </Step>
            )}
            {component.files.length > 0 && (
              <Step>
                <h3 className="mb-2">Copy and paste the following code into your project</h3>
                <div className="space-y-8">
                  {component.files.map((file, index) => (
                    <div className="space-y-3" key={index}>
                      <code>{file}</code>
                      <Reveal>
                        <CodeFromFile
                          basePath={path.join(process.cwd(), 'vibes', vibe.slug)}
                          pathname={file}
                        />
                      </Reveal>
                    </div>
                  ))}
                </div>
              </Step>
            )}
            <Step>
              <h3>Update the import paths to match your project setup</h3>
            </Step>
          </Steps>
        </TabsContent>
      </Tabs>
    </div>
  )
}
