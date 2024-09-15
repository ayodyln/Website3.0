import type { Meta, StoryObj } from '@storybook/svelte';
import Anchor from './Anchor.svelte';

const meta = {
	title: 'UI/Anchor',
	component: Anchor,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

const Primary: Story = {
	args: {
		label: 'Google',
		href: 'www.google.com',
		target: '_blank'
	}
};

export { Primary };
