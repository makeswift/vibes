import { ZoomListener } from '../zoom-listener'
import './style/globals.css'

export const metadata = {
  title: 'Vibes preview',
  description: 'Preview of a component',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ZoomListener />
      <body>{children}</body>
    </html>
  )
}
