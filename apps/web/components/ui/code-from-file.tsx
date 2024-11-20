import { readFile } from 'fs/promises'
import path from 'path'
import { ComponentPropsWithoutRef } from 'react'

import { CodeBlock } from './code-block'

type CodeBlockProps = ComponentPropsWithoutRef<typeof CodeBlock>

function detectLang(pathname: string): CodeBlockProps['lang'] {
  const ext = path.extname(pathname)

  switch (ext) {
    case '.ts':
    case '.tsx':
      return 'typescript'
    case '.js':
    case '.jsx':
      return 'javascript'
    case '.json':
      return 'json'
    case '.yml':
    case '.yaml':
      return 'yaml'
    case '.md':
    case '.mdx':
      return 'markdown'
    case '.css':
      return 'css'
    default:
      return ext.slice(1)
  }
}

interface Props extends Omit<CodeBlockProps, 'children' | 'lang'> {
  pathname: string
  basePath?: string
}

export async function CodeFromFile({ pathname, basePath, ...rest }: Props) {
  const file = await readFile(path.join(basePath ?? process.cwd(), pathname), 'utf8')

  return (
    <CodeBlock {...rest} lang={detectLang(pathname)}>
      {file}
    </CodeBlock>
  )
}
