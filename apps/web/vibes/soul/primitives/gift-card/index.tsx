'use client';

import { useMemo, useRef, useState } from 'react';

export interface GiftCardProps {
  maxTilt?: number;
  amount: string | null;
  logo: string;
  loading?: boolean;
}

export function GiftCard({
  maxTilt = 15,
  amount = '$25.00',
  logo = 'Planted',
  loading = false,
}: GiftCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [mouse, setMouse] = useState({ x: 0, y: 0, xPct: 50, yPct: 50 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, z: 0 });

  // Derived background positions for holo layers
  const bgX = useMemo(() => 40 + 0.2 * mouse.xPct, [mouse.xPct]);
  const bgY = useMemo(() => 40 + 0.2 * mouse.yPct, [mouse.yPct]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;
    setMouse({ x, y, xPct, yPct });
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = x / rect.width;
    const yPercent = y / rect.height;
    setTilt({
      rotateX: maxTilt * (0.5 - yPercent),
      rotateY: maxTilt * (xPercent - 0.5),
      z: -10,
    });
  }

  function handlePointerEnter() {
    setTilt((t) => ({ ...t, z: -10 }));
  }

  function handlePointerLeave() {
    setTilt({ rotateX: 0, rotateY: 0, z: 0 });
    setMouse({ x: 0, y: 0, xPct: 50, yPct: 50 });
  }

  return (
    <div className="group/spotlight @container w-full max-w-182 perspective-distant">
      <div
        className="border-contrast-400 grid aspect-[73/46] grid-cols-2 overflow-hidden rounded-3xl border bg-gradient-to-b from-[#212B1B] from-[32%] to-[#3C4E31] px-[clamp(1.5rem,7.7cqw,3.5rem)] py-[clamp(1rem,5.5cqw,2.5rem)] transition-transform duration-300 ease-out select-none transform-3d"
        onMouseMove={handleMouseMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerMove={handlePointerMove}
        ref={cardRef}
        style={{
          transform: `translateZ(${tilt.z}px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
      >
        {/* Left column */}
        <div>
          <p className="font-heading text-primary-highlight text-[clamp(1.5rem,8.25cqw,3.75rem)] leading-[clamp(1.75rem,8.8cqw,4rem)] font-light tracking-tight">
            {logo}
          </p>
          <p className="text-contrast-100 font-body text-[clamp(0.875rem,3.3cqw,1.5rem)] leading-[clamp(1.25rem,3.85cqw,1.75rem)] tracking-tight">
            Gift card
          </p>
        </div>

        {/* Right column */}
        <div className="place-self-end">
          {amount !== null && !loading && (
            <p className="font-heading text-primary-highlight text-[clamp(2rem,13.2cqw,6rem)] leading-none font-normal tracking-tight">
              {amount}
            </p>
          )}
          {loading && <div className="bg-contrast-100 h-10 w-10 animate-spin rounded-full" />}
        </div>

        {/* Cursor mask */}
        <div
          className="bg-primary-highlight pointer-events-none absolute -inset-px z-0 rounded-md mask-no-repeat opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover/spotlight:opacity-50"
          style={{
            maskImage: `radial-gradient(50cqmin circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.45) 40%, rgba(255,255,255,0.15) 65%, transparent 85%)`,
          }}
        />

        {/* Holographic overlay */}
        <div
          className="pointer-events-none absolute -inset-px z-[1] [background-size:200%_700%,_300%,_300%] opacity-0 [background-blend-mode:hue,hue,hue,overlay] mix-blend-color-dodge transition-opacity duration-300 ease-out will-change-[position] group-hover/spotlight:opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, rgba(255,119,115,1) 0%, rgba(255,237,95,1) 10%, rgba(168,255,95,1) 20%, rgba(131,255,247,1) 30%, rgba(120,148,255,1) 40%, rgba(216,117,255,1) 50%, rgba(255,119,115,1) 60%), repeating-linear-gradient(128deg, #0e152e 0%, hsl(180 10% 60%) 3.8%, hsl(180 10% 60%) 4.5%, hsl(180 10% 60%) 5.2%, #0e152e 10%, #0e152e 12%), radial-gradient(farthest-corner circle at ${mouse.xPct}% ${mouse.yPct}%, rgba(255,255,255,0.10) 12%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.25) 120%)`,
            backgroundPosition: `${bgX}% ${bgY}%, ${bgX}% ${bgY}%, ${bgX}% ${bgY}%`,
          }}
        />
      </div>
    </div>
  );
}
