import configs from "@acme/eslint-config"

/** @type { import("eslint").Linter.Config[] } */
export default [
  ...configs['module'].map(config => ({
    ...config,
    files: [
      "packages/example-new/**/*.js",
      "apps/apiv2/**/*.js"
    ]
  })),

  ...configs['commonjs'].map(config => ({
    ...config,
    files: [
      "packages/example-old/**/*.js",
      "apps/api/**/*.js"
    ]
  })),
  
  {
    ignores: ["**/dist/**"]
  }
];