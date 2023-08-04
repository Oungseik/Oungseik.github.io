export type Categories = "sveltekit" | "svelte";

export type Post = {
  title: string;
  slug: string;
  description: string;
  mainImage: string,
  images?: string[],
  date: string;
  categories: Categories[];
  published: boolean;
};

export interface PostsDB {
  posts: Post[];
  lastUpdate: Date;
}
