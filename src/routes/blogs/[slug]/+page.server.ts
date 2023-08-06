import type { PageServerLoad } from "../$types";
import type { Post } from "$lib/types";

import { error } from "@sveltejs/kit";
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import fm from "front-matter";
import fs from "fs/promises";
import process from "process";

marked.use(markedHighlight({
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext"
    return hljs.highlight(code, { language }).value;
  }
}))

export const load = (async ({ params }) => {
  const { slug } = params as { slug: string };
  try {
    const data = await fs.readFile(`${process.cwd()}/static/posts/${slug}.md`, { encoding: "utf-8" });
    const { attributes, body }: { attributes: Post; body: string } = fm(data);
    return { meta: attributes, content: marked.parse(body, { mangle: false, headerIds: false }) };
  } catch (err) {
    throw error(404, `Could not find ${slug}`);
  }
}) satisfies PageServerLoad;

