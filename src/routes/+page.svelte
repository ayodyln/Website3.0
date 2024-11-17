<section>
	<div class="hero__wrapper">
		<div class="hero__inner">
			<h1>Welcome to SvelteKit</h1>
			<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
		</div>
	</div>
</section>

<style lang="scss">
    @use "$styles/variables.scss";

    .hero {
        &__wrapper {
            min-height: 80vh;
            padding: 16px;
            background: variables.$slate;
            box-shadow: 0 0 0 100vmax variables.$slate;
            clip-path: inset(0 -100vmax);
        }
    }
</style>