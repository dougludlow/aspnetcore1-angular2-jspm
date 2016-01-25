System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "tsconfig": true,
    "module": "system"
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "app": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    }
  },

  map: {
    "ts": "github:frankwallis/plugin-typescript@2.5.2",
    "typescript": "npm:typescript@1.7.5",
    "github:frankwallis/plugin-typescript@2.5.2": {
      "typescript": "npm:typescript@1.7.5"
    }
  }
});
