import { readFile } from 'fs/promises'
import path from 'path'

export function getPage(pathname: string) {
  return readFile(path.resolve(path.join('docs', `${pathname}.mdx`)), 'utf8')
}
