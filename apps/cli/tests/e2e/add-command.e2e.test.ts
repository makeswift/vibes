import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { createCLITester, type CLITester } from "../utils/cli-test-helper";

describe("vibes add command - E2E", () => {
  let cliTester: CLITester;

  beforeEach(async () => {
    cliTester = createCLITester();
    await cliTester.setupTempDir();
    await cliTester.createPackageJson();
  });

  afterEach(async () => {
    await cliTester.teardown();
  });

  it("should display version information", async () => {
    const result = await cliTester.runCLI(["--version"]);

    expect(result.exitCode).toBe(0);

    expect(result.stdout).toMatch(/\d+\.\d+\.\d+/);
  });

  it("should show help when run without arguments", async () => {
    const result = await cliTester.runCLI([]);

    expect(result.exitCode).toBe(1);

    expect(result.stderr).toBe(
      [
        "Usage: vibes [options] [command]",
        "",
        "CLI for installing VIBES components",
        "",
        "Options:",
        "  -V, --version                  output the version number",
        "  -h, --help                     display help for command",
        "",
        "Commands:",
        "  add [options] <components...>",
        "  help [command]                 display help for command",
      ].join("\n"),
    );
  });

  it("should show add command help when no components specified", async () => {
    const result = await cliTester.runCLI(["add", "--help"]);

    expect(result.exitCode).toBe(0);

    expect(result.stdout).toBe(
      [
        "Usage: vibes add [options] <components...>",
        "",
        "Arguments:",
        "  components        Components to install (e.g., soul/button)",
        "",
        "Options:",
        "  --dry-run         Show what would be installed without installing",
        "  --registry <url>  Custom registry URL",
        "  --no-install      Skip automatic dependency installation",
        "  -h, --help        display help for command",
      ].join("\n"),
    );
  });

  it("should show error when add command has no components", async () => {
    const result = await cliTester.runCLI(["add"]);

    expect(result.exitCode).toBe(1);

    expect(result.stderr).toBe(`error: missing required argument 'components'`);
  });

  it("should show what would be installed with --dry-run", async () => {
    const result = await cliTester.runCLI(["add", "soul/button", "--dry-run"]);

    expect(result.exitCode).toBe(0);

    expect(result.stdout).toContain("⚡️ Adding VIBES components");
    expect(result.stdout).toContain("📦 Installing 1 component");
    expect(result.stdout).toContain("📝 button (1 file)");
    expect(result.stdout).toContain("📚 2 npm dependencies required");
    expect(result.stdout).toContain(
      "💡 After install, dependencies would be: clsx lucide-react",
    );
    expect(result.stdout).toContain("✨ Components installed!");

    expect(
      await cliTester.fileExists("vibes/soul/primitives/button/index.tsx"),
    ).toBe(false);
  });

  it("should handle invalid component names gracefully", async () => {
    const result = await cliTester.runCLI(["add", "invalid/nonexistent"]);

    expect(result.exitCode).toBe(1);

    expect(result.stdout).toContain("⚡️ Adding VIBES components");
    expect(result.stdout).toContain("Components fetched successfully");
    expect(result.stdout).toContain("Failed to install components");
  });

  it("should accept custom registry URL option", async () => {
    const customRegistry = "https://www.diceui.com/r";
    const result = await cliTester.runCLI(
      ["add", "kanban", "--registry", customRegistry],
      {
        input: "y\n", // Install dependencies
        timeout: 30000,
      },
    );

    expect(result.exitCode).toBe(0);

    expect(result.stdout).toContain("⚡️ Adding VIBES components");
    expect(result.stdout).toContain("Components fetched successfully");
    expect(result.stdout).toContain("📦 Installing 1 component");
    expect(result.stdout).toContain("✅ kanban");
    expect(result.stdout).toContain("📚 5 npm dependencies required");
    expect(result.stdout).toContain("✅ Dependencies installed successfully!");
    expect(result.stdout).toContain("✨ Components installed!");

    expect(await cliTester.fileExists("ui/kanban.tsx")).toBe(true);
  });

  it("should handle multiple components", async () => {
    const result = await cliTester.runCLI(
      ["add", "soul/button", "soul/input"],
      {
        input: "y\n", // Installs dependencies
        timeout: 30000,
      },
    );

    expect(result.stdout).toContain("⚡️ Adding VIBES components");
    expect(result.stdout).toContain("Components fetched successfully");
    expect(result.stdout).toContain(
      "📦 Installing 2 components + 2 dependencies",
    );
    expect(result.stdout).toContain("✅ button");
    expect(result.stdout).toContain("✅ input");
    expect(result.stdout).toContain("✅ field-error");
    expect(result.stdout).toContain("✅ label");
    expect(result.stdout).toContain("📚 3 npm dependencies required");
    expect(result.stdout).toContain("✅ Dependencies installed successfully!");
    expect(result.stdout).toContain("✨ Components installed!");

    expect(
      await cliTester.fileExists("vibes/soul/primitives/button/index.tsx"),
    ).toBe(true);
    expect(await cliTester.fileExists("vibes/soul/form/input/index.tsx")).toBe(
      true,
    );
    expect(
      await cliTester.fileExists("vibes/soul/form/field-error/index.tsx"),
    ).toBe(true);
    expect(await cliTester.fileExists("vibes/soul/form/label/index.tsx")).toBe(
      true,
    );

    expect(await cliTester.dependencyExists("@radix-ui/react-label")).toBe(
      true,
    );
    expect(await cliTester.dependencyExists("clsx")).toBe(true);
    expect(await cliTester.dependencyExists("lucide-react")).toBe(true);

    expect(result.exitCode).toBe(0);
  });

  it("should handle --no-install option", async () => {
    const result = await cliTester.runCLI([
      "add",
      "soul/button",
      "--no-install",
      "--dry-run",
    ]);

    expect(result.exitCode).toBe(0);

    expect(result.stdout).toContain("⚡️ Adding VIBES components");
    expect(result.stdout).toContain("Components fetched successfully");
    expect(result.stdout).toContain("📝 button (1 file)");
    expect(result.stdout).toContain("📚 2 npm dependencies required");
    expect(result.stdout).toContain(
      "💡 After install, dependencies would be: clsx lucide-react",
    );
    expect(result.stdout).toContain("✨ Components installed!");
  });
});
