import { useEffect, useRef } from 'react'

import Vimeo, { type Options } from '@vimeo/player'

const defaultOptions = {
  responsive: true,
  autoplay: true,
  controls: true,
  byline: true,
  title: true,
  portrait: true,
  transcript: true,
  muted: false,
  loop: false,
  dnt: false,
}

export interface Props {
  options?: Options
}

export function VimeoPlayer({ options }: Props) {
  const element = useRef<HTMLDivElement>(null)
  const player = useRef<Vimeo | null>(null)

  useEffect(() => {
    if (!element.current) return

    player.current = new Vimeo(element.current, {
      ...defaultOptions,
      ...(options ?? {}),
    })
  }, [options])

  return (
    <div
      ref={element}
      className="w-full overflow-hidden bg-background/90 shadow-lg md:rounded-2xl"
    />
  )
}
