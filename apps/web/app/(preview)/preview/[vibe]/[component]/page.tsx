import { notFound, redirect } from 'next/navigation';

import * as Vibes from '@/vibes';
import { getVibe } from '@/vibes/utils';

export async function generateStaticParams() {
  return Object.values(Vibes).flatMap((vibe) =>
    vibe.components.map((component) => ({ vibe: vibe.slug, component: component.name })),
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ vibe: string; component: string }>;
}) {
  const { vibe: vibeSlug, component: componentName } = await params;
  const vibe = getVibe(vibeSlug);

  if (!vibe) return notFound();

  return redirect(`/preview/${vibeSlug}/${componentName}/${vibe.brands[0].name}`);
}
