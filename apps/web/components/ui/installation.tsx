import Link from 'next/link';
import path from 'path';
import { Fragment } from 'react';

import { Vibe } from '@/vibes/schema';

import { CodeBlock } from './code-block';
import { CodeFromFile } from './code-from-file';
import { Reveal } from './reveal';
import { Step, Steps } from './steps';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

function RegistryDependencies({ items, vibe }: { items: string[]; vibe: Vibe }) {
  const pages = vibe.navigation.flatMap((nav) => nav.pages);

  return (
    <>
      {items.map((item, index, arr) => {
        const page = pages.find((p) => p.component === item);

        return (
          <Fragment key={index}>
            {/* eslint-disable-next-line no-nested-ternary */}
            {arr.length > 1 && index > 0 ? (index < arr.length - 1 ? ', ' : ' and ') : ''}
            <Link href={page ? `/docs/${vibe.slug}/${page.slug}` : '#'}>{item}</Link>
          </Fragment>
        );
      })}{' '}
      {items.length > 1 ? 'components' : 'component'}
    </>
  );
}

export function Installation({ vibe, componentName }: { vibe: Vibe; componentName: string }) {
  const component = vibe.components.find((c) => c.name === componentName);

  if (!component) return null;

  return (
    <>
      <h2 id="installation">Installation</h2>
      <Tabs defaultValue="cli">
        <TabsList>
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>
        <TabsContent className="pt-4" value="cli">
          <Steps>
            <Step>
              <h3>Run the following command</h3>
              <CodeBlock lang="bash">{`vibes add ${vibe.slug}/${componentName}`}</CodeBlock>
            </Step>
            <Step>
              <h3>Install the dependencies</h3>
              The CLI will list the dependencies for you to install using your preferred package
              manager.
            </Step>
          </Steps>
        </TabsContent>
        <TabsContent className="pt-4" value="manual">
          <Steps>
            {component.registryDependencies.length > 0 && (
              <Step>
                <h3>Add the following {vibe.name} components</h3>
                <p>
                  The {componentName} component uses the{' '}
                  <RegistryDependencies items={component.registryDependencies} vibe={vibe} />. Make
                  sure you have added {component.registryDependencies.length > 1 ? 'them' : 'it'} to
                  your project.
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
                      <p className="text-foreground -mb-4 font-mono text-sm font-bold">{file}</p>
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
  );
}
