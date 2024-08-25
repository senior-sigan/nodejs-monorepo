import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import nodePlugin from "eslint-plugin-n";

export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  pluginJs.configs.recommended,
  nodePlugin.configs["flat/recommended"],
  eslintConfigPrettier,
];