import CodeBlock from '.'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D] p-16 sm:min-h-64 lg:min-h-80">
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
