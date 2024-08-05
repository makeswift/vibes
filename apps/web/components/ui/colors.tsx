import clsx from 'clsx'

import { CopyButton } from './copy-button'

interface Color {
  name: string
  value: string
}

function Colors({ colors }: { colors: Color[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-4 sm:gap-x-2 sm:gap-y-6 md:grid-cols-5">
      {colors?.map((color, index) => {
        return (
          <div key={index} className="group">
            <div
              className={clsx(
                'mb-1 h-12 w-full border',
                color.value === '#FFFFFF' ?? '#ffffff'
                  ? 'border-contrast-200'
                  : 'border-transparent'
              )}
              style={{ backgroundColor: `${color.value}` }}
            ></div>
            <div className="relative">
              <div className="font-mono text-xs text-foreground">{color.name}</div>
              <div className="text-xs text-contrast-400">{color.value}</div>
              <CopyButton
                className="absolute right-0 top-0 translate-y-2 opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100"
                clipboard={color.value}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { Colors }
