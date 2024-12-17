import './style/globals.css';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

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
        {/* TODO: This is currently hardcoded to the Soul vibe. 
        We want to make it so that each vibe has its own preview 
        layout. */}
        <Toaster position="top-right" />
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
