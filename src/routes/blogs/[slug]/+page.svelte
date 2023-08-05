<script lang="ts">
	import { formatDate } from "$lib/utils";

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} - Oung Seik</title>
	<meta name="description" content={data.meta.description} />
	<meta name="keywords" content={data.meta.keywords?.join(", ")} />
	<meta name="author" content={data.meta.author} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css"
	/>
</svelte:head>

<main class="md:py-18 mx-auto max-w-4xl px-4 py-14 md:px-10">
	{@html data.content}
</main>
