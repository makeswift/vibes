import CodeBlock from '.'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-[#07090D]">
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
