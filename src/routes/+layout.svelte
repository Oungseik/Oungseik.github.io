<script lang="ts">
	import "../app.css";

	import { onMount } from "svelte";
	import { isPageTop } from "$lib/store/pageTopStore";
	let activeSection = "";

	const navs = [
		{ url: "/#about", name: "about" },
		{ url: "/#experiences", name: "experiences" },
		{ url: "/#projects", name: "projects" },
		{ url: "/#skills", name: "skills" },
		{ url: "/blogs", name: "blogs" },
	];

	onMount(() => {
		window.addEventListener("scroll", () => {
			$isPageTop = window.scrollY < 500;

			const sections = document.querySelectorAll("h2[id]") as NodeListOf<HTMLElement>;
			sections.forEach((section) => {
				const sectionHeight = section.offsetHeight;
				const sectionTop = section.offsetTop - 84;

				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					activeSection = section.id;
				}
			});
		});
	});
</script>

<nav
	class="sticky top-0 z-50 flex items-center justify-between bg-slate-700 px-4 py-2 text-slate-100 shadow-md shadow-gray-400 md:items-baseline md:px-6 lg:px-10"
>
	<h1
		class="bg-gradient-to-r from-green-300 to-sky-300 bg-clip-text text-xl font-bold text-transparent md:text-2xl"
	>
		<a href="/">OungSeik</a>
	</h1>

	<div class="flex flex-row-reverse items-baseline md:flex-row md:items-center">
		<button
			class="group relative ml-auto block rounded-md p-1 transition-colors duration-300 hover:bg-slate-600 md:static md:flex md:items-end md:hover:bg-inherit"
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
								class={`block px-6 py-2 font-medium capitalize transition-colors hover:bg-slate-200 hover:text-sky-600 md:px-4 md:text-lg md:hover:bg-inherit md:hover:text-sky-400 ${
									activeSection === nav.name && "text-sky-300"
								}`}
								href={nav.url}>{nav.name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</button>

		<div class="md:py-1">
			<a
				class="block flex gap-2 px-4 py-2 transition-colors duration-300 hover:text-sky-600 md:rounded md:border-2 md:py-1 md:text-lg md:hover:border-sky-300 md:hover:text-sky-300"
				href="mailto:mhemaungthuwin@gmail.com"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
					/></svg
				>
				Email me</a
			>
		</div>
	</div>
</nav>

<slot />
