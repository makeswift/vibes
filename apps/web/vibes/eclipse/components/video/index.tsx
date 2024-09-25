'use client'

import Image from 'next/image'
import { ComponentPropsWithoutRef, Ref, forwardRef, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import { VimeoPlayer } from './components/VimeoPlayer'

export interface Props {
  className?: string
  aspectRatio?: '16:9' | '4:3' | '21:9'
  thumbnail?: { url: string; dimensions: { width: number; height: number } }
  altText?: string
  priority?: boolean
  videoUrl: string
  options?: ComponentPropsWithoutRef<typeof VimeoPlayer>['options']
}

function parseVideoId(url: string = ''): number | undefined {
  const match = /(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(\d+)/.exec(url)

  return match ? parseInt(match[1], 10) : undefined
}

export const Video = forwardRef(function Video(
  { className, aspectRatio = '16:9', videoUrl, thumbnail, altText, options, priority }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div ref={ref} className={clsx(className, 'relative')}>
        <Dialog.Trigger asChild>
          <a className="group block w-full cursor-pointer" aria-label="Play video">
            {thumbnail ? (
              <Image
                className={clsx(
                  'w-full object-cover',
                  {
                    '4:3': 'aspect-[4/3]',
                    '16:9': 'aspect-video',
                    '21:9': 'aspect-[21/9]',
                  }[aspectRatio]
                )}
                src={thumbnail.url}
                alt={altText ?? 'Video'}
                width={thumbnail.dimensions.width}
                height={thumbnail.dimensions.height}
                priority={priority}
              />
            ) : (
              <div className="bg-muted-background/50 aspect-video w-full"></div>
            )}

            <div className="noise shadow-foreground/2 rounded-circle after:rounded-circle ring-border absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background/60 ring-1 backdrop-blur-md transition duration-300 group-hover:bg-background/75 sm:h-36 sm:w-36">
              <svg className="ml-2 w-10 sm:w-12" viewBox="0 0 46 52" fill="none">
                <path
                  d="M0 47.1755V4.8245C0 1.76856 3.2881 -0.158666 5.95442 1.33448L43.7678 22.51C46.4953 24.0373 46.4953 27.9627 43.7678 29.49L5.95441 50.6655C3.28809 52.1587 0 50.2314 0 47.1755Z"
                  fill="url(#paint0_linear_133_22)"
                  fillOpacity="0.75"
                />
                <path
                  d="M0 47.1755V4.8245C0 1.76856 3.2881 -0.158666 5.95442 1.33448L43.7678 22.51C46.4953 24.0373 46.4953 27.9627 43.7678 29.49L5.95441 50.6655C3.28809 52.1587 0 50.2314 0 47.1755Z"
                  fill="#EA3BA7"
                  fillOpacity="0.2"
                />
                <path
                  d="M0.5 47.1755V4.8245C0.5 2.15055 3.37708 0.464229 5.71012 1.77073L43.5235 22.9462C45.91 24.2827 45.91 27.7173 43.5235 29.0538L5.71011 50.2293C3.37708 51.5358 0.5 49.8494 0.5 47.1755Z"
                  stroke="#F59DD3"
                  strokeOpacity="0.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_133_22"
                    x1="25"
                    y1="-2"
                    x2="25"
                    y2="54"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EA3BA7" stopOpacity="0" />
                    <stop offset="1" stopColor="#EA3BA7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-fadeIn fixed inset-0 z-[40] bg-black/80 backdrop-blur-sm" />
          <Dialog.Content className="data-[state=open]:animate-fadeIn fixed inset-0 z-[50] focus:outline-none">
            <div className="absolute left-1/2 top-1/2 z-50 flex aspect-video h-[80vh] max-w-full -translate-x-1/2 -translate-y-1/2 items-center md:max-w-[80vw]">
              <VimeoPlayer options={{ ...options, id: parseVideoId(videoUrl) }} />
            </div>
            <Dialog.Close asChild>
              <button
                aria-label="Close video"
                className="noise bg-muted-background/10 before:rounded-circle fixed right-5 top-5 z-[60] inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full text-center font-medium text-foreground ring-1 ring-inset ring-foreground/20 backdrop-blur-lg transition duration-1000 before:absolute before:bottom-0 before:left-1/2 before:-z-10 before:h-10 before:w-[calc(100%-5px)] before:-translate-x-1/2 before:translate-y-1/2 before:scale-50 before:bg-foreground/20 before:opacity-0  before:blur-md before:transition-all before:duration-700 before:ease-in-out hover:ring-foreground/30 before:hover:scale-150 hover:before:opacity-100 focus:outline-none"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.05026 0.636039L0.636042 2.05025L5.58579 7L0.636042 11.9497L2.05026 13.364L7 8.41421L11.9498 13.364L13.364 11.9497L8.41422 7L13.364 2.05025L11.9498 0.636039L7 5.58579L2.05026 0.636039Z"
                    fill="white"
                  />
                </svg>
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </div>
    </Dialog.Root>
  )
})
export default Video
