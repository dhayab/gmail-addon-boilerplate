import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const cleanGasOutput = () => {
	const REGEXES = [
		/'use strict';/gm,
		/export \{.*;/gm,
	];

	return {
		name: 'cleanGasOutput',
		transformBundle(code) {
			return REGEXES.reduce((code, regex) => {
				return code.replace(regex, '');
			}, code);
		},
	};
};

export default {
	input: './src/index.ts',
	output: [
		{ file: 'build/addon.js', format: 'es' },
	],
	treeshake: false,
	plugins: [
		typescript(),
		resolve(),
		commonjs(),
		cleanGasOutput(),
		copy({
			'src/appsscript.json': 'build/appsscript.js'
		})
	],
};
