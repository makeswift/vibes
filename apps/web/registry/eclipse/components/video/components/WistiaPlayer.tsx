import Image from 'next/image'
import Script from 'next/script'
import { Ref, forwardRef, useEffect, useState } from 'react'

import clsx from 'clsx'

type Props = {
  className?: string
  url?: string
  options?: WistiaPlayerOptions
  aspectRatio?: number
  onHasData?: (video: WistiaVideoAPI) => void
  popover?: boolean
}

export type WistiaPlayerOptions = {
  autoplay?: boolean
  controlsVisibleOnLoad?: boolean
  copyLinkAndThumbnailEnabled?: boolean
  doNotTrack?: boolean
  email?: string
  endVideoBehavior?: 'default' | 'reset' | 'loop'
  fakeFullscreen?: boolean
  fitStrategy?: 'contain' | 'cover' | 'fill' | 'none'
  fullscreenButton?: boolean
  fullscreenOnRotateToLandscape?: boolean
  keyMoments?: boolean
  muted?: boolean
  playbackRateControls?: boolean
  playbar?: boolean
  playButton?: boolean
  playerColor?: string
  playlistLinks?: string
  playlistLoop?: boolean
  playsinline?: boolean
  playPauseNotifier?: boolean
  playSuspendedOffscreen?: boolean
  plugin?: {
    'requireEmail-v1': {
      allowSkip?: boolean
      alwaysShow?: boolean
      topText?: string
      bottomText?: string
      time?: number
      askName?: boolean
      invalidDomains?: string
      validDomains?: string
      emailExampleText?: string
      firstNameExampleText?: string
      lastNameExampleText?: string
      sectionIndex?: number
      videoIndex?: number
    }
    'postRoll-v1': {
      autoSize?: boolean
      backgroundOpacity?: number
      image?: string
      link?: string
      on?: boolean
      raw?: string
      rewatch?: boolean
      text?: string
      time?: number
    }
    'midrollLink-v1': {
      links:
        | {
            time?: number
            duration?: number
            text?: string
            url?: string
          }[]
        | false
    }
    videoThumbnail?: {
      trimStart: number
      trimEnd: number
      on?: boolean
      hashedId?: string
      async?: false
    }
    share?: {
      channels?: string
      pageTitle?: string
      overrideUrl?: boolean
      pageUrl?: string
      downloadType?: 'sd_mp4' | 'hd_mp4' | 'original'
      tweetText?: string
    }
    chapters?: {
      on?: boolean
      chapterList?: { title: string; time: number }[]
    }
    'captions-v1': {
      onByDefault?: boolean
      language?: string
      subtitlesScale?: number
      transcript?: boolean
    }
  }
  preload?: 'none' | 'metadata' | 'auto' | 'true' | 'false'
  qualityControl?: boolean
  qualityMax?: number
  qualityMin?: number
  resumable?: boolean
  seo?: boolean
  settingsControl?: boolean
  silentAutoPlay?: boolean
  smallPlayButton?: boolean
  stillUrl?: string
  time?: number | string
  thumbnailAltText?: string
  videoFoam?: boolean | { minWidth: number; maxWidth: number; minHeight: number; maxHeight: number }
  volume?: number
  volumeControl?: boolean
  wmode?: 'opaque' | 'transparent' | 'window'
}

export type WistiaVideoAPI = {
  addToPlaylist: (
    hashedId: string,
    options?: WistiaPlayerOptions,
    position?: { before?: string; after?: string; index?: number }
  ) => void
  aspect: () => number
  bind: (event: string, callback: () => void) => void
  cancelFullscreen: () => void
  duration: () => number
  email: (() => string | null) | ((val: string) => void)
  embedded: () => boolean
  eventKey: () => string
  getSubtitlesScale: () => number
  hasData: () => boolean
  hashedId: () => string
  height: (() => number) | ((val: number, options?: { constrain: boolean }) => void)
  inFullscreen: () => boolean
  isMuted: () => boolean
  mute: () => void
  name: () => string | null
  pause: () => void
  percentWatched: () => number
  play: () => void
  playbackRate: (rate: number) => void
  ready: () => boolean
  remove: () => void
  replaceWith: (
    hashedId: string,
    options?: WistiaPlayerOptions & { transition: 'slide' | 'fade' | 'crossfade' | 'none' }
  ) => void
  requestFullscreen: () => void
  revoke: () => void
  secondsWatched: () => number
  secondsWatchedVector: () => number[]
  setSubtitlesScale: (scale: number) => void
  state: () => 'beforeplay' | 'playing' | 'paused' | 'ended'
  time: (() => number) | ((val: number) => void)
  unbind: (event: string, callback: () => void) => void
  unmute: () => void
  videoHeight: (() => number) | ((val: number, options?: { constrain: boolean }) => void)
  videoQuality: (() => string) | ((val: string) => void)
  videoWidth: (() => number) | ((val: number, options?: { constrain: boolean }) => void)
  visitorKey: () => string
  volume: (() => number) | ((val: number) => void)
  width: (() => number) | ((val: number, options?: { constrain: boolean }) => void)
}

function getWistiaIdFromURL(url: string) {
  try {
    const paths = new URL(url).pathname.replace('.jsonp', '').split('/')

    return paths[paths.indexOf('medias') + 1] || paths[paths.indexOf('iframe') + 1]
  } catch (e) {
    return null
  }
}

export const WistiaPlayer = forwardRef(function WistiaPlayer(
  { className, url, aspectRatio = 16 / 9, options, onHasData, popover }: Props,
  ref: Ref<HTMLDivElement>
) {
  const id = url && getWistiaIdFromURL(url)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!id) return

    // @ts-expect-error _wq is not defined
    window._wq = window._wq || []

    const config = {
      id,
      onHasData,
      options: options ?? {},
    }

    // @ts-expect-error _wq is not defined
    window._wq.push(config)

    return () => {
      // @ts-expect-error _wq is not defined
      window._wq.push({ revoke: config })
    }
  }, [id, options, onHasData])

  return (
    <>
      <Script strategy="lazyOnload" src="https://fast.wistia.com/assets/external/E-v1.js" />
      <div className={className} ref={ref}>
        {id ? (
          <div
            className="wistia_responsive_padding relative"
            style={{ paddingTop: `${100 / aspectRatio}%` }}
          >
            <div className="wistia_responsive_wrapper absolute inset-0">
              <div
                className={clsx(
                  `wistia_embed wistia_async_${id} relative h-full w-full`,
                  popover && 'popover=true'
                )}
              >
                <div
                  className={clsx(
                    'wistia_swatch absolute inset-0 overflow-hidden transition-opacity',
                    loaded ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <Image
                    className="blur-sm"
                    alt="thumbnail"
                    aria-hidden
                    src={`https://fast.wistia.com/embed/medias/${id}/swatch`}
                    fill
                    onLoad={() => setLoaded(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full rounded-lg bg-yellow-300 p-5 text-center text-lg">
            Cannot find ID of Wistia video. The Share URL should look like &nbsp;
            <code>https://fast.wistia.com/medias/:yourID</code>
          </div>
        )}
      </div>
    </>
  )
})
