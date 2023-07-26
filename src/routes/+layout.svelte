<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	const navs = [
		{ url: '/#timeline', name: 'Timelines' },
		{ url: '/#projects', name: 'Projects' },
		{ url: '/#skills', name: 'Skills' },
		{ url: '/#about', name: 'About' },
		{ url: '/blogs', name: 'Blogs' }
	];
</script>

<nav
	class="sticky top-0 flex items-center justify-between bg-slate-800 p-4 text-slate-100 shadow-md shadow-gray-400 md:items-baseline md:px-6 lg:px-10"
>
	<h1 class="font-mono text-xl font-bold md:text-2xl"><a href="/">OungSeik</a></h1>
	<button
		class="group relative rounded-md p-1 transition-colors duration-300 hover:bg-slate-700 md:static md:flex md:items-end md:hover:bg-inherit"
	>
		<span class="md:hidden"
			><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
				/></svg
			></span
		>
		<div
			class="absolute right-0 top-10 z-40 hidden w-48 divide-y-2 overflow-hidden rounded-md bg-slate-100 text-left font-medium text-slate-800 shadow-lg shadow-gray-400 group-focus-within:block md:static md:flex md:w-auto md:gap-6 md:divide-y-0 md:rounded-none md:bg-inherit md:text-inherit md:shadow-none md:group-focus-within:flex"
		>
			<ul class="md:flex">
				{#each navs as nav (nav.url)}
					<li>
						<a
							class={`block px-6 py-2 font-medium transition-colors duration-300 hover:bg-slate-200 hover:text-sky-600 md:px-4 md:text-lg md:hover:bg-inherit md:hover:text-sky-400 ${
								$page.url.pathname + $page.url.hash === nav.url &&
								'bg-slate-200 text-sky-600 md:bg-inherit md:text-sky-300'
							}`}
							href={nav.url}
							aria-current={`${$page.url.pathname}${$page.url.hash}` === nav.url}>{nav.name}</a
						>
					</li>
				{/each}
			</ul>
			<div class="md:py-1">
				<a
					class="block px-6 py-2 transition-colors duration-300 hover:text-sky-600 md:rounded md:border-2 md:py-1 md:text-lg md:hover:border-sky-300 md:hover:text-sky-300"
					href="/#contact">Contact</a
				>
			</div>
		</div>
	</button>
</nav>

<slot />
