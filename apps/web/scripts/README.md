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
# List all available transformers
pnpm run tw-downgrade list

# Run a specific transformer
pnpm run tw-downgrade <transformer> <path>

# Run all transformers
pnpm run tw-downgrade all <path>

# Scan for potential changes
pnpm run tw-downgrade scan <transformer> <path>
```

### Available Transformers

1. **Renamed Utilities** (`utils`)

   - Transforms renamed utility classes
   - Example: `shadow-xs` → `shadow-sm`, `outline-hidden` → `outline-none`
   - Common transformations:
     - `shadow-xs` → `shadow-sm`
     - `shadow-sm` → `shadow`
     - `outline-hidden` → `outline-none`
     - `ring-3` → `ring`

2. **Arbitrary CSS Variables** (`vars`)

   - Updates arbitrary CSS variable syntax
   - Example: `bg-(var(--primary))` → `bg-[var(--primary)]`
   - Handles complex CSS functions:
     - `text-(--alert-description-text,color-mix(...))` → `text-[--alert-description-text,color-mix(...)]`

3. **Spacing Scale** (`space`)
   - Converts unsupported spacing values
   - Example: `mt-13` → `mt-[3.25rem]`
   - Handles various spacing utilities:
     - Margin: `mt-`, `mb-`, `ml-`, `mr-`, `mx-`, `my-`
     - Padding: `p-`, `pt-`, `pb-`, `pl-`, `pr-`, `px-`, `py-`
     - Gap: `gap-`, `gap-x-`, `gap-y-`
     - Space: `space-x-`, `space-y-`

### Command Options

```bash
# Transform specific files using a glob pattern
pnpm run tw-downgrade <transformer> <path> --pattern "**/*.tsx"

# Dry run (show changes without applying them)
pnpm run tw-downgrade <transformer> <path> --dry-run

# Ignore specific patterns
pnpm run tw-downgrade <transformer> <path> --ignore-pattern "**/test/**"

# Output scan results as JSON
pnpm run tw-downgrade scan <transformer> <path> --json
```

## Examples

```bash
# List all available transformers
pnpm run tw-downgrade list

# Run the spacing scale transformer on components
pnpm run tw-downgrade space ./components

# Run all transformers on a specific file
pnpm run tw-downgrade all ./components/Button.tsx

# Scan for potential changes in components
pnpm run tw-downgrade scan utils ./components

# Scan all transformers
pnpm run tw-downgrade scan all ./components

# Transform with dry run to preview changes
pnpm run tw-downgrade utils ./components --dry-run

# Transform specific files with custom pattern
pnpm run tw-downgrade vars ./components --pattern "**/*.tsx"
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
