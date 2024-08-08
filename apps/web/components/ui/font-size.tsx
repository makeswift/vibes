interface Size {
  variable: string
  class: string
  value: string
}

function FontSize({ sizes }: { sizes: Size[] }) {
  return (
    <div className="space-y-5 bg-contrast-100 p-5">
      {sizes?.map((size, index) => {
        return (
          <div key={index}>
            <div
              className="truncate leading-normal text-foreground md:text-2xl"
              style={{ fontSize: `var(${size.variable})` }}
            >
              The quick brown fox jumps over the lazy dog.
            </div>
            <div className="font-mono text-[13px] text-contrast-500">
              <span>{size.class}</span>
              <span className="ml-2 text-contrast-400">{size.value}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { FontSize }
