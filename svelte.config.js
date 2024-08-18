import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$styles: './src/scss',
			'$components/layout': './src/components/layout.ts'
		}
	},
	preprocess: vitePreprocess()
};
export default config;
