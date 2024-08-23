<script lang="ts">
	import '$styles/style.scss'; // global styles
	import { Header } from '$components/layout';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	console.log(data);
</script>

<Header />

<slot />
