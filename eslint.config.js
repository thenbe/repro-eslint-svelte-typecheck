import js from '@eslint/js';
import svelteParser from 'svelte-eslint-parser';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},

	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: ts.parser,
				projectService: true,
				// tsconfigRootDir: import.meta.dirname
			}
		}
	},

	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	},

	{
		files: ['**/*.svelte'],
		rules: {
			'@typescript-eslint/no-unsafe-member-access': 'error',
			'@typescript-eslint/no-unsafe-call': 'error',
			'@typescript-eslint/no-unsafe-assignment': 'error'
		}
	}
];
