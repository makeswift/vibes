import { promises as fs } from "fs";
import { execSync } from "child_process";
import chalk from "chalk";
import { confirm } from "@clack/prompts";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export interface PackageManagerInfo {
  name: PackageManager;
  installCommand: string;
  lockFile: string;
}

const PACKAGE_MANAGERS: Record<PackageManager, PackageManagerInfo> = {
  pnpm: {
    name: "pnpm",
    installCommand: "pnpm install",
    lockFile: "pnpm-lock.yaml",
  },
  yarn: {
    name: "yarn",
    installCommand: "yarn add",
    lockFile: "yarn.lock",
  },
  bun: {
    name: "bun",
    installCommand: "bun install",
    lockFile: "bun.lockb",
  },
  npm: {
    name: "npm",
    installCommand: "npm install",
    lockFile: "package-lock.json",
  },
};

export async function detectPackageManager(): Promise<PackageManagerInfo> {
  // Check for lock files in current directory
  for (const pm of Object.values(PACKAGE_MANAGERS)) {
    try {
      await fs.access(pm.lockFile);
      return pm;
    } catch {
      // Lock file doesn't exist, continue
    }
  }

  // Fallback: check which package managers are available
  for (const pm of ["pnpm", "yarn", "bun", "npm"] as PackageManager[]) {
    try {
      execSync(`${pm} --version`, { stdio: "ignore" });
      return PACKAGE_MANAGERS[pm];
    } catch {
      // Package manager not available, continue
    }
  }

  // Ultimate fallback to npm
  return PACKAGE_MANAGERS.npm;
}

export async function installDependencies(
  dependencies: string[],
  packageManager: PackageManagerInfo,
): Promise<boolean> {
  try {
    const command = `${packageManager.installCommand} ${dependencies.join(" ")}`;

    console.log(`${chalk.blue("🔄")} Running: ${chalk.bold(command)}`);

    execSync(command, {
      stdio: "inherit",
      cwd: process.cwd(),
    });

    console.log(`${chalk.green("✅")} Dependencies installed successfully!`);
    return true;
  } catch (error) {
    console.log(`${chalk.red("❌")} Failed to install dependencies`);
    console.log(
      `${chalk.yellow("💡")} Please run manually: ${chalk.bold(packageManager.installCommand)} ${dependencies.join(" ")}`,
    );
    return false;
  }
}

export async function promptAndInstallDependencies(
  dependencies: string[],
  dryRun: boolean = false,
): Promise<void> {
  if (dependencies.length === 0 || dryRun) {
    return;
  }

  const packageManager = await detectPackageManager();

  const shouldInstall = await confirm({
    message: `Install ${dependencies.length} dependencies using ${chalk.cyan(packageManager.name)}?`,
    initialValue: true,
  });

  if (shouldInstall) {
    await installDependencies(dependencies, packageManager);
  } else {
    // Show manual install command
    console.log(`\n${chalk.bgYellow.black(" NEXT STEP ")}`);
    console.log(
      `${chalk.yellow("→")} ${chalk.bold.white(packageManager.installCommand)} ${chalk.cyan(dependencies.join(" "))}`,
    );
    console.log(
      `${chalk.dim("Copy and run the command above to install all required dependencies")}\n`,
    );
  }
}
