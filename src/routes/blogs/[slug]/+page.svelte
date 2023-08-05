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

	<h1 class="mt-8">{data.meta.title}</h1>
	<ul class="mb-6 mt-2 flex gap-4 text-slate-700 md:mb-10">
		<!-- {#if data.meta.author} -->
		<!-- 	<li class="flex gap-1"> -->
		<!-- 		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" -->
		<!-- 			><path -->
		<!-- 				fill="currentColor" -->
		<!-- 				d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Zm2-2h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2v.8Zm6-8q.825 0 1.413-.588T14 8q0-.825-.588-1.413T12 6q-.825 0-1.413.588T10 8q0 .825.588 1.413T12 10Zm0-2Zm0 10Z" -->
		<!-- 			/></svg -->
		<!-- 		> -->
		<!-- 		{data.meta.author} -->
		<!-- 	</li> -->
		<!-- {/if} -->
		<li class="flex gap-1">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9H3Zm0 0V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5"
				/></svg
			>
			{formatDate(data.meta.date)}
		</li>
		<li class="hidden gap-1 sm:flex">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"
				/></svg
			>
			{data.meta.estimateRead}
		</li>
	</ul>
	{@html data.content}
</main>
