import type { Meta, StoryObj } from '@storybook/svelte';
import ThemePicker from './ThemePicker.svelte';

const meta = {
	title: 'Example/ThemePicker',
	component: ThemePicker,
	tags: ['autodocs'],
	argTypes: {
		value: { control: 'text' }
	}
} satisfies Meta<ThemePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		value: 'System'
	}
};
