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

<svelte:head>
	<title>Oung Seik Nyan</title>
</svelte:head>

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

<footer class="bg-sky-700 px-4 pb-4 pt-10 text-slate-100 md:px-10 md:pt-20">
	<div class="mx-auto max-w-3xl">
		<div class=" grid gap-y-8 md:grid-cols-3 md:grid-rows-2">
			<div class="md:row-start-1 md:row-end-3">
				<h2 class="text-xl font-bold">Aung Thu Win</h2>
				<p>Full-stack Developer</p>
			</div>
			<ul class="text-medium md:col-start-3 md:col-end-4">
				<li>
					<a
						href="/#about"
						class="underline-offset-4 transition-colors duration-300 hover:text-slate-300"
						>About Me</a
					>
				</li>
				<li>
					<a
						href="/#experiences"
						class="underline-offset-4 transition-colors duration-300 hover:text-slate-300"
						>Education &amp; Experience</a
					>
				</li>
				<li>
					<a
						href="/#projects"
						class="underline-offset-4 transition-colors duration-300 hover:text-slate-300"
						>Projects &amp; Portfolio</a
					>
				</li>
				<li>
					<a
						href="/#skills"
						class="underline-offset-4 transition-colors duration-300 hover:text-slate-300">Skills</a
					>
				</li>
			</ul>

			<ul class="flex gap-1 md:col-start-3 md:col-end-4">
				<li>
					<a
						href="https://github.com/oungseik"
						target="_blank"
						class="underline-offset-4 transition-colors duration-300 hover:text-slate-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							viewBox="0 0 24 24"
							class="md:h-12 md:w-12"
							><path
								fill="currentColor"
								d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
							/></svg
						></a
					>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/aung-thu-win/"
						target="_blank"
						class="underline-offset-4 transition-colors duration-300 hover:text-slate-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							viewBox="0 0 24 24"
							class="md:h-12 md:w-12"
							><path
								fill="currentColor"
								d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
							/></svg
						>
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/oung.s.nyan.50552338?mibextid=ZbWKwL"
						target="_blank"
						class="underline-offset-4 transition-colors duration-300 hover:text-slate-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							viewBox="0 0 24 24"
							class="md:h-12 md:w-12"
							><path
								fill="currentColor"
								d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
							/></svg
						>
					</a>
				</li>
			</ul>
		</div>
		<p class="mt-6 text-center text-slate-300 md:mt-12">Power by SvelteKit</p>
	</div>
</footer>
