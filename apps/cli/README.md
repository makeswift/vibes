# VIBES CLI

[![npm version](https://badge.fury.io/js/vibes.svg)](https://badge.fury.io/js/vibes)
[![GitHub](https://img.shields.io/github/license/makeswift/vibes)](https://github.com/makeswift/vibes)
[![GitHub issues](https://img.shields.io/github/issues/makeswift/vibes)](https://github.com/makeswift/vibes/issues)

A CLI tool for installing UI components from the VIBES design system.

## Links

- Homepage: [https://vibes.site](https://vibes.site)
- GitHub: [https://github.com/makeswift/vibes](https://github.com/makeswift/vibes)
- Issues: [Report a bug](https://github.com/makeswift/vibes/issues)

## Installation

```bash
# Use directly (recommended)
npx vibes@latest add button

# Or install globally
npm install -g vibes
```

## Usage

### Install Components

```bash
# Install a single component
vibes add button

# Install multiple components
vibes add button input alert

# Install with all dependencies
vibes add navigation  # Installs 15+ related components
```

### Options

```bash
# Preview what would be installed
vibes add accordion --dry-run

# Use custom registry
vibes add button --registry https://custom-registry.com/registry

# Skip automatic dependency installation
vibes add button --no-install
```

## Contributing

Found a bug or want to contribute? Check out our [GitHub repository](https://github.com/makeswift/vibes) and feel free to open an issue or submit a pull request!
