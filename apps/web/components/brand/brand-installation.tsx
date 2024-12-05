import localFont from 'next/font/local';

import { CodeBlock } from '@/components/ui/code-block';
import { Reveal } from '@/components/ui/reveal';
import { Brand, CSSVars } from '@/vibes/schema';

import { Step, Steps } from '../ui/steps';

export type Font =
  | {
      type: 'google';
      name: string;
      options: NonNullable<Record<string, unknown>>;
    }
  | {
      type: 'local';
      name: string;
      options: Parameters<typeof localFont>[0];
    };

interface Props {
  brands: Brand[];
  brandName: string;
  fonts: {
    body: Font;
    heading?: Font;
    mono?: Font;
  };
}

function highlightLines(str: string) {
  return str
    .split('\n')
    .map((line) => line.concat('// [!code highlight]'))
    .join('\n');
}

function getVariableCode(cssVars: CSSVars) {
  return `:root {\n${Object.entries(cssVars)
    .filter(([name]) => !name.startsWith('--font-family'))
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n')}\n}`;
}

function getLayoutCode(fonts: Props['fonts']) {
  const localFonts = Object.values(fonts).filter((f) => f.type === 'local');
  const googleFonts = Object.values(fonts).filter((f) => f.type === 'google');

  return `${googleFonts.length > 0 ? `import { ${googleFonts.map((f) => f.name).join(', ')} } from 'next/font/google' // [!code highlight]\n` : ''}${localFonts.length > 0 ? `import localFont from 'next/font/local' // [!code highlight]\n` : ''}
import './globals.css'

${Object.entries(fonts)
  .map(([type, font]) => {
    function getFontOptions() {
      return JSON.stringify(
        { ...font.options, variable: `--font-family-${type}` },
        null,
        2,
      ).replace(/"([^"]+)":/g, '$1:');
    }

    switch (font.type) {
      case 'google':
        return highlightLines(
          `const ${font.name.toLowerCase()} = ${font.name}(${getFontOptions()})`,
        );
      case 'local':
        return highlightLines(`const ${font.name.toLowerCase()} = localFont(${getFontOptions()})`);
    }
  })
  .join('\n\n')}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={[${Object.values(fonts)
        .map((f) => `${f.name.toLowerCase()}.variable`)
        .join(', ')}].join(' ')}>{children}</body> // [!code highlight]
    </html>
  );
}'`;
}

export function BrandInstallation({ brands, brandName, fonts }: Props) {
  const brand = brands.find((b) => b.name === brandName);

  if (!brand) return <div>Brand: {brandName} not found</div>;

  return (
    <>
      <Steps>
        <Step>
          <h3 id="add-css-variables">Add CSS variables</h3>
          <p>
            Copy and paste the following variables into your <code>globals.css</code> file.
          </p>
          <Reveal>
            <CodeBlock>{getVariableCode(brand.cssVars)}</CodeBlock>
          </Reveal>
        </Step>
        <Step>
          <h3 id="install-fonts">Install fonts</h3>
          <p>
            Add the following code to your root <code>layout.tsx</code> file.
          </p>
          <CodeBlock>{getLayoutCode(fonts)}</CodeBlock>
        </Step>
      </Steps>
    </>
  );
}
