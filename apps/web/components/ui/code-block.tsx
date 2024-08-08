import clsx from 'clsx'
import { CodeToHastOptions, ShikiTransformer, codeToHtml, createCssVariablesTheme } from 'shiki'

import { transformers } from '@/lib/shiki'

import { CopyButton } from './copy-button'

const myTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
})

interface Props {
  children: string
  hideCopyButton?: boolean
  lang?: CodeToHastOptions['lang']
  showLineNumbers?: boolean
  className?: string
}

export async function CodeBlock({
  children,
  lang = 'javascript',
  showLineNumbers = false,
  hideCopyButton = false,
  className,
}: Props) {
  const __html = await codeToHtml(children, {
    lang,
    themes: {
      light: myTheme,
      dark: myTheme,
    },
    transformers: [
      ...transformers,
      {
        name: 'transformers:pre',
        pre(node) {
          if (showLineNumbers) {
            this.addClassToHast(node, 'relative')
            this.addClassToHast(node, 'show-line-numbers')
          }
        },
      } as ShikiTransformer,
    ],
  })

  return (
    <div
      className={clsx(
        'relative my-4 w-full overflow-scroll bg-contrast-100 only:my-0 md:my-5',
        className
      )}
    >
      {!hideCopyButton && (
        <div className="pointer-events-none sticky top-0 z-10 flex w-full justify-end p-2">
          <CopyButton className="pointer-events-auto" clipboard={children} />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html }} className={clsx(!hideCopyButton && '-mt-[47px]')} />
    </div>
  )
}
