# vibes

## 1.0.4

### Patch Changes

- Pin chalk dependency to 5.4.1 to prevent security vulnerability

  Pins chalk from ^5.3.0 to exact version 5.4.1 to prevent installation of vulnerable version 5.6.1. Also removes conflicting package-lock.json to ensure consistent pnpm usage across the workspace.

## 1.0.0

### Major Changes

- 0803b58: 🎉 Initial stable release of VIBES CLI

  This marks the first major release of the VIBES component CLI, providing developers with a powerful tool to install UI components from the VIBES design system.

  ### ✨ Key Features:

  - **Smart package manager detection** (pnpm, yarn, bun, npm)
  - **Interactive dependency installation** with user prompts
  - **Intelligent component resolution** with automatic dependency handling
  - **Registry-based architecture** supporting remote component fetching
  - **Flexible installation options** with --dry-run and --no-install flags
  - **Proper file organization** respecting target paths and directory structure

  ### Usage Examples:

  - Install single component: `vibes add button`
  - Install with dependencies: `vibes add navigation` (auto-installs 15+ components)
  - Preview changes: `vibes add accordion --dry-run`
  - Custom registry: `vibes add button --registry https://custom-registry.com`
  - Skip auto-install: `vibes add button --no-install`

  ### Developer Experience:

  - Zero-config component installation
  - Automatic package manager detection
  - Clear, actionable error messages
  - Comprehensive dependency management

  ### Installation:

  ```bash
  # Use directly (recommended)
  npx vibes@latest add button

  # Or install globally
  npm install -g vibes
  ```

  This release provides a complete, production-ready CLI for the VIBES ecosystem.

## 0.2.0

### Minor Changes

- adb8529: CLI improvements:

  - adds colorized output for better visual hierarchy
  - improves component installation display
  - adds automatic package manager detection (pnpm, yarn, bun, npm)
  - adds interactive dependency installation with user prompts
  - adds --no-install flag to skip automatic dependency installation
  - enhances dry-run output with better file summaries
  - fixes spinner timing issues for cleaner output
  - adds more prominent dependency installation instructions
