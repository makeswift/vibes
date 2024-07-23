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
  hideCopyButton?: boolean
}

export async function CodeFromFile({ pathname, basePath, hideCopyButton = false }: Props) {
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
    <div className="relative mb-8 md:mb-10">
      <div className="" dangerouslySetInnerHTML={{ __html: code }} />

      {!hideCopyButton && <CopyButton className="absolute right-2 top-2" clipboard={file} />}
    </div>
  )
}
