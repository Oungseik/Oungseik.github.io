import type { Post } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch }) => {
	const res = await fetch("/api/posts");
	const posts: Post[] = await res.json();
	return { latestPosts: posts.slice(0, 4) };
}) satisfies PageServerLoad;
