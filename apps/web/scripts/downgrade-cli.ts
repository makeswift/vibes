#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs/promises';
import { glob } from 'glob';
import { run as jscodeshift } from 'jscodeshift/src/Runner';
import path from 'path';

// Import utility mappings for each transformer
import { UTILITY_MAPPINGS as RENAMED_UTILITIES } from './transforms/renamed-utilities';
// import { UTILITY_MAPPINGS as SPACING_CHANGES } from './transforms/spacing-changes';
// import { UTILITY_MAPPINGS as COLOR_PALETTE } from './transforms/color-palette';

interface TransformConfig {
  name: string;
  description: string;
  transformFile: string;
  utilityMappings: Record<string, string>;
}

// Configuration for all available transformers
const TRANSFORMERS: Record<string, TransformConfig> = {
  'renamed-utilities': {
    name: 'Renamed Utilities',
    description: 'Transform renamed utility classes (shadow-xs → shadow-sm, etc.)',
    transformFile: 'transforms/renamed-utilities.ts',
    utilityMappings: RENAMED_UTILITIES,
  },
  // Add more transformers here as you build them
  // 'spacing-changes': {
  //   name: 'Spacing Changes',
  //   description: 'Transform spacing scale changes',
  //   transformFile: 'transforms/spacing-changes.ts',
  //   utilityMappings: SPACING_CHANGES,
  // },
  // 'color-palette': {
  //   name: 'Color Palette',
  //   description: 'Transform color palette changes',
  //   transformFile: 'transforms/color-palette.ts',
  //   utilityMappings: COLOR_PALETTE,
  // },
};

const DEFAULT_IGNORE_PATTERNS = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/.next/**',
  '**/.turbo/**',
  '**/coverage/**',
  '**/out/**',
];

interface ScanResult {
  file: string;
  classes: Array<{
    oldClass: string;
    newClass: string;
    line: number;
    context: string;
  }>;
}

interface CommandOptions {
  pattern?: string;
  dryRun?: boolean;
  ignorePattern?: string;
}

interface ScanOptions {
  pattern?: string;
  json?: boolean;
}

// Generic function to find classes for any transformer
function findTailwindClasses(
  content: string,
  utilityMappings: Record<string, string>,
): ScanResult['classes'] {
  const results: ScanResult['classes'] = [];
  const lines = content.split('\n');

  if (Object.keys(utilityMappings).length === 0) {
    return results;
  }

  const classPattern = new RegExp(
    `\\b(?:(?:[a-zA-Z-]+:)*(?:${Object.keys(utilityMappings).join('|')}))\\b`,
    'g',
  );

  lines.forEach((line, lineIndex) => {
    let match;
    while ((match = classPattern.exec(line)) !== null) {
      const fullClass = match[0];

      const parts = fullClass.split(':');
      const modifiers = parts.slice(0, -1);
      const utility = parts[parts.length - 1] ?? '';

      if (utility !== '' && utility in utilityMappings) {
        const newUtility = utilityMappings[utility];
        if (newUtility === undefined) {
          continue;
        }

        const newClass = modifiers.length > 0 ? [...modifiers, newUtility].join(':') : newUtility;

        results.push({
          oldClass: fullClass,
          newClass,
          line: lineIndex + 1,
          context: line.trim(),
        });
      }
    }

    classPattern.lastIndex = 0;
  });

  return results;
}

// Shared function to run transformations
async function runTransform(
  transformerKey: string,
  targetPath: string,
  options: CommandOptions = {},
) {
  const transformer = TRANSFORMERS[transformerKey];
  if (!transformer) {
    console.error(`Unknown transformer: ${transformerKey}`);
    process.exit(1);
  }

  const resolvedPath = path.resolve(process.cwd(), targetPath);
  const transformFile = path.resolve(__dirname, transformer.transformFile);

  // Check if transform file exists
  try {
    await fs.access(transformFile);
  } catch {
    console.error(`Transform file not found: ${transformFile}`);
    console.error(`Make sure ${transformer.transformFile} exists`);
    process.exit(1);
  }

  console.log(
    `${options.dryRun === true ? 'Dry run: ' : ''}Running ${transformer.name} on ${resolvedPath}...`,
  );

  // Build file patterns
  const isDirectory = (await fs.stat(resolvedPath)).isDirectory();
  const filePaths = isDirectory
    ? await glob(options.pattern ?? '**/*.{tsx,jsx,ts,js}', {
        cwd: resolvedPath,
        absolute: true,
        ignore: [
          ...DEFAULT_IGNORE_PATTERNS,
          ...(options.ignorePattern !== undefined && options.ignorePattern !== ''
            ? [options.ignorePattern]
            : []),
        ],
      })
    : [resolvedPath];

  if (filePaths.length === 0) {
    console.log('No files found matching the pattern.');
    return;
  }

  console.log(`Processing ${filePaths.length} files...`);

  const results = await jscodeshift(transformFile, filePaths, {
    dry: options.dryRun ?? false,
    verbose: 1,
    parser: 'tsx',
    extensions: 'tsx,jsx,ts,js',
    silent: false,
    runInBand: false,
  });

  console.log(`\n✅ ${transformer.name} transformation complete!`);
  console.log(`📊 Results:`);
  console.log(`  - Files processed: ${results.stats.total ?? filePaths.length}`);
  console.log(`  - Files transformed: ${results.stats.ok ?? 0}`);
  console.log(`  - Files with errors: ${results.stats.error ?? 0}`);
  console.log(`  - Files skipped: ${results.stats.skip ?? 0}`);

  if (options.dryRun === true) {
    console.log('\n🔍 This was a dry run. No files were actually modified.');
  }

  return results;
}

// Shared scan function
async function runScan(
  transformerKey: string,
  scanPath: string,
  options: { pattern?: string; json?: boolean } = {},
) {
  const transformer = TRANSFORMERS[transformerKey];
  if (!transformer) {
    console.error(`Unknown transformer: ${transformerKey}`);
    process.exit(1);
  }

  console.log(`Scanning ${scanPath} for ${transformer.name.toLowerCase()}...`);

  const resolvedPath = path.resolve(process.cwd(), scanPath);
  const isDirectory = (await fs.stat(resolvedPath)).isDirectory();

  let filePaths: string[];

  if (isDirectory) {
    filePaths = await glob(options.pattern ?? '**/*.{tsx,jsx,ts,js}', {
      cwd: resolvedPath,
      absolute: true,
      ignore: DEFAULT_IGNORE_PATTERNS,
    });
  } else {
    filePaths = [resolvedPath];
  }

  const scanResults: ScanResult[] = [];
  let totalClasses = 0;

  for (const filePath of filePaths) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const classes = findTailwindClasses(content, transformer.utilityMappings);

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

  if (options.json === true) {
    console.log(JSON.stringify({ transformer: transformerKey, results: scanResults }, null, 2));
  } else {
    console.log(`\n📊 ${transformer.name} Scan Results:`);
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
      console.log(`Run 'tailwind-downgrade ${transformerKey} ${scanPath}' to apply these changes.`);
    }
  }

  return { transformer: transformerKey, results: scanResults, totalClasses };
}

const program = new Command();

program
  .name('tailwind-downgrade')
  .description('CLI tool to help downgrade Tailwind CSS from v4 to v3')
  .version('1.0.0');

// Create individual transformer commands
Object.entries(TRANSFORMERS).forEach(([key, config]) => {
  program
    .command(key)
    .description(config.description)
    .argument('<path>', 'path to transform (file or directory)')
    .option('-p, --pattern <pattern>', 'glob pattern to match files', '**/*.{tsx,jsx,ts,js}')
    .option('-d, --dry-run', 'show what would be changed without making changes', false)
    .option('--ignore-pattern <pattern>', 'additional glob pattern for files to ignore')
    .action(async (targetPath: string, options: CommandOptions) => {
      try {
        await runTransform(key, targetPath, options);
      } catch (error) {
        console.error(`Error during ${config.name} transformation:`, error);
        process.exit(1);
      }
    });
});

// "All" command to run all transformers
program
  .command('all')
  .description('Run all available transformations')
  .argument('<path>', 'path to transform (file or directory)')
  .option('-p, --pattern <pattern>', 'glob pattern to match files', '**/*.{tsx,jsx,ts,js}')
  .option('-d, --dry-run', 'show what would be changed without making changes', false)
  .option('--ignore-pattern <pattern>', 'additional glob pattern for files to ignore')
  .action(async (targetPath: string, options: CommandOptions) => {
    try {
      const transformerKeys = Object.keys(TRANSFORMERS);
      console.log(`🚀 Running all ${transformerKeys.length} transformers...\n`);

      for (const [index, key] of transformerKeys.entries()) {
        console.log(`\n[${index + 1}/${transformerKeys.length}] ${TRANSFORMERS[key]?.name}`);
        console.log('─'.repeat(50));
        await runTransform(key, targetPath, options);
      }

      console.log('\n🎉 All transformations completed!');
    } catch (error) {
      console.error('Error during transformation:', error);
      process.exit(1);
    }
  });

// Scan command with transformer selection
program
  .command('scan')
  .description('Scan files for classes that need transformation')
  .argument(
    '<transformer>',
    `transformer to scan for (${Object.keys(TRANSFORMERS).join(', ')}, or 'all')`,
  )
  .argument('<path>', 'path to scan (file or directory)')
  .option('-p, --pattern <pattern>', 'glob pattern to match files', '**/*.{tsx,jsx,ts,js}')
  .option('--json', 'output results as JSON', false)
  .action(async (transformer: string, scanPath: string, options: ScanOptions) => {
    try {
      if (transformer === 'all') {
        const allResults = [];
        let totalClasses = 0;

        for (const key of Object.keys(TRANSFORMERS)) {
          const result = await runScan(key, scanPath, { ...options, json: false });
          allResults.push(result);
          totalClasses += result.totalClasses;
        }

        if (options.json === true) {
          console.log(JSON.stringify(allResults, null, 2));
        } else {
          console.log(`\n🎯 Summary: Found ${totalClasses} total classes across all transformers`);
          console.log(`Run 'tailwind-downgrade all ${scanPath}' to apply all changes.`);
        }
      } else {
        await runScan(transformer, scanPath, options);
      }
    } catch (error) {
      console.error('Error during scan:', error);
      process.exit(1);
    }
  });

// List available transformers
program
  .command('list')
  .description('List all available transformers')
  .action(() => {
    console.log('📋 Available Transformers:\n');
    Object.entries(TRANSFORMERS).forEach(([key, config]) => {
      console.log(`🔧 ${key}`);
      console.log(`   ${config.description}`);
      console.log(`   Example: tailwind-downgrade ${key} src/\n`);
    });

    console.log('🚀 Special Commands:');
    console.log('   all        - Run all transformers');
    console.log('   scan <transformer> <path> - Preview changes');
    console.log('   list       - Show this list');
  });

program.parse();
