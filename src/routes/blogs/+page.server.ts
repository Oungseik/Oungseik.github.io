import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch }) => {
	const res = await fetch("/api/posts");
	const posts = await res.json();
	return { posts };
}) satisfies PageServerLoad;
