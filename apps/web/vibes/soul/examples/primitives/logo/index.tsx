'use client';

import { Logo } from '@/vibes/soul/primitives/logo';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col justify-center gap-4 p-10">
      <Logo
        logo={{ src: '/soul/outer-shell-logo.png', alt: 'Outer shell logo' }}
        href="#"
        height={80}
        width={160}
      />
    </div>
  );
}
