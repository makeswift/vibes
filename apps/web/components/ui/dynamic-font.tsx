'use client'

import { useEffect } from 'react'

import { Font } from '@/registry/schema'

async function loadFont({
  document,
  name,
  src,
  style,
  weight,
}: {
  document: Document
  name: string
  src: string
  style?: string
  weight?: string
}) {
  try {
    const fontFace = new FontFace(name, `url(${src})`, { style, weight })

    await fontFace.load()

    document.fonts.add(fontFace)
  } catch (e) {
    console.error('Failed to load font', { name, src })
  }
}

interface Props {
  name: string
  src: Font['src']
}

export function DynamicFont({ name, src }: Props) {
  useEffect(() => {
    if (Array.from(document.fonts).some(font => font.family === name)) return

    if (typeof src === 'string') {
      loadFont({ document, name, src })
    } else {
      src.forEach(({ path, style, weight }) => {
        loadFont({ document, name, src: path, style, weight })
      })
    }
  }, [name, src])

  return null
}
