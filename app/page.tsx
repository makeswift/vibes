import Image from 'next/image'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="vibes-prose prose min-h-screen w-full p-16">
      <h1>This is a main header</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
        aliquet nibh nec urna. In <code>nisi neque</code>, aliquet vel, dapibus id, mattis vel,
        nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
        blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
      </p>

      <h2>This is a secondary header</h2>
      <p>
        Lorem <a href="/">ipsum dolor sit amet</a>, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
        mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
        leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
      </p>

      <div className="flex gap-1">
        <Button variant="default" size="default">
          Testing
        </Button>

        <Button variant="ghost" size="default">
          Testing
        </Button>
      </div>

      <h3>This is a smaller subheader</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
        aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
        pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc
        tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
      </p>

      <ul>
        <li>This is a list item</li>
        <li>This is a list item</li>
        <li>This is a list item</li>
        <li>This is a list item</li>
      </ul>

      <h3>Some code</h3>
      <pre>
        <code>This is some example code</code>
      </pre>
    </main>
  )
}
