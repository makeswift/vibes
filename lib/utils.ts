// import { useEffect } from 'react'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

// export function usePollAnimationFrame(callback: (timestamp: number) => unknown) {
//   useEffect(() => {
//     let requestId: number

//     function poll(timestamp: number) {
//       requestId = requestAnimationFrame(poll)

//       callback(timestamp)
//     }

//     requestId = requestAnimationFrame(poll)

//     return () => {
//       cancelAnimationFrame(requestId)
//     }
//   })
// }
