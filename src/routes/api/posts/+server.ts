import type { PostsDB, Post } from "$lib/types";

import { json } from "@sveltejs/kit";
import fs from "fs/promises";
import process from "node:process";
import path from "node:path";
import fm from "front-matter";

// const INTERVAL = 1000 * 60 * 60 * 24 * 7; // a week
const INTERVAL = 0; // a week

const postsDB: PostsDB = {
  posts: [],
  lastUpdate: new Date(),
};

async function readFile({ slug, path }: { slug: string, path: string }) {
  const data = await fs.readFile(path, { encoding: "utf-8" });
  const result: any = fm(data);
  result.attributes.slug = slug;
  return result;
}

async function setupDB() {
  const cwd = process.cwd();
  const paths = (await fs.readdir(path.join(cwd, "static", "blog-posts"))).map((slug) => ({ path: path.join(cwd, "static", "blog-posts", slug, "index.md"), slug: slug }));
  const data = (await Promise.allSettled(paths.map(readFile))) as {
    status: string;
    value: { attributes: Post; body: string };
  }[];
  postsDB.posts = data.map((d) => d.value.attributes);

  return function getPosts() {
    return postsDB.posts
      .filter((post) => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };
}

const getPosts = await setupDB();

export async function GET() {
  if (new Date().getTime() - new Date(postsDB.lastUpdate).getTime() > INTERVAL) {
    const posts = (await setupDB())();
    return json(posts);
  }
  return json(getPosts());
}
