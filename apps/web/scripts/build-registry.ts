import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

import type { Component } from '../vibes/schema';
import { form } from '../vibes/soul/registry/form';
import { primitives } from '../vibes/soul/registry/primitives';
import { sections } from '../vibes/soul/registry/sections';

interface RegistryItem {
  name: string;
  type: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: Array<{
    path: string;
    content: string;
    type: string;
    target: string;
  }>;
}

async function readFileContent(filePath: string): Promise<string> {
  try {
    const fullPath = join(process.cwd(), 'vibes/soul', filePath);
    return await readFile(fullPath, 'utf-8');
  } catch (error) {
    console.warn(`⚠️Could not read file: ${filePath}`, error);
    return '';
  }
}

async function transformComponent(component: Component): Promise<RegistryItem> {
  const files = await Promise.all(
    component.files.map(async (filePath: string) => ({
      path: `vibes/soul/${filePath}`,
      content: await readFileContent(filePath),
      type: 'registry:ui',
      target: `vibes/soul/${filePath}`,
    })),
  );

  return {
    name: component.name,
    type: 'registry:ui',
    dependencies: component.dependencies,
    registryDependencies: component.registryDependencies,
    files,
  };
}

async function ensureDir(dirPath: string) {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.warn('⚠️ Could not create directory', error);
  }
}

async function buildRegistry() {
  const outputDir = join(process.cwd(), 'public/r/soul');
  await ensureDir(outputDir);

  // Combine all registries
  const allComponents = [...form, ...primitives, ...sections];

  for (const component of allComponents) {
    try {
      const transformedComponent = await transformComponent(component);
      const outputPath = join(outputDir, `${component.name}.json`);

      await writeFile(outputPath, JSON.stringify(transformedComponent, null, 2), 'utf-8');

      console.log(`✅ Generated ${component.name}.json`);
    } catch (error) {
      console.error(`❌ Failed to generate ${component.name}.json:`, error);
    }
  }

  console.log(`🎉 Registry build complete! Generated ${allComponents.length} components.`);
}

// Run if called directly
if (require.main === module) {
  buildRegistry().catch(console.error);
}

export { buildRegistry };
