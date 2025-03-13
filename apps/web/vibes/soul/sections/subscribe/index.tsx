import { SubmissionResult } from '@conform-to/react';
import { clsx } from 'clsx';
import Image from 'next/image';

import { InlineEmailForm } from '@/vibes/soul/sections/inline-email-form';

type Action<State, Payload> = (state: Awaited<State>, payload: Payload) => State | Promise<State>;

type SubscribeAction = Action<
  { lastResult: SubmissionResult | null; successMessage?: string },
  FormData
>;

export interface SubscribeProps {
  action: SubscribeAction;
  image?: { src: string; alt: string };
  title: string;
  description?: string;
  placeholder?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --subscribe-font-family: var(--font-family-body);
 *   --subscribe-title-font-family: var(--font-family-heading);
 *   --subscribe-background: color-mix(in oklab, hsl(var(--primary)), black 75%);
 *   --subscribe-title: color-mix(in oklab, hsl(var(--primary)), white 75%);
 *   --subscribe-description: color-mix(in oklab, hsl(var(--primary)), white 75%);
 * }
 * ```
 */
export function Subscribe({ action, image, title, description, placeholder }: SubscribeProps) {
  return (
    <section className="bg-[var(--subscribe-background,color-mix(in_oklab,hsl(var(--primary)),black_75%))] font-[family-name:var(--subscribe-font-family,var(--font-family-body))] @container">
      <div className="flex flex-col items-start @4xl:flex-row @4xl:items-stretch">
        {image && (
          <div className="relative min-h-96 w-full bg-primary/10 @4xl:flex-1">
            <Image
              alt={image.alt}
              className="object-cover"
              fill
              sizes="(min-width: 56rem) 50vw, 100vw"
              src={image.src}
            />
          </div>
        )}
        <div className="w-full flex-1">
          <div
            className={clsx(
              'flex w-full flex-col gap-10 px-4 py-10 @xl:px-6 @xl:py-14 @4xl:gap-16 @4xl:px-8 @4xl:py-20',
              Boolean(image) ? '@4xl:max-w-4xl' : 'mx-auto max-w-screen-2xl @4xl:flex-row',
            )}
          >
            <header className="flex-1">
              <h2 className="mb-4 font-[family-name:var(--subscribe-title-font-family,var(--font-family-heading))] text-2xl font-medium leading-none text-[var(--subscribe-title,color-mix(in_oklab,hsl(var(--primary)),white_75%))] @xl:text-3xl @4xl:text-4xl">
                {title}
              </h2>
              <p className="text-[var(--subscribe-description,color-mix(in_oklab,hsl(var(--primary)),white_75%))] opacity-75">
                {description}
              </p>
            </header>
            <InlineEmailForm action={action} className="flex-1" placeholder={placeholder} />
          </div>
        </div>
      </div>
    </section>
  );
}
