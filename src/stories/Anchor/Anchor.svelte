<script lang="ts">
	import './anchor.scss';

	/**
	 * The label to be displayed in the anchor element.
	 */
	export let label: string;

	/**
	 * The url for the HREF attribute.
	 */
	export let href: string = '#';

	/**
	 * Target type
	 */
	export let target: string = '';
</script>

<a
	{href}
	{target}
	class={["sb-anchor"].join(' ')}
>
	{label}
</a>