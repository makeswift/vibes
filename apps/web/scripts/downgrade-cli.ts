#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs/promises';
import { glob } from 'glob';
import { run as jscodeshift } from 'jscodeshift/src/Runner';
import path from 'path';

import { UTILITY_MAPPINGS } from './transforms/renamed-utilities';

interface ScanResult {
  file: string;
  classes: Array<{
    oldClass: string;
    newClass: string;
    line: number;
    context: string;
  }>;
}

// Helper function to find Tailwind classes in a string
function findTailwindClasses(content: string): ScanResult['classes'] {
  const results: ScanResult['classes'] = [];
  const lines = content.split('\n');

  // Create regex pattern to match all old classes
  const classPattern = new RegExp(
    `\\b(?:(?:[a-zA-Z-]+:)*(?:${Object.keys(UTILITY_MAPPINGS).join('|')}))\\b`,
    'g',
  );

  lines.forEach((line, lineIndex) => {
    let match;
    while ((match = classPattern.exec(line)) !== null) {
      const fullClass = match[0];

      // Parse modifiers and utility
      const parts = fullClass.split(':');
      const modifiers = parts.slice(0, -1);
      const utility = parts[parts.length - 1] ?? '';

      if (utility !== '' && utility in UTILITY_MAPPINGS) {
        const newUtility = UTILITY_MAPPINGS[utility] ?? '';
        const newClass = modifiers.length > 0 ? [...modifiers, newUtility].join(':') : newUtility;

        results.push({
          oldClass: fullClass,
          newClass,
          line: lineIndex + 1,
          context: line.trim(),
        });
      }
    }

    // Reset regex lastIndex for next line
    classPattern.lastIndex = 0;
  });

  return results;
}

const program = new Command();

program
  .name('tailwind-downgrade')
  .description('CLI tool to help downgrade Tailwind CSS from v4 to v3')
  .version('1.0.0');

program
  .command('scan')
  .description('Scan files for Tailwind v4 classes that need to be downgraded')
  .argument('<path>', 'path to scan (file or directory)')
  .option('-p, --pattern <pattern>', 'glob pattern to match files', '**/*.{tsx,jsx,ts,js}')
  .option('--json', 'output results as JSON', false)
  .action(async (scanPath: string, options: { pattern: string; json: boolean }) => {
    try {
      console.log(`Scanning ${scanPath} for Tailwind v4 classes...`);

      const resolvedPath = path.resolve(process.cwd(), scanPath);
      const isDirectory = (await fs.stat(resolvedPath)).isDirectory();

      let filePaths: string[];

      if (isDirectory) {
        // Use glob to find matching files
        filePaths = await glob(options.pattern, {
          cwd: resolvedPath,
          absolute: true,
          ignore: ['**/node_modules/**', '**/dist/**', '**/build/**'],
        });
      } else {
        // Single file
        filePaths = [resolvedPath];
      }

      const scanResults: ScanResult[] = [];
      let totalClasses = 0;

      for (const filePath of filePaths) {
        try {
          const content = await fs.readFile(filePath, 'utf-8');
          const classes = findTailwindClasses(content);

          if (classes.length > 0) {
            scanResults.push({
              file: path.relative(process.cwd(), filePath),
              classes,
            });
            totalClasses += classes.length;
          }
        } catch (error) {
          console.warn(`Warning: Could not read file ${filePath}:`, error);
        }
      }

      if (options.json) {
        console.log(JSON.stringify(scanResults, null, 2));
      } else {
        console.log(`\nScan Results:`);
        console.log(
          `Found ${totalClasses} classes in ${scanResults.length} files that need transformation\n`,
        );

        scanResults.forEach((result) => {
          console.log(`📁 ${result.file}`);
          result.classes.forEach((cls) => {
            console.log(`  Line ${cls.line}: ${cls.oldClass} → ${cls.newClass}`);
            console.log(`    Context: ${cls.context}`);
          });
          console.log('');
        });

        if (totalClasses > 0) {
          console.log(`Run 'tailwind-downgrade transform ${scanPath}' to apply these changes.`);
        }
      }
    } catch (error) {
      console.error('Error during scan:', error);
      process.exit(1);
    }
  });

program
  .command('transform')
  .description('Transform files to downgrade Tailwind v4 classes to v3')
  .argument('<path>', 'path to transform (file or directory)')
  .option('-p, --pattern <pattern>', 'glob pattern to match files', '**/*.{tsx,jsx,ts,js}')
  .option('-d, --dry-run', 'show what would be changed without making changes', false)
  .option('--ignore-pattern <pattern>', 'glob pattern for files to ignore', '**/node_modules/**')
  .action(
    async (
      targetPath: string,
      options: {
        pattern: string;
        dryRun: boolean;
        ignorePattern: string;
      },
    ) => {
      try {
        const resolvedPath = path.resolve(process.cwd(), targetPath);

        // Get the transform file path relative to this CLI file
        const transformFile = path.resolve(__dirname, 'transforms/renamed-utilities.ts');

        // Check if transform file exists
        try {
          await fs.access(transformFile);
        } catch {
          console.error(`Transform file not found: ${transformFile}`);
          console.error('Make sure the transforms directory exists with renamed-utilities.ts');
          process.exit(1);
        }

        console.log(`${options.dryRun ? 'Dry run: ' : ''}Transforming ${resolvedPath}...`);

        // Build file patterns
        const isDirectory = (await fs.stat(resolvedPath)).isDirectory();
        const filePaths = isDirectory
          ? await glob(options.pattern, {
              cwd: resolvedPath,
              absolute: true,
              ignore: [options.ignorePattern, '**/dist/**', '**/build/**'],
            })
          : [resolvedPath];

        if (filePaths.length === 0) {
          console.log('No files found matching the pattern.');
          return;
        }

        console.log(`Processing ${filePaths.length} files...`);

        const results = await jscodeshift(transformFile, filePaths, {
          dry: options.dryRun,
          verbose: 1,
          parser: 'tsx',
          extensions: 'tsx,jsx,ts,js',
          silent: false,
          runInBand: false,
        });

        console.log('\n✅ Transformation complete!');

        console.log(`📊 Results:`);
        console.log(`  - Files processed: ${results.stats?.total || filePaths.length}`);
        console.log(`  - Files transformed: ${results.stats?.ok || 0}`);
        console.log(`  - Files with errors: ${results.stats?.error || 0}`);
        console.log(`  - Files skipped: ${results.stats?.skip || 0}`);

        if (options.dryRun) {
          console.log('\n🔍 This was a dry run. No files were actually modified.');
          console.log('Remove --dry-run flag to apply the changes.');
        }
      } catch (error) {
        console.error('Error during transformation:', error);
        process.exit(1);
      }
    },
  );

program.parse();
