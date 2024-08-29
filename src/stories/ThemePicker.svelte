<script lang="ts">
	// Styles
	import './ThemePicker.scss';
	import '../scss/_global.scss';

	/**
	 * Theme Value
	 */
	export let value: string;
</script>

<label for="themepicker" class="sr-only">Theme:</label>
<select data-theme-picker name="themepicker" id="themepicker" bind:value>
	<option value="system">System</option>
	<option value="light">Light</option>
	<option value="dark">Dark</option>
</select>
