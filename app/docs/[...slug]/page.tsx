// vibes.site/docs/linearesque/button
import { MDXRemote } from 'next-mdx-remote/rsc'
import { permanentRedirect } from 'next/navigation'

import { readFile } from 'fs/promises'

// params { slug: '/controls/checkbox' }
export default async function Page({ params }: { params: { slug?: [string] } }) {
  const file = await readFile(process.cwd() + '/mdx/' + params.slug?.join('/') + '.mdx').catch(() =>
    permanentRedirect('/404')
  )

  // otherwise, compile and render the MDX.
  return <MDXRemote source={file} />
}
