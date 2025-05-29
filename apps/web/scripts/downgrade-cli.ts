#!/usr/bin/env node

import { Command } from 'commander';
import { run as jscodeshift } from 'jscodeshift/src/Runner';
import path from 'path';

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
  .action(async (scanPath: string, options: { pattern: string }) => {
    try {
      console.log(`Scanning ${scanPath} for Tailwind v4 classes...`);
      // TODO: Implement scanning logic using glob pattern
      await Promise.resolve(); // Placeholder for async operation
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
  .action(async (targetPath: string, options: { pattern: string; dryRun: boolean }) => {
    try {
      const resolvedPath = path.resolve(process.cwd(), targetPath);
      const transformFile = path.resolve(__dirname, 'transforms/renamed-utilities.ts');

      console.log(`Transforming ${resolvedPath}...`);

      const results = await jscodeshift(transformFile, [resolvedPath], {
        dry: options.dryRun,
        verbose: 2,
        parser: 'tsx',
        extensions: 'tsx,jsx,ts,js',
      });

      console.log('Transformation complete!');
      console.log('Results:', results);
    } catch (error) {
      console.error('Error during transformation:', error);
      process.exit(1);
    }
  });

program.parse();
