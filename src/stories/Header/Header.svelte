<script lang="ts">
	import './header.scss';
	import { Button } from '$design-system';
</script>

<header class="site-header__wrapper">
	<section class="site-header">
		<div class="site-header__left">
			<a href="/" aria-label="home">
				<figure class="site-header__logo">
					<svg width="32" height="46" viewBox="0 0 32 46" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6.44814 43.18C6.31606 43.4225 6.40639 43.7274 6.65255 43.8526C14.9513 48.0706 25.1523 44.9421 29.6339 36.7139C34.1155 28.4857 31.2105 18.2189 23.1655 13.535C22.9268 13.3961 22.6216 13.4856 22.4896 13.7281L6.44814 43.18Z"
						/>
						<path
							d="M25.7992 2.69301C25.9313 2.4505 25.8409 2.14556 25.5948 2.02044C17.2961 -2.19757 7.09505 0.930877 2.61344 9.15907C-1.86817 17.3873 1.03687 27.6541 9.08185 32.338C9.3205 32.4769 9.62567 32.3874 9.75776 32.1449L25.7992 2.69301Z"
						/>
					</svg>
				</figure>
			</a>
			
			<nav class="site-header__navigation">
				<ul>
					<li>
						<a href="/portfolio">Portfolio</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
				</ul>
			</nav>
		</div>
		
		<ul class="site-header__right">
			<li>
				<a href="https://github.com/ayodyln" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
						<!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
						<path
							d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
					</svg>
				</a>
			</li>
			<li>
				<Button label="Resume" icon="download" onClick={() => console.log('click')} />
			</li>
		</ul>
	</section>
</header>

