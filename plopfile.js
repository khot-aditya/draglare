export default function (plop) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name of the component?",
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return "The name is required";
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/views/components/{{properCase name}}/index.ts",
        templateFile: "plop/components/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/views/components/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "plop/components/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/views/components/{{properCase name}}/{{properCase name}}.stories.tsx",
        templateFile: "plop/components/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/views/components/{{properCase name}}/controller.ts",
        templateFile: "plop/components/controller.ts.hbs",
      },
      {
        type: "add",
        path: "src/views/components/{{properCase name}}/types.ts",
        templateFile: "plop/components/types.ts.hbs",
      },
    ],
  });

  plop.setGenerator("icon", {
    description: "Create empty svg file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter icon name",
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return "The name is required";
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/assets/icons/{{snakeCase name}}_icon.svg",
        templateFile: "plop/icons/icon.svg.hbs",
      },
      {
        type: "add",
        path: "src/views/icons/{{properCase name}}/index.ts",
        templateFile: "plop/icons/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/views/icons/{{properCase name}}/{{properCase name}}Icon.tsx",
        templateFile: "plop/icons/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/views/icons/{{properCase name}}/{{properCase name}}Icon.stories.tsx",
        templateFile: "plop/icons/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/views/icons/{{properCase name}}/types.ts",
        templateFile: "plop/icons/types.ts.hbs",
      },
    ],
  });

  plop.setGenerator("page", {
    description: "Create a new page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name of the page?",
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return "The name is required";
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/views/pages/{{properCase name}}/index.ts",
        templateFile: "plop/pages/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/views/pages/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "plop/pages/page.tsx.hbs",
      },
      {
        type: "add",
        path: "src/views/pages/{{properCase name}}/{{properCase name}}.stories.tsx",
        templateFile: "plop/pages/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/views/pages/{{properCase name}}/controller.ts",
        templateFile: "plop/pages/controller.ts.hbs",
      },
    ],
  });

  // plop.setGenerator("layout", {
  //   description: "Create empty svg file",
  //   prompts: [
  //     {
  //       type: "input",
  //       name: "name",
  //       message: "Enter layout name",
  //       validate: (value) => {
  //         if (/.+/.test(value)) {
  //           return true;
  //         }
  //         return "The name is required";
  //       },
  //     },
  //   ],
  //   actions: [
  //     {
  //       type: "add",
  //       path: "src/views/layout/{{properCase name}}/{{properCase name}}.tsx",
  //       templateFile: "plop/layout/outlet.tsx.hbs",
  //     },
  //     {
  //       type: "add",
  //       path: "src/views/layout/{{properCase name}}/types.ts",
  //       templateFile: "plop/layout/types.ts.hbs",
  //     },
  //   ],
  // });
}
