const { defineConfig } = require('rollup');
const packageJson = require('./package.json');

module.exports = defineConfig({
	input: "src/index.js",
	output: [{
		file: packageJson.main,
		format: "cjs",
    sourcemap: true,
	}, {
		file: packageJson.module,
		format: "esm",
    sourcemap: true,
	}],
  external: [
		"date-fns",
		"date-fns/locale",
	]
});