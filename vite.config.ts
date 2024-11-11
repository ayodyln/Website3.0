import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import sass from "sass";

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],

	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
				silenceDeprecations: ['legacy-js-api']
			}
		}
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
