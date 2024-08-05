interface Font {
  name: string
  variable: string
  class: string
}

function FontFamily({ fonts }: { fonts: Font[] }) {
  return (
    <div className="space-y-5 bg-contrast-100 p-5">
      {fonts?.map((font, index) => {
        return (
          <div key={index}>
            <div
              className="truncate text-xl leading-normal text-foreground md:text-2xl"
              style={{ fontFamily: `var(${font.variable})` }}
            >
              {font.name}
            </div>
            <div className="font-mono text-[13px] text-contrast-500">{font.class}</div>
          </div>
        )
      })}
    </div>
  )
}

export { FontFamily }
