<script>
	import { Button } from '$design-system';
</script>

<div class="hero">
	<div class="hero__inner">
		<div class="hero__text">
			<h1><span>Hi, I'm Dylan!</span><br><span>Front-End Engineer</span></h1>
			<p>
				
				I’m passionate about creating high-quality applications and user experiences, with a focus on scalable,
				high-performance code. With a dedication to making a positive impact on people’s lives through every
				project.
			</p>
			<div>
				<Button label="View My Portfolio" icon="arrow" onClick={() => console.log('oi')} />
				<Button label="Contact Me" buttonStyle="tertiary" onClick={() => console.log('oi')} />
			</div>
		</div>
		<figure class="hero__figure">
			<img src="/Self-Portrait.JPG" alt="Dylan Smith">
		</figure>
	</div>
</div>

<style lang="scss">
	@use "$styles/variables.scss";
	
	.hero {
		background: variables.$slate;
		box-shadow: 0 0 0 100vmax variables.$slate;
		clip-path: inset(0 -100vmax);
		min-height: calc(100vh - 71px);
		display: flex;
		align-items: center;
		justify-content: space-between;
		
		
		&__inner {
			padding: 16px;
			display: flex;
			gap: 2rem;
			align-items: center;
		}
		
		&__text {
			h1 {
				font-size: 64px;
				line-height: 54px;
				margin-bottom: 1rem;
			}
			
			span:first-child {
				color: variables.$primary;
			}
			
			span:last-child {
				font-weight: 600;
				font-size: 36px;
			}
			
			p {
				font-size: 20px;
			}
			
			div:last-child {
				margin-top: 24px;
				display: flex;
				gap: 12px;
				align-items: center;
			}
		}
		
		&__figure {
			max-width: 400px;
			box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
			0 2px 2px hsl(0deg 0% 0% / 0.075),
			0 4px 4px hsl(0deg 0% 0% / 0.075),
			0 8px 8px hsl(0deg 0% 0% / 0.075),
			0 16px 16px hsl(0deg 0% 0% / 0.075);
			border-radius: 24px;
			overflow: hidden;
		}
	}
</style>