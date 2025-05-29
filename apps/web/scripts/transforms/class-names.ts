/**
 * Transform to handle Tailwind 4 utility classes that need updating for v3 compatibility
 * This is a placeholder for future enhancements to handle class name changes
 */

import * as fs from 'fs';
import * as path from 'path';

// Mapping of Tailwind 4 classes to their Tailwind 3 equivalents
// This can be expanded based on actual breaking changes between versions
export const classNameMappings: Record<string, string> = {
  // Example mappings (these would need to be updated based on actual Tailwind 4 vs 3 differences)
  // 'new-v4-class': 'old-v3-class',
};

export interface ClassNameAnalysis {
  filesFound: number;
  filesWithMappedClasses: number;
  filesToTransform: string[];
  classesFound: Record<string, string[]>;
}

export function transformClassNames(filePath: string): boolean {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  let transformedContent = content;
  let hasChanges = false;

  // Transform class names based on mappings
  for (const [v4Class, v3Class] of Object.entries(classNameMappings)) {
    const regex = new RegExp(`\\b${v4Class}\\b`, 'g');
    if (transformedContent.includes(v4Class)) {
      transformedContent = transformedContent.replace(regex, v3Class);
      hasChanges = true;
    }
  }

  if (hasChanges) {
    fs.writeFileSync(filePath, transformedContent, 'utf8');
    console.log(`✅ Transformed class names in: ${filePath}`);
    return true;
  }

  return false;
}

export function findReactFiles(directory: string): string[] {
  const reactFiles: string[] = [];

  function traverse(dir: string): void {
    try {
      const files = fs.readdirSync(dir);

      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          traverse(filePath);
        } else if (
          file.endsWith('.tsx') ||
          file.endsWith('.jsx') ||
          file.endsWith('.ts') ||
          file.endsWith('.js') ||
          file.endsWith('.vue') ||
          file.endsWith('.svelte')
        ) {
          reactFiles.push(filePath);
        }
      }
    } catch {
      console.warn(`Could not read directory: ${dir}`);
    }
  }

  traverse(directory);
  return reactFiles;
}

export function analyzeClassNames(directory: string): ClassNameAnalysis {
  const reactFiles = findReactFiles(directory);
  const results: ClassNameAnalysis = {
    filesFound: reactFiles.length,
    filesWithMappedClasses: 0,
    filesToTransform: [],
    classesFound: {},
  };

  for (const file of reactFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let needsTransform = false;

      for (const [v4Class] of Object.entries(classNameMappings)) {
        const regex = new RegExp(`\\b${v4Class}\\b`);
        if (regex.test(content)) {
          needsTransform = true;
          if (!results.classesFound[v4Class]) {
            results.classesFound[v4Class] = [];
          }
          results.classesFound[v4Class].push(file);
        }
      }

      if (needsTransform) {
        results.filesWithMappedClasses += 1;
        results.filesToTransform.push(file);
      }
    } catch {
      console.warn(`Could not read file: ${file}`);
    }
  }

  return results;
}
