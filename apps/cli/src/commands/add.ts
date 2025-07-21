import { Command } from "commander";
import { intro, outro, spinner, cancel } from "@clack/prompts";
import { installComponents } from "../lib/installer.js";

export const addCommand = new Command("add")
  .argument("<components...>", "Components to install (e.g., soul/button)")
  .option("--dry-run", "Show what would be installed without installing")
  .option("--registry <url>", "Custom registry URL")
  .action(async (components: string[], options) => {
    intro("⚡️ Adding VIBES components");

    const s = spinner();
    s.start("Fetching components...");

    try {
      await installComponents(components, {
        dryRun: options.dryRun,
        registryUrl: options.registry,
      });

      s.stop("Components fetched successfully");
      outro("✨ Components installed!");
    } catch (error) {
      s.stop("Failed to install components");
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      cancel(`Error: ${errorMessage}`);
      process.exit(1);
    }
  });
