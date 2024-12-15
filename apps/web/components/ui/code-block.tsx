import { clsx } from 'clsx';
import { CodeToHastOptions, codeToHtml, ShikiTransformer } from 'shiki';

import { theme, transformers } from '@/lib/shiki';

import { CopyButton } from './copy-button';

interface Props {
  children: string;
  hideCopyButton?: boolean;
  lang?: CodeToHastOptions['lang'];
  showLineNumbers?: boolean;
  className?: string;
}

export async function CodeBlock({
  children,
  lang = 'javascript',
  showLineNumbers = false,
  hideCopyButton = false,
  className,
}: Props) {
  const __html = await codeToHtml(children, {
    lang,
    themes: {
      light: theme,
      dark: theme,
    },
    transformers: [
      ...transformers,
      {
        name: 'transformers:pre',
        pre(node) {
          if (showLineNumbers) {
            this.addClassToHast(node, 'relative');
            this.addClassToHast(node, 'show-line-numbers');
          }
        },
      } satisfies ShikiTransformer,
    ],
  });

  return (
    <div
      className={clsx(
        'group relative my-4 w-full bg-contrast-100 last:mb-0 only:my-0 md:my-5',
        className,
      )}
    >
      {!hideCopyButton && (
        <div className="pointer-events-none sticky top-0 z-10 flex w-full translate-y-2 justify-end p-2 opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">
          <CopyButton className="pointer-events-auto" clipboard={children} />
        </div>
      )}
      <div className={clsx(!hideCopyButton && '-mt-[47px]')} dangerouslySetInnerHTML={{ __html }} />
    </div>
  );
}
