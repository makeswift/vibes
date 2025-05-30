# Tailwind Downgrade CLI

A command-line tool to help migrate Tailwind CSS classes from version 4 to version 3. This tool provides automated transformations for various Tailwind CSS class changes.

## Features

- **Renamed Utilities**: Transform renamed utility classes (e.g., `shadow-xs` → `shadow-sm`)
- **Arbitrary CSS Variables**: Update arbitrary CSS variable syntax (e.g., `bg-(var(--primary))` → `bg-[var(--primary)]`)
- **Spacing Scale**: Convert unsupported spacing values to arbitrary values (e.g., `mt-13` → `mt-[3.25rem]`)

## Installation

The CLI is available as a binary in your project. You can run it using:

```bash
pnpm run tw-downgrade
```

## Usage

### Basic Commands

```bash
# Transform a specific file or directory
pnpm run tw-downgrade <path> [options]

# Scan for potential changes without modifying files
pnpm run tw-downgrade scan <path> [options]
```

### Available Transformers

1. **Renamed Utilities** (`utils`)

   - Transforms renamed utility classes
   - Example: `shadow-xs` → `shadow-sm`, `outline-hidden` → `outline-none`

2. **Arbitrary CSS Variables** (`vars`)

   - Updates arbitrary CSS variable syntax
   - Example: `bg-(var(--primary))` → `bg-[var(--primary)]`

3. **Spacing Scale** (`space`)
   - Converts unsupported spacing values
   - Example: `mt-13` → `mt-[3.25rem]`

### Command Options

```bash
# Transform specific files
pnpm run tw-downgrade <path> --pattern "**/*.tsx"

# Dry run (show changes without applying them)
pnpm run tw-downgrade <path> --dry-run

# Ignore specific patterns
pnpm run tw-downgrade <path> --ignore-pattern "**/test/**"

# Scan for changes
pnpm run tw-downgrade scan <path>

# Output scan results as JSON
pnpm run tw-downgrade scan <path> --json
```

## Examples

```bash
# Transform all TypeScript/TSX files in the components directory
pnpm run tw-downgrade ./components --pattern "**/*.{ts,tsx}"

# Scan for potential changes in a specific file
pnpm run tw-downgrade scan ./components/Button.tsx

# Transform with dry run to preview changes
pnpm run tw-downgrade ./components --dry-run
```

## Default Ignore Patterns

The tool automatically ignores the following directories:

- `node_modules`
- `dist`
- `build`
- `.next`
- `.turbo`
- `coverage`
- `out`

## Contributing

To add new transformers or modify existing ones:

1. Create a new transformer file in the `transforms` directory
2. Add the transformer configuration to `TRANSFORMERS` in `downgrade-cli.ts`
3. Implement the necessary transformation logic
4. Add tests in the `tests` directory

## Testing

Run the test suite using:

```bash
pnpm run test:jest
```

## License

MIT
