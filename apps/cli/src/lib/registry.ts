import fetch from "node-fetch";

export interface RegistryComponent {
  name: string;
  type: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: Array<{
    path: string;
    content: string;
    type: string;
    target?: string;
  }>;
}

const DEFAULT_REGISTRY_URL = "https://localhost:3000/r";

export async function fetchComponent(
  componentName: string,
  options: { registryUrl?: string } = {},
): Promise<RegistryComponent> {
  const registryUrl = options.registryUrl || DEFAULT_REGISTRY_URL;

  // Parse component name (e.g., "soul/button" -> vibe: "soul", name: "button")
  const [vibe, name] = componentName.includes("/")
    ? componentName.split("/")
    : ["soul", componentName];

  const url = `${registryUrl}/${vibe}/${name}.json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Component "${componentName}" not found (${response.status})`,
      );
    }

    const component = (await response.json()) as RegistryComponent;
    return component;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Failed to fetch component "${componentName}": ${error.message}`,
      );
    } else {
      throw new Error(
        `Failed to fetch component "${componentName}": ${String(error)}`,
      );
    }
  }
}
