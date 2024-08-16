import clsx from 'clsx'

type Props = {
  navOpen: boolean
  setNavOpen: (open: boolean) => void
}

export default function HamburgerMenuButton({ navOpen, setNavOpen }: Props) {
  return (
    <button
      onClick={() => setNavOpen(!navOpen)}
      aria-label="Toggle navigation"
      className="group relative rounded-lg p-2 transition-colors @4xl:hidden @4xl:hover:bg-contrast-100"
    >
      <div className="flex h-4 w-4 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
        <div
          className={clsx(
            'h-[1px] origin-left transform bg-foreground transition-all duration-300',
            navOpen ? 'translate-x-10' : 'w-7'
          )}
        />
        <div
          className={clsx(
            'h-[1px] transform rounded bg-foreground transition-all delay-75 duration-300',
            navOpen ? 'translate-x-10' : 'w-7'
          )}
        />
        <div
          className={clsx(
            'h-[1px] origin-left transform bg-foreground transition-all delay-150 duration-300',
            navOpen ? 'translate-x-10' : 'w-7'
          )}
        />

        <div
          className={clsx(
            'absolute top-2 flex transform items-center justify-between transition-all duration-500',
            navOpen ? 'w-12 translate-x-0' : 'w-0 -translate-x-10'
          )}
        >
          <div
            className={clsx(
              'absolute h-[1px] w-4 transform bg-foreground transition-all delay-300 duration-500',
              navOpen ? 'rotate-45' : 'rotate-0'
            )}
          />
          <div
            className={clsx(
              'absolute h-[1px] w-4 transform bg-foreground transition-all delay-300 duration-500',
              navOpen ? '-rotate-45' : 'rotate-0'
            )}
          />
        </div>
      </div>
    </button>
  )
}
