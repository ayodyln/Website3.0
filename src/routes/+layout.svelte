<script lang="ts">
	import '$styles/style.scss';
	import { Header, Footer } from '$design-system';
</script>

<!-- Navigation -->
<Header />

<main>
	<slot />
</main>

<!-- Footer -->
<Footer />

<style lang="scss">
    main {
        max-width: 1280px;
        margin: auto;
    }
</style>