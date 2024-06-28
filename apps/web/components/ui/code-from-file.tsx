import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerRemoveLineBreak,
} from '@shikijs/transformers'
import { readFile } from 'fs/promises'
import path from 'path'
import { codeToHtml } from 'shiki'

import { CopyButton } from './copy-button'

interface Props {
  pathname: string
  basePath?: string
}

export async function CodeFromFile({ pathname, basePath }: Props) {
  const file = await readFile(path.join(basePath ?? process.cwd(), pathname), 'utf8')
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
        className="not-prose max-w-full overflow-x-auto rounded-md bg-background p-5 shadow-md"
        dangerouslySetInnerHTML={{ __html: code }}
      />

      <CopyButton className="absolute right-2 top-2" selectorFromParent="& > div > pre" />
    </div>
  )
}
