import { SubmissionResult } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { getProducts } from '@/vibes/soul/data';
import { SearchResult } from '@/vibes/soul/primitives/navigation';
import { localeSchema, searchSchema } from '@/vibes/soul/primitives/navigation/schema';

export async function localeAction(
  prevState: SubmissionResult | null,
  payload: FormData,
): Promise<SubmissionResult> {
  'use server';

  const submission = parseWithZod(payload, { schema: localeSchema });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return submission.reply();
}

export function searchAction(brand: 'Electric' | 'Warm' | 'Luxury') {
  const searchActionWithBrand = brandSearchAction.bind(null, brand);

  return searchActionWithBrand;
}

async function brandSearchAction(
  brand: 'Electric' | 'Warm' | 'Luxury',
  prevState: { searchResults: SearchResult[] | null; lastResult: SubmissionResult | null },
  payload: FormData,
): Promise<{ searchResults: SearchResult[]; lastResult: SubmissionResult }> {
  'use server';

  const submission = parseWithZod(payload, { schema: searchSchema('query') });

  if (submission.status !== 'success') {
    return {
      searchResults: [],
      lastResult: submission.reply(),
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    searchResults: [
      {
        type: 'links',
        title: 'Indoors',
        links: [
          { label: 'Desk Plants', href: '#' },
          { label: 'Low Light Plants', href: '#' },
          { label: 'Pet Friendly', href: '#' },
        ].filter(() => Math.random() > 0.5),
      },
      {
        type: 'links',
        title: 'Outdoors',
        links: [
          { label: 'Small', href: '#' },
          { label: 'Medium', href: '#' },
          { label: 'Large', href: '#' },
        ].filter(() => Math.random() > 0.5),
      },
      {
        type: 'products',
        title: 'Products',
        products: (await getProducts(brand)).filter(() => Math.random() > 0.5),
      },
    ],
    lastResult: submission.reply(),
  };
}
