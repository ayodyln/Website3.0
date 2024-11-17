<script lang="ts">
	import './button.scss';

	type Props = {
		style: 'primary' | 'secondary' | 'tertiary';
		size: 'small' | 'medium' | 'large';
		label: string;
		onClick: () => void;
	};

	const { style = 'primary', size = 'medium', label, onClick }: Props = $props();
</script>

<button
	type="button"
	class={['button', `button__${size}`, `button__${style}`].join(' ')}
	onclick={onClick}
>
	{label}
</button>