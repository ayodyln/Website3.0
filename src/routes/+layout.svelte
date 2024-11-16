<script lang="ts">
	import '$styles/style.scss';
	import { Header } from '$design-system';
</script>

<!-- Navigation -->
<Header />

<main>
	<slot />
</main>

<!-- Footer -->

<style lang="scss">
	main {
		max-width: 1200px;
		margin: auto;
	}
</style>