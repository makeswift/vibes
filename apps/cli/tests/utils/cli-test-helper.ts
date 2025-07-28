import { spawn } from "child_process";
import { promises as fs } from "fs";
import path from "path";
import tmp from "tmp";

export interface CLITestResult {
  stdout: string;
  stderr: string;
  exitCode: number | null;
  signal: string | null;
}

export interface CLITester {
  setupTempDir(): Promise<string>;
  runCLI(
    args: string[],
    options?: {
      cwd?: string;
      env?: Record<string, string>;
      timeout?: number;
      input?: string;
    },
  ): Promise<CLITestResult>;
  fileExists(filePath: string): Promise<boolean>;
  readFile(filePath: string): Promise<string>;
  writeFile(filePath: string, content: string): Promise<void>;
  createPackageJson(content?: Record<string, any>): Promise<void>;
  createDirectory(dirPath: string): Promise<void>;
  listFiles(dirPath?: string): Promise<string[]>;
  dependencyExists(
    dependencyName: string,
    options?: {
      type?: "dependencies" | "devDependencies" | "both";
    },
  ): Promise<boolean>;
  getDependencyVersion(
    dependencyName: string,
    options?: {
      type?: "dependencies" | "devDependencies" | "both";
    },
  ): Promise<string | null>;
  teardown(): Promise<void>;
  getTempDir(): string;
}

export function createCLITester(): CLITester {
  let tempDir: string | null = null;
  let cleanup: (() => void) | null = null;

  // Helper to ensure temp directory is set up
  const ensureTempDir = (): string => {
    if (!tempDir) {
      throw new Error("Temp directory not set up. Call setupTempDir() first.");
    }
    return tempDir;
  };

  return {
    /**
     * Create a temporary directory for testing
     */
    async setupTempDir(): Promise<string> {
      return new Promise((resolve, reject) => {
        tmp.dir({ unsafeCleanup: true }, (err, dirPath, cleanupCallback) => {
          if (err) return reject(err);

          tempDir = dirPath;
          cleanup = cleanupCallback;
          resolve(dirPath);
        });
      });
    },

    /**
     * Run the vibes CLI with given arguments
     */
    async runCLI(
      args: string[],
      options: {
        cwd?: string;
        env?: Record<string, string>;
        timeout?: number;
        input?: string;
      } = {},
    ): Promise<CLITestResult> {
      const {
        cwd = tempDir || process.cwd(),
        env = {},
        timeout = 15000,
        input,
      } = options;

      return new Promise((resolve, reject) => {
        // Use tsx to run the TypeScript CLI directly for testing
        const cliPath = path.resolve(__dirname, "../../src/index.ts");

        const child = spawn("npx", ["tsx", cliPath, ...args], {
          cwd,
          env: { ...process.env, ...env },
          stdio: "pipe",
        });

        if (input) {
          child.stdin?.write(input);
          child.stdin?.end();
        }

        let stdout = ""; // Normal CLI output
        let stderr = ""; // Error output

        // Stream stdout and stderr to variables
        child.stdout?.on("data", (data) => {
          stdout += data.toString();
        });

        child.stderr?.on("data", (data) => {
          stderr += data.toString();
        });

        const timeoutId = setTimeout(() => {
          child.kill("SIGTERM");
          reject(new Error(`CLI command timed out after ${timeout}ms`));
        }, timeout);

        child.on("close", (exitCode, signal) => {
          clearTimeout(timeoutId);
          resolve({
            stdout: stdout.trim(),
            stderr: stderr.trim(),
            exitCode,
            signal,
          });
        });

        child.on("error", (error) => {
          clearTimeout(timeoutId);
          reject(error);
        });
      });
    },

    /**
     * Check if a file exists in the temp directory
     */
    async fileExists(filePath: string): Promise<boolean> {
      const dir = ensureTempDir();

      try {
        await fs.access(path.join(dir, filePath));
        return true;
      } catch {
        return false;
      }
    },

    /**
     * Read file content from temp directory
     */
    async readFile(filePath: string): Promise<string> {
      const dir = ensureTempDir();
      return fs.readFile(path.join(dir, filePath), "utf-8");
    },

    /**
     * Write file content to temp directory
     */
    async writeFile(filePath: string, content: string): Promise<void> {
      const dir = ensureTempDir();

      const fullPath = path.join(dir, filePath);
      await fs.mkdir(path.dirname(fullPath), { recursive: true });
      await fs.writeFile(fullPath, content);
    },

    /**
     * Create a package.json in the temp directory
     */
    async createPackageJson(content: Record<string, any> = {}): Promise<void> {
      const dir = ensureTempDir();

      const defaultPackageJson = {
        name: "test-project",
        version: "1.0.0",
        type: "module",
        ...content,
      };

      await fs.writeFile(
        path.join(dir, "package.json"),
        JSON.stringify(defaultPackageJson, null, 2),
      );
    },

    /**
     * Create directory structure in temp directory
     */
    async createDirectory(dirPath: string): Promise<void> {
      const dir = ensureTempDir();
      await fs.mkdir(path.join(dir, dirPath), { recursive: true });
    },

    /**
     * List files in a directory within temp directory
     */
    async listFiles(dirPath: string = "."): Promise<string[]> {
      const dir = ensureTempDir();

      const fullPath = path.join(dir, dirPath);
      try {
        return await fs.readdir(fullPath);
      } catch {
        return [];
      }
    },

    /**
     * Check if a dependency exists in package.json
     */
    async dependencyExists(
      dependencyName: string,
      options: {
        type?: "dependencies" | "devDependencies" | "both";
      } = {},
    ): Promise<boolean> {
      const { type = "both" } = options;
      const dir = ensureTempDir();

      try {
        const packageJsonPath = path.join(dir, "package.json");
        const packageJsonContent = await fs.readFile(packageJsonPath, "utf-8");
        const packageJson = JSON.parse(packageJsonContent);

        const checkDeps = type === "dependencies" || type === "both";
        const checkDevDeps = type === "devDependencies" || type === "both";

        const inDependencies =
          checkDeps &&
          packageJson.dependencies &&
          dependencyName in packageJson.dependencies;

        const inDevDependencies =
          checkDevDeps &&
          packageJson.devDependencies &&
          dependencyName in packageJson.devDependencies;

        return inDependencies || inDevDependencies;
      } catch {
        return false;
      }
    },

    /**
     * Get dependency version from package.json
     */
    async getDependencyVersion(
      dependencyName: string,
      options: {
        type?: "dependencies" | "devDependencies" | "both";
      } = {},
    ): Promise<string | null> {
      const { type = "both" } = options;
      const dir = ensureTempDir();

      try {
        const packageJsonPath = path.join(dir, "package.json");
        const packageJsonContent = await fs.readFile(packageJsonPath, "utf-8");
        const packageJson = JSON.parse(packageJsonContent);

        const checkDeps = type === "dependencies" || type === "both";
        const checkDevDeps = type === "devDependencies" || type === "both";

        if (
          checkDeps &&
          packageJson.dependencies &&
          dependencyName in packageJson.dependencies
        ) {
          return packageJson.dependencies[dependencyName];
        }

        if (
          checkDevDeps &&
          packageJson.devDependencies &&
          dependencyName in packageJson.devDependencies
        ) {
          return packageJson.devDependencies[dependencyName];
        }

        return null;
      } catch {
        return null;
      }
    },

    /**
     * Clean up temp directory
     */
    async teardown(): Promise<void> {
      if (cleanup) {
        cleanup();
        tempDir = null;
        cleanup = null;
      }
    },

    /**
     * Get the temp directory path
     */
    getTempDir(): string {
      return ensureTempDir();
    },
  };
}
