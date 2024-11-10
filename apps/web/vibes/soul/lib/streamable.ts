import { use } from 'react'

export type Streamable<T> = T | Promise<T>

export function useStreamable<T>(streamable: Streamable<T>): T {
  return streamable instanceof Promise ? use(streamable) : streamable
}

export function mapStreamable<T, U>(
  streamable: Streamable<T>,
  mapper: (value: T) => U
): Streamable<U> {
  return streamable instanceof Promise ? streamable.then(mapper) : mapper(streamable)
}
