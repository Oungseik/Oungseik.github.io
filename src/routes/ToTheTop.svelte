<script lang="ts">
	import { onMount } from "svelte";

	let gotoPageTop: () => void;
	let isPageTop = true;

	onMount(() => {
		gotoPageTop = function () {
			window.scrollTo(0, 0);
		};
		window.addEventListener("scroll", () => {
			isPageTop = window.scrollY < 500;
		});
	});
</script>

<div
	class="sticky bottom-4 mb-4 ml-auto mr-2 w-fit rounded-lg bg-sky-700 text-white transition duration-300 hover:bg-sky-600 md:mr-20 {isPageTop &&
		'opacity-0 -z-50'}"
>
	<button on:click={gotoPageTop} class="px-2 pt-2">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"
			/>
		</svg>
	</button>
</div>
