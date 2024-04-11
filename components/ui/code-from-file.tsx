import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerRemoveLineBreak,
} from '@shikijs/transformers'
import { readFile } from 'fs/promises'
import { codeToHtml } from 'shiki'

import { CopyButton } from './copy-button'

interface Props {
  pathname: string
}

export async function CodeFromFile({ pathname }: Props) {
  const file = await readFile(process.cwd() + pathname, 'utf8')
  const code = await codeToHtml(file, {
    lang: 'javascript',
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    transformers: [transformerRemoveLineBreak()],
  })

  return (
    <div className="relative">
      <div
        className="not-prose overflow-x-auto bg-docs-background p-5"
        dangerouslySetInnerHTML={{ __html: code }}
      />

      <CopyButton className="absolute right-2 top-2" selectorFromParent="& > div > pre" />
    </div>
  )
}
