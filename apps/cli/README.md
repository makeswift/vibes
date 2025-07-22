# VIBES CLI

A CLI tool for installing UI components from the VIBES design system.

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
