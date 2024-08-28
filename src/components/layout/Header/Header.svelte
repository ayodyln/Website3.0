<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { theme } from '$stores/theme';

	let themeReady: boolean;

	if (browser) onMount(() => (themeReady = true));
</script>

<header id="SiteHeader" class="header">
	<nav class="header__navigation">
		<div class="header__navigation-home">
			<a href="/" class="header__navigation-anchor">
				<svg width="26" height="40" viewBox="0 0 32 46" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M6.44814 43.18C6.31606 43.4225 6.40639 43.7274 6.65255 43.8526C14.9513 48.0706 25.1523 44.9421 29.6339 36.7139C34.1155 28.4857 31.2105 18.2189 23.1655 13.535C22.9268 13.3961 22.6216 13.4856 22.4896 13.7281L6.44814 43.18Z"
					/>
					<path
						d="M25.7992 2.69301C25.9313 2.4505 25.8409 2.14556 25.5948 2.02044C17.2961 -2.19757 7.09505 0.930877 2.61344 9.15907C-1.86817 17.3873 1.03687 27.6541 9.08185 32.338C9.3205 32.4769 9.62567 32.3874 9.75776 32.1449L25.7992 2.69301Z"
					/>
				</svg>
			</a>
		</div>

		<ul class="header__navigation-list">
			<li>
				<a href="/Work">Work</a>
			</li>
			<li>
				<a href="/Blog">Blog</a>
			</li>
			<li>
				<a href="About">About</a>
			</li>
			<li class="header__navigation-list__theme-control">
				{#if themeReady}
					<label for="themepicker" class="sr-only">Theme:</label>
					<select data-theme-picker name="themepicker" id="themepicker" bind:value={$theme}>
						<option value="system">System</option>
						<option value="light">Light</option>
						<option value="dark">Dark</option>
					</select>
				{/if}
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@import '$styles/_variables.scss';

	.header {
		background-color: $primary;
		padding: 1rem;
		&__navigation {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__navigation-home {
		}

		&__navigation-list {
			display: flex;
			gap: 1rem;
			list-style: none;

			li a {
				text-decoration: none;
				color: var(--text);
				font-weight: 700;
			}

			&__theme-control {
				min-width: 76px;
			}
		}
	}
</style>
