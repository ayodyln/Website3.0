<script>
	import { Button } from '$design-system';
</script>

<div class="hero">
	<div class="hero__inner">
		<div class="hero__text">
			<h1><span>Hi, I'm Dylan!</span><br><span>Front-End Engineer & UI/UX Designer</span></h1>
			<p>
				I'm passionate about engineering the highest quality websites and applications, with the user's
				experience put first. Having experience in creating clean, scalable, and performant code I
				specialize
				in making experiences that improve people's lives.
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
        min-height: calc(100vh - 78px);
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

            img {
                clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
            }

        }
    }
</style>