import { CopyButton } from '@/components/ui/copy-button'

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10 h-96 w-full border border-black" />
      <main>
        <div className="relative">
          <pre>
            {`
            function helloWorld() {
              console.log("Hello, world!");
            }

            helloWorld();
            `}
          </pre>

          <CopyButton className="absolute right-3 top-3 z-20" />
        </div>
        <div className="vibes-prose prose !w-full flex-1">Testing</div>
      </main>
    </div>
  )
}
