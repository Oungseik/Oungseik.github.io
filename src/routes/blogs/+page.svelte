<script lang="ts">
	import type { PageServerData } from "./$types";
	import { formatDate } from "$lib/utils";
	import { pageInfo } from "$lib/store/pageInfoStore";

	$pageInfo.activeSection = "blogs";

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

{#if data.latestPosts?.length}
	<section class="md:py-18 mx-auto max-w-4xl px-4 py-14 md:px-10">
		<h2 class="relative mb-6 py-1 pl-3 text-2xl font-medium text-slate-800 md:pl-4">
			<span class="absolute left-0 top-0 h-full w-1 bg-blue-800" />
			Latest Posts
		</h2>

		<ul class="grid auto-rows-fr gap-4 sm:grid-cols-2 md:gap-8">
			{#each data.latestPosts as post}
				<li>
					<a
						href="/blogs/{post.slug}"
						class="relative flex h-full overflow-hidden rounded-md bg-slate-200 shadow-md transition duration-300 hover:shadow-none sm:flex-col"
					>
						<img class="absolute h-full w-full" src="/images/posts/{post.mainImage}" alt="" />
						<div class="absolute h-full w-full bg-gray-900/75" />

						<div class="relative z-30 px-4 py-6 text-white">
							<h3 class="mt-0 text-lg">{post.title}</h3>
							<p class="mb-4 text-sm md:mb-6">
								<span class="inline-flex items-center gap-1">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
										><path
											fill="currentColor"
											d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
										/></svg
									>
									{formatDate(post.date)}
								</span>
								<span class="inline-flex items-center gap-1 pl-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
										><path
											fill="currentColor"
											d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"
										/></svg
									>
									{post.estimateRead}
								</span>
							</p>
							<p class="line-clamp-3">
								{post.description}
							</p>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</section>
{/if}

<!-- <section> -->
<!-- 	<h2>Featured Posts</h2> -->
<!-- 	{#each data.posts as post} -->
<!-- 		<div>{post.title} - {post.date}</div> -->
<!-- 	{/each} -->
<!-- </section> -->
