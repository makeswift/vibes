'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  onEnter?: (entry: IntersectionObserverEntry) => void;
  aspectRatio?: number;
}

export function IntersectionLoader({ children, onEnter, aspectRatio = 16 / 9 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry != null && entry.intersectionRatio > 0) {
          setIsVisible(true);
          onEnter?.(entry);
        }
      },
      {
        root: null,
        rootMargin: '400px',
        threshold: 0,
      },
    );

    observer.observe(ref.current);
  }, [ref, onEnter]);

  return (
    <div className="w-full" ref={ref} style={{ aspectRatio }}>
      {isVisible && children}
    </div>
  );
}
