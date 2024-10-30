
import path from 'path'
import Link from 'next/link'


import { CodeBlock } from './code-block'
import { CodeFromFile } from './code-from-file'
import { Reveal } from './reveal'
import { Step, Steps } from './steps'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
import { Vibe } from '@/vibes/schema'

function RegistryDependencies({ items, vibe }: { items: string[]; vibe: Vibe }) {
  const pages = vibe.navigation.flatMap(nav => nav.pages)

  return (
    <>
      {items.map((item, index, arr) => {
        const page = pages.find(page => page.component === item)

        return (
          <>
            {arr.length > 1 && index > 0 ? (index < arr.length - 1 ? ', ' : ' and ') : ''}
            <Link key={item} href={page ? `/docs/${vibe.slug}/${page.component}` : '#'}>
              {item}
            </Link>
          </>
        )
      })}{' '}
      {items.length > 1 ? 'components' : 'component'}
    </>
  )
}

export function Installation({ vibe, componentName }: { vibe: Vibe; componentName: string }) {
  const component = vibe.components.find(component => component.name === componentName)

  if (!component) return null

  return (
    <>
      <h2 id="installation">Installation</h2>
      <Tabs defaultValue="manual">
        <TabsList>
          {/* <TabsTrigger value="cli">CLI</TabsTrigger> */}
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>
        {/* <TabsContent value="cli" className="pt-4">
          <p>Install the component from your command line.</p>
          <CodeBlock lang="bash">{`npx vibes add ${vibeSlug}/${componentName}`}</CodeBlock>

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
        </TabsContent> */}
        <TabsContent value="manual" className="pt-4">
          <Steps>
            {component.registryDependencies.length > 0 && (
              <Step>
                <h3>Add the following {vibe.name} components</h3>
                <p>
                  The {componentName} component uses the{' '}
                  <RegistryDependencies items={component.registryDependencies} vibe={vibe} />. Make
                  sure you have added {component.registryDependencies.length > 1 ? 'them' : 'it'} to
                  your project
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
                <h3>Copy and paste the following code into your project</h3>
                <div className="mt-5 space-y-6">
                  {component.files.map((file, index) => (
                    <div key={index}>
                      <p className="-mb-4 font-mono text-sm font-bold text-foreground">{file}</p>
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
          </Steps>
        </TabsContent>
      </Tabs>
    </>
  )
}
