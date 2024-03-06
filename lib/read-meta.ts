import { readFile } from 'fs/promises'
import matter from 'gray-matter'

export async function readMeta(pathname: string): Promise<{ [key: string]: string }> {
  const { data } = matter(await readFile(process.cwd() + pathname))

  return data
}
