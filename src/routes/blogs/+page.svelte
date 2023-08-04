<script lang="ts">
	import type { PageServerData } from "./$types";
	import { formatDate } from "$lib/utils";

	export let data: PageServerData;
</script>

<main class="text-slate-100">
	<div class="relative bg-[url('/images/app-development.jpg')] bg-cover bg-center bg-no-repeat">
		<div class="absolute left-0 top-0 h-full w-full bg-gray-900/60" />
		<h1 class="relative z-10 py-32 text-center text-2xl font-medium md:py-64 md:text-4xl">
			Welcome from my Blog
		</h1>
	</div>
</main>

<section class="md:py-18 mx-auto max-w-4xl px-4 py-14 md:px-10">
	<h2 class="relative mb-6 py-1 pl-3 text-2xl font-medium text-slate-800 md:pl-4">
		<span class="absolute left-0 top-0 h-full w-1 bg-blue-800" />
		Latest Posts
	</h2>

	<ul class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
		{#each data.latestPosts as post}
			<li>
				<a
					href="/blogs/{post.slug}"
					class="flex overflow-hidden rounded-md bg-slate-200 shadow-md transition duration-300 hover:shadow-none sm:flex-col"
				>
					<div class="w-1/2 sm:w-auto">
						<img src="/blog-posts/{post.slug}/{post.mainImage}" alt="" />
					</div>
					<div class="w-1/2 px-4 py-2 sm:w-auto">
						<h3>{post.title}</h3>
						<p>{post.description}</p>
						<p>{formatDate(post.date)}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

<!-- <section> -->
<!-- 	<h2>Featured Posts</h2> -->
<!-- 	{#each data.posts as post} -->
<!-- 		<div>{post.title} - {post.date}</div> -->
<!-- 	{/each} -->
<!-- </section> -->
