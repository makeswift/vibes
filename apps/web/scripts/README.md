# Tailwind 4 to 3 Downgrade CLI Tool

A command-line tool to help migrate your project from Tailwind CSS v4 back to v3 by automatically transforming incompatible syntax and providing migration guidance.

## Quick Start

```bash
# Navigate to your project root
cd /path/to/your/project

# Initialize the tool (checks your project setup)
npm run tw-downgrade init

# Analyze your project for Tailwind 4 features
npm run tw-downgrade analyze

# Preview changes without applying them
npm run tw-downgrade -- downgrade --dry-run

# Apply the downgrades
npm run tw-downgrade downgrade
```

## Features

### 🔍 Analysis

- **CSS Import Detection**: Finds `@import 'tailwindcss'` usage
- **Theme Block Detection**: Locates `@theme inline` blocks
- **Plugin Directive Detection**: Identifies `@plugin` directives
- **PostCSS Configuration Check**: Validates your PostCSS setup

### 🔄 Automatic Transformations

#### CSS Import Transformation

```css
/* Before (Tailwind 4) */
@import 'tailwindcss';

/* After (Tailwind 3) */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

#### Theme Block Transformation

```css
/* Before (Tailwind 4) */
@theme inline {
  --color-primary: #3b82f6;
  --color-secondary: #ef4444;
}

/* After (Tailwind 3 compatible) */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #ef4444;
}
```

#### Plugin Directive Transformation

```css
/* Before (Tailwind 4) */
@plugin 'tailwindcss-animate';

/* After (Tailwind 3 compatible) */
/* TODO: Add "tailwindcss-animate" to your tailwind.config.js plugins array */
```

## Commands

### `init`

Initializes the downgrade tool and checks your project setup.

```bash
npm run tw-downgrade init
```

### `analyze`

Scans your project for Tailwind 4 features that need migration.

```bash
npm run tw-downgrade analyze [options]

Options:
  -p, --path <path>    Path to analyze (default: current directory)
```

### `downgrade`

Performs the actual downgrade transformations.

```bash
npm run tw-downgrade downgrade [options]

Options:
  -p, --path <path>      Path to process (default: current directory)
  -f, --files <files>    Specific files to process (space-separated)
  --dry-run             Preview changes without applying them
```

## Examples

### Analyze a specific directory

```bash
npm run tw-downgrade analyze --path ./src/styles
```

### Process specific files only

```bash
npm run tw-downgrade downgrade --files ./styles/globals.css ./styles/components.css
```

### Preview changes before applying

```bash
npm run tw-downgrade -- downgrade --dry-run
```

## Technical Details

### TypeScript Implementation

The CLI tool is built with TypeScript and uses:

- **Commander.js** for CLI interface
- **tsx** for running TypeScript files directly
- **Modular transforms** for different migration types

### File Structure

```
scripts/
├── downgrade-cli.ts              # Main CLI entry point
├── transforms/
│   ├── css-imports.ts            # CSS import transformations
│   ├── theme-blocks.ts           # @theme and @plugin transformations
│   └── class-names.ts            # Utility class transformations
└── README.md                     # This documentation
```

## Manual Steps Required

After running the automatic transformations, you'll still need to complete these manual steps:

### 1. Update package.json

Change your Tailwind CSS version from v4 to v3:

```bash
npm uninstall tailwindcss @tailwindcss/postcss
npm install tailwindcss@^3.4.0
```

### 2. Update PostCSS Configuration

If you're using `@tailwindcss/postcss`, update your `postcss.config.js`:

```js
// Before (Tailwind 4)
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

// After (Tailwind 3)
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 3. Move Plugin Directives

Move any `@plugin` directives to your `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  content: [
    // your content paths
  ],
  theme: {
    extend: {
      // your theme extensions
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Add plugins here
  ],
};
```

### 4. Test Your Application

Thoroughly test your application after the migration to ensure all styles are working correctly.

## Supported File Types

The tool processes the following file types:

- **CSS files**: `.css`, `.scss`, `.sass`
- **Component files**: `.tsx`, `.jsx`, `.ts`, `.js`, `.vue`, `.svelte`

## Limitations

- **Manual Plugin Configuration**: `@plugin` directives must be manually moved to `tailwind.config.js`
- **Complex Theme Configurations**: Advanced theme configurations may need manual adjustment
- **Custom CSS Properties**: Some modern CSS features might need additional handling

## Development

### Running from Source

```bash
# Run TypeScript directly
npx tsx scripts/downgrade-cli.ts [command]

# Or use npm script
npm run tw-downgrade [command]
```

### Adding New Transforms

1. Create a new transform file in `scripts/transforms/`
2. Export analysis and transformation functions
3. Import and integrate in `downgrade-cli.ts`

## Troubleshooting

### File Not Found Errors

Ensure you're running the tool from your project root directory where your CSS files are located.

### Permission Errors

Make sure the tool has write permissions to modify your CSS files.

### TypeScript Errors

If you encounter TypeScript compilation errors, ensure you have the correct Node.js version and dependencies installed.

### Backup Recommendation

Always backup your files before running the downgrade tool, especially when not using `--dry-run` mode.

## Contributing

This tool can be extended with additional transformations. Key areas for enhancement:

- More sophisticated theme block parsing
- JavaScript/TypeScript file transformations
- Configuration file migrations
- Custom property handling
