import { promises as fs } from "fs";
import path from "path";
import chalk from "chalk";
import { fetchComponent, type RegistryComponent } from "./registry.js";
import { promptAndInstallDependencies } from "./package-manager.js";

interface InstallOptions {
  dryRun?: boolean;
  registryUrl?: string;
  basePath?: string;
  skipInstall?: boolean;
}

export async function installComponents(
  componentNames: string[],
  options: InstallOptions = {},
) {
  const { dryRun = false, basePath = ".", skipInstall = false } = options;

  // Resolve all components and their dependencies
  const allComponents = await resolveComponentDependencies(
    componentNames,
    options,
  );

  const requestedCount = componentNames.length;
  const totalCount = allComponents.length;
  const depCount = totalCount - requestedCount;

  // Colorful summary
  if (depCount > 0) {
    console.log(
      `${chalk.blue("📦")} Installing ${chalk.bold.cyan(requestedCount)} component${requestedCount > 1 ? "s" : ""} ${chalk.dim("+")} ${chalk.cyan(depCount)} dependencies`,
    );
  } else {
    console.log(
      `${chalk.blue("📦")} Installing ${chalk.bold.cyan(requestedCount)} component${requestedCount > 1 ? "s" : ""}`,
    );
  }

  // Track which components were requested vs dependencies
  const requestedComponents = new Set(componentNames);

  for (const component of allComponents) {
    const isRequested = requestedComponents.has(component.name);
    await installComponent(component, { ...options, basePath, isRequested });
  }

  // Handle dependency installation
  const allDependencies = [
    ...new Set(allComponents.flatMap((c) => c.dependencies || [])),
  ];

  if (allDependencies.length > 0) {
    console.log(
      `\n${chalk.blue("📚")} ${chalk.cyan(allDependencies.length)} npm dependencies required`,
    );

    if (dryRun) {
      // For dry run, show what would be installed
      console.log(
        `${chalk.yellow("💡")} After install, dependencies would be: ${chalk.cyan(allDependencies.join(" "))}`,
      );
    } else if (skipInstall) {
      // Show manual install command when skipInstall is true
      const { detectPackageManager } = await import("./package-manager.js");
      const packageManager = await detectPackageManager();
      console.log(`\n${chalk.bgYellow.black(" NEXT STEP ")}`);
      console.log(
        `${chalk.yellow("→")} ${chalk.bold.white(packageManager.installCommand)} ${chalk.cyan(allDependencies.join(" "))}`,
      );
      console.log(
        `${chalk.dim("Copy and run the command above to install all required dependencies")}\n`,
      );
    } else {
      // Prompt to install dependencies automatically
      await promptAndInstallDependencies(allDependencies, dryRun);
    }
  }
}

async function resolveComponentDependencies(
  componentNames: string[],
  options: InstallOptions,
): Promise<RegistryComponent[]> {
  const resolved = new Map<string, RegistryComponent>();
  const toProcess = [...componentNames];

  while (toProcess.length > 0) {
    const componentName = toProcess.shift()!;

    if (resolved.has(componentName)) continue;

    const component = await fetchComponent(componentName, options);
    resolved.set(componentName, component);

    // Add registry dependencies to process queue
    if (component.registryDependencies) {
      toProcess.push(...component.registryDependencies);
    }
  }

  return Array.from(resolved.values());
}

async function installComponent(
  component: RegistryComponent,
  options: InstallOptions & { basePath: string; isRequested?: boolean },
) {
  const { dryRun, basePath, isRequested = false } = options;

  // Colorized component output
  if (dryRun) {
    const icon = chalk.yellow("📝");
    const name = isRequested
      ? chalk.bold.yellow(component.name)
      : chalk.dim(component.name);
    const fileCount = chalk.dim(
      `(${component.files.length} file${component.files.length > 1 ? "s" : ""})`,
    );
    console.log(`${icon} ${name} ${fileCount}`);
  } else {
    const icon = chalk.green("✅");
    const name = isRequested
      ? chalk.bold.green(component.name)
      : chalk.gray(component.name);
    console.log(`${icon} ${name}`);
  }

  // Install files
  for (const file of component.files) {
    const targetPath = path.join(basePath, file.target || file.path);

    if (dryRun) {
      // Files are summarized in the line above during dry-run
      continue;
    }

    // Ensure directory exists
    await fs.mkdir(path.dirname(targetPath), { recursive: true });

    // Write file content
    await fs.writeFile(targetPath, file.content, "utf-8");
  }
}
