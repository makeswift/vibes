import { readFile } from 'fs/promises'
import path from 'path'

export function getPage(pathname: string) {
  return readFile(path.join(process.cwd(), 'docs', `${pathname}.mdx`))
}
