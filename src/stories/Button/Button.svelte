<script lang="ts">
	import './button.scss';

	type Props = {
		buttonStyle?: 'primary' | 'secondary' | 'tertiary';
		size?: 'small' | 'medium' | 'large';
		label: string;
		icon?: string;
		onClick: () => void;
	};

	const { buttonStyle = 'primary', size = 'medium', label, icon, onClick }: Props = $props();
</script>

<button
	type="button"
	class={['button', `button__${size}`, `button__${buttonStyle}`].join(' ')}
	onclick={onClick}
>
	<span>{label}</span>

	{#if icon === 'arrow'}
		<svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 448 512">
			<!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
			<path
				d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
		</svg>
	{:else if icon === 'download'}
		<svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 512 512">
			<!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
			<path
				d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
		</svg>
	{/if}
</button>