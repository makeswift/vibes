import './style/globals.css';
import { Toaster } from '@/vibes/soul/primitives/toaster';

import { ZoomListener } from '../zoom-listener';

export const metadata = {
  title: 'Vibes preview',
  description: 'Preview of a component',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ZoomListener />

      <body>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
