/**
 * Transform to convert Tailwind 4 @theme inline blocks to Tailwind 3 CSS variables
 *
 * Before: @theme inline { --color-primary: #3b82f6; }
 * After: :root { --color-primary: #3b82f6; }
 */

import * as fs from 'fs';
import * as path from 'path';

export interface ThemeBlockAnalysis {
  filesFound: number;
  filesWithThemeBlocks: number;
  filesWithPluginDirectives: number;
  filesToTransform: string[];
}

export function transformThemeBlocks(filePath: string): boolean {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Transform @theme inline blocks to :root blocks
  const transformedContent = content.replace(
    /@theme\s+inline\s*\{([\s\S]*?(?:\{[\s\S]*?\}[\s\S]*?)*)\}/g,
    (match, themeContent: string) => {
      // Clean up the theme content and wrap in :root
      const cleanContent = themeContent
        .trim()
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .map((line) => `  ${line}`)
        .join('\n');

      return `:root {\n${cleanContent}\n}`;
    },
  );

  // Transform @plugin directives to comments with instructions
  const finalContent = transformedContent.replace(
    /@plugin\s+['"]([^'"]+)['"];?/g,
    '/* TODO: Add "$1" to your tailwind.config.js plugins array */',
  );

  if (finalContent !== content) {
    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log(`✅ Transformed @theme blocks in: ${filePath}`);
    return true;
  }

  return false;
}

export function analyzeThemeBlocks(directory: string): ThemeBlockAnalysis {
  const cssFiles = findCSSFiles(directory);
  const results: ThemeBlockAnalysis = {
    filesFound: cssFiles.length,
    filesWithThemeBlocks: 0,
    filesWithPluginDirectives: 0,
    filesToTransform: [],
  };

  for (const file of cssFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let needsTransform = false;

    if (content.includes('@theme inline')) {
      results.filesWithThemeBlocks += 1;
      needsTransform = true;
    }

    if (content.includes('@plugin')) {
      results.filesWithPluginDirectives += 1;
      needsTransform = true;
    }

    if (needsTransform) {
      results.filesToTransform.push(file);
    }
  }

  return results;
}

export function findCSSFiles(directory: string): string[] {
  const cssFiles: string[] = [];

  function traverse(dir: string): void {
    try {
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
    } catch {
      console.warn(`Could not read directory: ${dir}`);
    }
  }

  traverse(directory);
  return cssFiles;
}
