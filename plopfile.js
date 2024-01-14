export default function (plop) {
  plop.setGenerator("System Component", {
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
        path: "src/views/components/system/{{properCase name}}/index.ts",
        templateFile: "plop/components/system/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/views/components/system/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "plop/components/system/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/views/components/system/{{properCase name}}/{{properCase name}}.stories.tsx",
        templateFile: "plop/components/system/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/views/components/system/{{properCase name}}/controller.ts",
        templateFile: "plop/components/system/controller.ts.hbs",
      },
      {
        type: "add",
        path: "src/views/components/system/{{properCase name}}/types.ts",
        templateFile: "plop/components/system/types.ts.hbs",
      },
    ],
  });

  plop.setGenerator("Draggable Component", {
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
        path: "src/views/components/draggable/{{properCase name}}/index.ts",
        templateFile: "plop/components/draggable/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/views/components/draggable/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "plop/components/draggable/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/views/components/draggable/{{properCase name}}/{{properCase name}}.stories.tsx",
        templateFile: "plop/components/draggable/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/views/components/draggable/{{properCase name}}/controller.ts",
        templateFile: "plop/components/draggable/controller.ts.hbs",
      },
      {
        type: "add",
        path: "src/views/components/draggable/{{properCase name}}/types.ts",
        templateFile: "plop/components/draggable/types.ts.hbs",
      },
    ],
  });

  plop.setGenerator("Add Icon", {
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

  plop.setGenerator("Create Page", {
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
}
