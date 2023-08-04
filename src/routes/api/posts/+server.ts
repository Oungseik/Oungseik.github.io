import type { PostsDB, Post } from "$lib/types";

import { json } from "@sveltejs/kit";
import fs from "fs/promises";
import process from "node:process";
import fm from "front-matter";

const INTERVAL = 1000 * 60 * 60 * 24 * 7; // a week

const postsDB: PostsDB = {
  posts: [],
  lastUpdate: new Date(),
};

async function readFile(path: string) {
  const data = await fs.readFile(path, { encoding: "utf-8" });
  return fm(data);
}

async function setupDB() {
  const cwd = process.cwd();
  const paths = (await fs.readdir(`${cwd}/static/posts`)).map((path) => `${cwd}/static/posts/${path}/index.md`);
  const data = (await Promise.allSettled(paths.map(readFile))) as {
    status: string;
    value: { attributes: Post; body: string };
  }[];
  postsDB.posts = data.map((d) => d.value.attributes);

  return function getPosts() {
    return postsDB.posts
      .filter((post) => post.published)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
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
