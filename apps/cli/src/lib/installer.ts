import { promises as fs } from "fs";
import path from "path";
import { fetchComponent, type RegistryComponent } from "./registry.js";

interface InstallOptions {
  dryRun?: boolean;
  registryUrl?: string;
  basePath?: string;
}

export async function installComponents(
  componentNames: string[],
  options: InstallOptions = {},
) {
  const { dryRun = false, basePath = "." } = options;

  // Resolve all components and their dependencies
  const allComponents = await resolveComponentDependencies(
    componentNames,
    options,
  );

  console.log(`📦 Installing ${allComponents.length} components...`);

  for (const component of allComponents) {
    await installComponent(component, { ...options, basePath });
  }

  // Collect all npm dependencies
  const allDependencies = [
    ...new Set(allComponents.flatMap((c) => c.dependencies || [])),
  ];

  if (allDependencies.length > 0) {
    console.log(`📚 Dependencies needed: ${allDependencies.join(", ")}`);
    if (!dryRun) {
      console.log("💡 Run: npm install " + allDependencies.join(" "));
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
  options: InstallOptions & { basePath: string },
) {
  const { dryRun, basePath } = options;

  console.log(`📄 ${component.name}`);

  for (const file of component.files) {
    const targetPath = path.join(basePath, file.target || file.path);

    if (dryRun) {
      console.log(`  📝 Would write: ${targetPath}`);
      continue;
    }

    // Ensure directory exists
    await fs.mkdir(path.dirname(targetPath), { recursive: true });

    // Write file content
    await fs.writeFile(targetPath, file.content, "utf-8");
    console.log(`  ✅ Wrote: ${targetPath}`);
  }
}
