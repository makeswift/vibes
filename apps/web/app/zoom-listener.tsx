'use client';

import { useEffect } from 'react';
import { z } from 'zod';

export function ZoomListener() {
  useEffect(() => {
    function handleMessage(event: MessageEvent<unknown>) {
      const result = z.object({ type: z.literal('zoom'), zoom: z.number() }).safeParse(event.data);

      if (result.success) {
        document.body.style.setProperty('zoom', String(result.data.zoom));
      }
    }

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  });

  return null;
}
