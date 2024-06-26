import { CodeBlock } from '@/registry/eclipse/components/code-block'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <CodeBlock
        className="w-[600px]"
        code={`
            function helloWorld() {
              console.log("Hello, world!");
            }

            helloWorld();
            `}
      ></CodeBlock>
    </div>
  )
}
