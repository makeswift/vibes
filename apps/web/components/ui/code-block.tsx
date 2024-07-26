import { CodeToHastOptions, ShikiTransformer, codeToHtml } from 'shiki'

import { transformers } from '@/lib/shiki'

import { CopyButton } from './copy-button'

interface Props {
  children: string
  hideCopyButton?: boolean
  lang?: CodeToHastOptions['lang']
  showLineNumbers?: boolean
}

export async function CodeBlock({
  children,
  lang = 'javascript',
  showLineNumbers = false,
  hideCopyButton = false,
}: Props) {
  const __html = await codeToHtml(children, {
    lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
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
    <div className="relative">
      <div dangerouslySetInnerHTML={{ __html }} />

      {!hideCopyButton && <CopyButton className="absolute right-2 top-2" clipboard={children} />}
    </div>
  )
}
