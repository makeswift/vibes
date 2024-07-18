import ReactDOM from 'react-dom'

import { Font } from '@/vibes/schema'

interface Props {
  name: string
  src: Font['src']
}

export function DynamicFont({ name, src }: Props) {
  if (typeof src === 'string') {
    ReactDOM.preload(src, { as: 'font', type: 'font/woff2' })

    return (
      <style
        // @ts-ignore React 18.3 doesn't include type definitions for style
        href={src}
        precedence="low"
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: '${name}';
            font-style: normal;
            font-display: swap;
            src: url(${src}) format('woff2');
          }
        `,
        }}
      />
    )
  } else {
    src.forEach(({ path }) => {
      ReactDOM.preload(path, { as: 'font', type: 'font/woff2' })
    })

    return src.map(({ path, style, weight }) => (
      <style
        key={`${path}:${style}:${weight}`}
        // @ts-ignore React 18.3 doesn't include type definitions for style
        href={path}
        precedence="low"
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: '${name}';
            font-style: ${style ?? 'normal'};
            font-weight: ${weight ?? 'normal'};
            font-display: swap;
            src: url(${path}) format('woff2');
          }
        `,
        }}
      />
    ))
  }
}
