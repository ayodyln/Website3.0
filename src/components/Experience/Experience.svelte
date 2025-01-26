<script lang="ts">
	const experience = Object.freeze([
		{
			title: 'Front End Engineer',
			href: 'https://www.award.co/',
			company: 'Awardco',
			duration: { start: '2024-07-08T06:00:00.000Z', end: '' },
			description: '',
			tech: []
		}
	]);
	
	function localizeDateTime(date: string | Date): string {
		return Intl.DateTimeFormat(navigator.language, {
			day: '2-digit',
			month: '2-digit',
			year: '2-digit'
		}).format(new Date(date));
	}
</script>

<div class="experience">
	<hgroup>
		<h2>Experience</h2>
	</hgroup>
	<ul>
		{#each experience as e}
			<li>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.experience {
		min-height: 400px;
		padding: 16px;
		
		ul {
			list-style: none;
			padding: 0;
		}
	}
</style>