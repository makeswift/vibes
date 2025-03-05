export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("docs", {
    description:
      "generate docs and examples for a new component and register the example files",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name of the component?",
      },
      {
        type: "input",
        name: "description",
        message: "Description of the component?",
      },
      {
        type: "list",
        name: "type",
        message: "What type of component is this? (pprimitive, section, form)",
        choices: ["primitives", "sections", "form"],
      },
    ],
    actions: function (data) {
      const actions = [];
      //action to create the doc file
      actions.push({
        type: "add",
        path: "apps/web/vibes/soul/docs/{{hyphenCase name}}.mdx",
        templateFile: "plop-templates/docs.mdx.hbs",
      });

      //action to create the example files
      actions.push({
        type: "addMany",
        destination:
          "apps/web/vibes/soul/examples/{{type}}/{{hyphenCase name}}",
        templateFiles: [
          "plop-templates/warm.tsx.hbs",
          "plop-templates/electric.tsx.hbs",
          "plop-templates/luxury.tsx.hbs",
        ],
      });

      //actions to register the different examples
      const themes = ["warm", "electric", "luxury"];
      const themeExampleActions = themes.map((theme) => {
        return {
          type: "modify",
          path: "apps/web/vibes/soul/examples.ts",
          pattern: /\/\/ PLOP: Append new component here/g,
          templateFile: "plop-templates/register-example.ts.hbs",
          data: { ...data, theme },
        };
      });
      actions.push(...themeExampleActions);

      return actions;
    },
  });

  plop.setHelper("titleCase", function (text) {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
  plop.setHelper("hyphenCase", function (text) {
    return text.replace(/\s/g, "-").toLowerCase();
  });
  plop.setHelper("componentCase", function (text) {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  });
}
