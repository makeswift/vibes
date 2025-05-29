/**
 * Transform to convert Tailwind 4 CSS imports to Tailwind 3 format
 *
 * Before: @import 'tailwindcss';
 * After: @import 'tailwindcss/base';
 *        @import 'tailwindcss/components';
 *        @import 'tailwindcss/utilities';
 */

import * as fs from 'fs';
import * as path from 'path';

export interface CSSImportAnalysis {
  filesFound: number;
  filesWithTailwindImports: number;
  filesToTransform: string[];
}

export function transformCSSImports(filePath: string): boolean {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Replace @import 'tailwindcss'; with individual imports
  const transformedContent = content.replace(
    /@import\s+['"]tailwindcss['"];?\s*/g,
    `@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
`,
  );

  // If changes were made, write back to file
  if (transformedContent !== content) {
    fs.writeFileSync(filePath, transformedContent, 'utf8');
    console.log(`✅ Transformed CSS imports in: ${filePath}`);
    return true;
  }

  return false;
}

export function findCSSFiles(directory: string): string[] {
  const cssFiles: string[] = [];

  function traverse(dir: string): void {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        traverse(filePath);
      } else if (file.endsWith('.css') || file.endsWith('.scss') || file.endsWith('.sass')) {
        cssFiles.push(filePath);
      }
    }
  }

  traverse(directory);
  return cssFiles;
}

export function analyzeCSSImports(directory: string): CSSImportAnalysis {
  const cssFiles = findCSSFiles(directory);
  const results: CSSImportAnalysis = {
    filesFound: cssFiles.length,
    filesWithTailwindImports: 0,
    filesToTransform: [],
  };

  for (const file of cssFiles) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes("@import 'tailwindcss'") || content.includes('@import "tailwindcss"')) {
      results.filesWithTailwindImports += 1;
      results.filesToTransform.push(file);
    }
  }

  return results;
}
