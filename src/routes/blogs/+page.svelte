<script lang="ts">
	import type { PageServerData } from "./$types";
	export let data: PageServerData;
</script>

{#each data.posts.reverse() as post}
	<div>{post.title} - {post.date}</div>
{/each}
