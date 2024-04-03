import { readFile } from 'fs/promises'
import path from 'path'

export async function getPage(pathname: string) {
  return readFile(path.join(process.cwd(), 'docs', `${pathname}.mdx`))
}
