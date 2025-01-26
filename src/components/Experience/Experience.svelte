<script lang="ts">
	const experience = Object.freeze([
		{
			title: 'Software Engineer, Front-End',
			href: 'https://www.award.co/',
			company: 'Awardco',
			duration: { start: '2024-07-08T06:00:00.000Z', end: '' },
			description: `
				Built and implemented new features for a leading employee recognition platform,
				ensuring self-documenting, scalable code. Collaborated with UX designers, backend engineers,
				and project managers to solve key challenges.
			`,
			projects: [],
			tech: ['Javascript', 'VueJs', 'CSS', 'Storybook']
		}
	]);
	
	function localizeDateTime(date: string | Date): string {
		return Intl.DateTimeFormat(navigator.language, {
			year: 'numeric'
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
				<div class="experience__card">
					<hgroup>
						<h3>
							<a href={e.href} target="_blank">
								{e.title} - {e.company}
								<span class="external-link">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
										<path
											d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
									</svg>
								</span>
							</a>
						</h3>
						<p>
							{localizeDateTime(e.duration.start)}
							<span>-</span>
							{#if e.duration.end }
								{localizeDateTime(e.duration.end)}
							{:else}
								Current
							{/if}
						</p>
					</hgroup>
					<section>
						<p>{e.description}</p>
						{#if e.tech.length}
							<div class="experience__card-technology">
								{#each e.tech as tech }
									<span class="experience__card-chip">{tech}</span>
								{/each}
							</div>
						{/if}
					</section>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@use "$styles/variables.scss";
	
	.experience {
		min-height: 400px;
		padding: 16px;
		
		> hgroup {
			margin-bottom: 16px;
		}
		
		ul {
			list-style: none;
			padding: 0;
		}
		
		&__card {
			max-width: 500px;
			background: variables.$slate;
			border-radius: 8px;
			padding: 12px;
			box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
			0 2px 2px hsl(0deg 0% 0% / 0.075),
			0 4px 4px hsl(0deg 0% 0% / 0.075),
			0 8px 8px hsl(0deg 0% 0% / 0.075),
			0 16px 16px hsl(0deg 0% 0% / 0.075);
			
			> hgroup {
				margin-bottom: 12px;
				
				a {
					position: relative;
					font-weight: bold;
					text-decoration: none;
					color: variables.$primary;
					fill: variables.$primary;
					transition: color 0.3s ease-in-out, fill 0.3s ease-in-out;
					text-wrap: nowrap;
					display: flex;
					align-items: center;
					gap: 12px;
					
					&:hover {
						color: variables.$primary-hover;
						fill: variables.$primary-hover;
					}
				}
				
				p {
					font-size: 14px;
				}
			}
			
			> section {
				display: flex;
				flex-direction: column;
				gap: 12px;
			}
			
			&-technology {
				display: inline-flex;
				gap: 8px;
			}
			
			&-chip {
				background-color: rgba(44, 218, 157, 0.1);
				padding-block: 4px;
				padding-inline: 12px;
				border-radius: 8px;
				font-size: 12px;
				color: #5bf3b1;
			}
		}
	}
	
	.external-link {
		max-width: 16px;
		width: 100%;
	}
</style>