import { Command } from "commander";
import chalk from "chalk";
import { intro, outro, spinner, cancel } from "@clack/prompts";
import { installComponents } from "../lib/installer.js";

export const addCommand = new Command("add")
  .argument("<components...>", "Components to install (e.g., soul/button)")
  .option("--dry-run", "Show what would be installed without installing")
  .option("--registry <url>", "Custom registry URL")
  .option("--no-install", "Skip automatic dependency installation")
  .action(async (components: string[], options) => {
    intro(chalk.bold.magenta("⚡️ Adding VIBES components"));

    const s = spinner();
    s.start("Fetching components...");

    try {
      // Stop spinner before installation output begins
      s.stop("Components fetched successfully");

      await installComponents(components, {
        dryRun: options.dryRun,
        registryUrl: options.registry,
        skipInstall: options.noInstall,
      });

      outro(chalk.green("✨ Components installed!"));
    } catch (error) {
      s.stop(chalk.red("Failed to install components"));
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      cancel(chalk.red(`Error: ${errorMessage}`));
      process.exit(1);
    }
  });
