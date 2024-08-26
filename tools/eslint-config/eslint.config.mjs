import pluginJs from "@eslint/js";
import nodePlugin from "eslint-plugin-n";
import stylistic from '@stylistic/eslint-plugin'

/** @type { import("eslint").Linter.Config[] } */
const moduleConfigs = [
  { languageOptions: {sourceType: "module"} },
  nodePlugin.configs["flat/recommended-module"],
  pluginJs.configs.recommended,
  stylistic.configs.customize({
    semi: true,
  })
];

/** @type { import("eslint").Linter.Config[] } */
const commonJsConfigs = [
  { languageOptions: {sourceType: "commonjs"} },
  nodePlugin.configs["flat/recommended-script"],
  pluginJs.configs.recommended,
  stylistic.configs.customize({
    semi: true,
  })
]

/** @type { import("eslint").Linter.Config[] } */
const tsConfigs = [
  nodePlugin.configs["flat/recommended-script"],
  stylistic.configs.customize({
    semi: true,
  })
]

export default {
  commonjs: commonJsConfigs,
  module: moduleConfigs,
  ts: tsConfigs,
}