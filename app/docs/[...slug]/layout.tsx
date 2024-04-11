import { redirect } from 'next/navigation'

import clsx from 'clsx'

import { Header, Sidebar } from '@/components/navigation'

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug?: string[] }
}) {
  if (!params.slug) return redirect('/')

  return (
    <>
      <Header sidebar={<Sidebar slug={params.slug} />} />

      <div className="px-5 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl gap-x-10 md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="top-16 z-10 hidden h-[calc(100vh-4rem)] w-full md:sticky md:block">
            <div className="h-full overflow-y-scroll py-8">
              <Sidebar slug={params.slug} />
            </div>
          </aside>

          <div
            className={clsx(
              'prose w-full max-w-full py-10 dark:prose-invert',
              'prose-headings:font-docs-heading prose-headings:text-docs-foreground first:prose-headings:mt-0',
              'prose-h1:mb-4 prose-h1:text-3xl',
              'prose-h2:mb-3 prose-h2:mt-10 prose-h2:text-xl',
              'prose-h3:mb-2 prose-h3:mt-8 prose-h3:text-base',
              'prose-p:font-light first:prose-p:mt-0',
              'prose-ul:pl-5 prose-ul:font-light',
              'prose-li:[&_::marker]:!text-docs-foreground',
              'prose-a:relative prose-a:inline-block prose-a:font-bold prose-a:no-underline prose-a:before:absolute prose-a:before:left-0 prose-a:before:top-full prose-a:before:h-[2px] prose-a:before:w-full prose-a:before:bg-gradient-to-r prose-a:before:from-docs-foreground prose-a:before:from-50% prose-a:before:to-transparent prose-a:before:to-0% prose-a:before:bg-[size:5px_2px] hover:prose-a:before:animate-scroll',
              '[&:not(pre_code)]:prose-code:m-0 [&:not(pre_code)]:prose-code:inline-block [&:not(pre_code)]:prose-code:rounded [&:not(pre_code)]:prose-code:bg-docs-foreground/5 [&:not(pre_code)]:prose-code:px-1 [&:not(pre_code)]:prose-code:py-0.5 [&:not(pre_code)]:prose-code:font-normal [&:not(pre_code)]:prose-code:leading-5',
              '[&:not(pre_code)]:prose-code:before:content-none [&:not(pre_code)]:prose-code:after:content-none',
              'prose-pre:my-5 prose-pre:rounded-none prose-pre:!bg-docs-foreground/5 prose-pre:py-5',
              'prose-pre:[&_code]:block prose-pre:[&_code]:px-5 prose-pre:[&_code]:py-5 prose-pre:[&_code]:text-sm prose-pre:[&_code]:leading-5'
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
