// vibes.site/docs/linearesque/button
import { MDXRemote } from 'next-mdx-remote/rsc'

import { readFile } from 'fs/promises'

// params { slug: '/controls/checkbox' }
export default async function Page({ params }) {
  const file = await readFile(process.cwd() + '/mdx/' + params.slug + '.mdx')

  // if file doesn't exist, redirect

  // otherwise, compile and render the MDX.
  return <MDXRemote source={file} />
}
