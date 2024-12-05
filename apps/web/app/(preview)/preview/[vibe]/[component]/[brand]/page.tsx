import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import * as Vibes from '@/vibes';
import { Vibe } from '@/vibes/schema';
import { getVibe } from '@/vibes/utils';

export async function generateStaticParams() {
  return Object.values(Vibes).flatMap((vibe: Vibe) =>
    vibe.components.flatMap((component) =>
      vibe.brands.map((brand) => ({
        vibe: vibe.slug,
        component: component.name,
        brand: brand.name,
      })),
    ),
  );
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ vibe: string; component: string; brand: string }>;
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const { vibe: vibeSlug, brand: brandName, component: componentName } = await params;
  const vibe = getVibe(vibeSlug);

  if (!vibe) return notFound();

  let activeBrand = vibe.brands.find((b) => b.name === decodeURIComponent(brandName));

  if (!activeBrand) {
    console.warn(
      `Could not find brand: ${brandName} on vibe: ${vibeSlug}, defaulting to first brand`,
    );

    activeBrand = vibe.brands[0];
  }

  const entry = vibe.components.find((c) => c.name === componentName);

  if (!entry?.component) return notFound();

  const Component = entry.component;

  return (
    <>
      {/* @ts-expect-error: `types-react@19.0.0-rc.1` doesn't include `href` in `<style>`'s props. */}
      <style href={`${activeBrand.name}-CSS-Vars`} precedence="high">
        {`:root {\n${Object.entries(activeBrand.cssVars)
          .map(([key, value]) => `  ${key}: ${value};`)
          .join('\n')}\n}
        `}
      </style>
      <Suspense fallback={null}>
        <Component searchParams={searchParams} />
      </Suspense>
    </>
  );
}
