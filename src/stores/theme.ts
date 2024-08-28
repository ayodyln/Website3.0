import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultTheme = 'system';
const initialValue = browser ? (localStorage.getItem('theme') ?? defaultTheme) : defaultTheme;

export const theme = writable<string>(initialValue);

if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	});
}

export default theme;
