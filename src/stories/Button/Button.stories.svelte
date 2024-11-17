<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
	import { fn } from '@storybook/test';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Example/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: { type: 'select' },
				options: ['small', 'medium', 'large']
			}
		},
		args: {
			onClick: fn()
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary (Large)" args={{ label: 'Button', size: 'large' }} />

<Story name="Secondary (Small)" args={{ label: 'Button', size: 'small', style: 'secondary' }} />

<Story name="Tertiary (medium)" args={{ label: 'Button', size: 'medium', style: 'tertiary' }} />
