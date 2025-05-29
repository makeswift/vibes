#!/usr/bin/env node

import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';

import { analyzeCSSImports, transformCSSImports } from './transforms/css-imports.js';
import { analyzeThemeBlocks, transformThemeBlocks } from './transforms/theme-blocks.js';

interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

interface DowngradeOptions {
  path: string;
  files?: string[];
  dryRun?: boolean;
}

const program = new Command();

program
  .name('tw-downgrade')
  .description('CLI tool to downgrade Tailwind 4 components to Tailwind 3')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize the downgrade tool in your project')
  .action(() => {
    console.log('🔧 Initializing Tailwind downgrade tool...');

    // Check if package.json exists
    if (!fs.existsSync('package.json')) {
      console.log("❌ No package.json found. Make sure you're in a valid project directory.");
      return;
    }

    // Read package.json to check for Tailwind
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')) as PackageJson;
    const hasTailwind =
      Boolean(packageJson.dependencies?.tailwindcss) ||
      Boolean(packageJson.devDependencies?.tailwindcss);

    if (!hasTailwind) {
      console.log('⚠️  Tailwind CSS not found in package.json dependencies.');
    } else {
      console.log('✅ Tailwind CSS detected in project.');
    }

    console.log('✅ Downgrade tool initialized successfully!');
    console.log('\nNext steps:');
    console.log('1. Run "npx tsx scripts/downgrade-cli.ts analyze" to scan your project');
    console.log('2. Run "npx tsx scripts/downgrade-cli.ts downgrade --dry-run" to preview changes');
    console.log('3. Run "npx tsx scripts/downgrade-cli.ts downgrade" to apply changes');
  });

program
  .command('analyze')
  .description('Analyze your project for Tailwind 4 features that need downgrading')
  .option('-p, --path <path>', 'Path to analyze', process.cwd())
  .action((options: { path: string }) => {
    console.log(`🔍 Analyzing project at: ${options.path}`);
    analyzeProject(options.path);
  });

program
  .command('downgrade')
  .description('Downgrade Tailwind 4 features to Tailwind 3')
  .option('-p, --path <path>', 'Path to process', process.cwd())
  .option('-f, --files <files...>', 'Specific files to process')
  .option('--dry-run', 'Preview changes without applying them')
  .action((options: DowngradeOptions) => {
    console.log('🔄 Starting downgrade process...');
    runDowngrade(options);
  });

function analyzeProject(projectPath: string): void {
  console.log('📊 Analysis Results:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // Analyze CSS imports
  console.log('\n🔍 Scanning CSS imports...');
  const importResults = analyzeCSSImports(projectPath);
  console.log(`  • Found ${importResults.filesFound} CSS files`);
  console.log(`  • Found ${importResults.filesWithTailwindImports} files with Tailwind 4 imports`);

  if (importResults.filesToTransform.length > 0) {
    console.log('  • Files requiring import transformation:');
    importResults.filesToTransform.forEach((file) => {
      console.log(`    - ${path.relative(projectPath, file)}`);
    });
  }

  // Analyze theme blocks
  console.log('\n🎨 Scanning @theme blocks and @plugin directives...');
  const themeResults = analyzeThemeBlocks(projectPath);
  console.log(`  • Found ${themeResults.filesWithThemeBlocks} files with @theme inline blocks`);
  console.log(`  • Found ${themeResults.filesWithPluginDirectives} files with @plugin directives`);

  if (themeResults.filesToTransform.length > 0) {
    console.log('  • Files requiring theme transformation:');
    themeResults.filesToTransform.forEach((file) => {
      console.log(`    - ${path.relative(projectPath, file)}`);
    });
  }

  // Check PostCSS config
  console.log('\n⚙️  Checking PostCSS configuration...');
  checkPostCSSConfig(projectPath);

  // Summary
  const totalTransforms =
    importResults.filesToTransform.length + themeResults.filesToTransform.length;
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📋 Summary: ${totalTransforms} files need transformation`);

  if (totalTransforms > 0) {
    console.log(
      '\n✨ Run "npx tsx scripts/downgrade-cli.ts downgrade --dry-run" to preview changes',
    );
  } else {
    console.log('\n🎉 No Tailwind 4 specific features found that need downgrading!');
  }
}

function runDowngrade(options: DowngradeOptions): void {
  const { path: projectPath, files, dryRun = false } = options;

  if (dryRun) {
    console.log('🔍 DRY RUN MODE - Previewing changes (no files will be modified)');
  } else {
    console.log('🚀 LIVE MODE - Applying changes to files');
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  let totalTransformed = 0;

  // Transform CSS imports
  console.log('\n📥 Processing CSS imports...');
  const importResults = analyzeCSSImports(projectPath);
  const filesToProcess = files ?? importResults.filesToTransform;

  for (const file of filesToProcess) {
    if (!dryRun) {
      const transformed = transformCSSImports(file);
      if (transformed) totalTransformed += 1;
    } else {
      console.log(`  📁 Would transform: ${path.relative(projectPath, file)}`);
      console.log(`     @import 'tailwindcss'; → Individual imports`);
    }
  }

  // Transform theme blocks
  console.log('\n🎨 Processing @theme blocks...');
  const themeResults = analyzeThemeBlocks(projectPath);
  const themeFilesToProcess = files ?? themeResults.filesToTransform;

  for (const file of themeFilesToProcess) {
    if (!dryRun) {
      const transformed = transformThemeBlocks(file);
      if (transformed) totalTransformed += 1;
    } else {
      console.log(`  📁 Would transform: ${path.relative(projectPath, file)}`);
      console.log(`     @theme inline { ... } → :root { ... }`);
      console.log(`     @plugin '...' → Comment with migration note`);
    }
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  if (dryRun) {
    console.log('💡 Run without --dry-run to apply these changes');
  } else {
    console.log(`✅ Downgrade completed! Transformed ${totalTransformed} files.`);
    console.log('\n📋 Manual steps still required:');
    console.log('1. Update package.json to use Tailwind CSS v3');
    console.log('2. Move @plugin directives to your tailwind.config.js');
    console.log('3. Test your application thoroughly');
  }
}

function checkPostCSSConfig(projectPath: string): void {
  const postcssConfigPath = path.join(projectPath, 'postcss.config.js');

  if (fs.existsSync(postcssConfigPath)) {
    const content = fs.readFileSync(postcssConfigPath, 'utf8');
    if (content.includes('@tailwindcss/postcss')) {
      console.log('  ⚠️  Found Tailwind 4 PostCSS plugin in postcss.config.js');
      console.log("  💡 You'll need to update this to use Tailwind v3 after downgrading");
    } else {
      console.log('  ✅ PostCSS config appears compatible');
    }
  } else {
    console.log('  ℹ️  No postcss.config.js found');
  }
}

program.parse();
