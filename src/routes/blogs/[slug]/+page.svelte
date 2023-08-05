<script lang="ts">
	import { formatDate } from "$lib/utils";

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} - Oung Seik</title>
	<meta name="description" content={data.meta.description} />
	<meta name="keywords" content={data.meta.keywords?.join(", ")} />
	<meta name="author" content={data.meta.author} />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css"
	/>

	<meta property="og:title" content={data.meta.title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://oungseik-github-io.vercel.app/blogs/{data.meta.slug}" />
	<meta
		property="og:image"
		content="https://oungseik-github-io.vercel.app/images/posts/{data.meta.mainImage}"
	/>
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:description" content={data.meta.description} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:site"
		content="https://oungseik-github-io.vercel.app/blogs/{data.meta.slug}"
	/>
	<meta name="twitter:creator" content={data.meta.author} />
	<meta
		name="twitter:image"
		content="https://oungseik-github-io.vercel.app/images/posts/{data.meta.mainImage}"
	/>
</svelte:head>

<main class="md:py-18 mx-auto max-w-4xl px-4 py-14 md:px-10">
	<div
		class="h-60 bg-cover bg-center bg-no-repeat md:h-72 md:bg-contain"
		style="background-image: url(/images/posts/{data.meta.mainImage});"
	/>

	<h1 class="mt-2">{data.meta.title}</h1>
	<ul class="mb-4 flex gap-4 text-slate-700 md:mb-8">
		<li>{formatDate(data.meta.date)}</li>
		{#if data.meta.author}
			<li>{data.meta.author}</li>
		{/if}
		<li>{data.meta.estimateRead}</li>
	</ul>
	{@html data.content}
</main>
