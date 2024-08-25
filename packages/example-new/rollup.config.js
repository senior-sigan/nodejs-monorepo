import { defineConfig } from 'rollup';

export default defineConfig({
	input: 'src/index.js',
	output: {
		file: './dist/bundle.cjs',
		format: 'cjs'
	},
  external: ['dayjs', 'dayjs/locale/ru']
});