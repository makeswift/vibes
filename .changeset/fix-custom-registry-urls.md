---
"vibes": patch
---

Fix custom registry URL construction to support external component registries

The `--registry` option now correctly constructs URLs for custom registries by using a simplified path structure (`{registryUrl}/{name}.json`) instead of including the `vibe` namespace in the path. This enables proper integration with external component registries like DiceUI while maintaining backward compatibility with the default vibes registry.
