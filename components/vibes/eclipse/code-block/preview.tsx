import CodeBlock from '.'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white">
      <CodeBlock
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
