import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";
import {
  isValidPostAttributes,
  Program,
  programPath,
} from "~/models/program.server";

export async function createPost(post: Program) {
  const md = `---\ntitle: ${post.title}\n---\n\n${post.markdown}`;
  await fs.writeFile(path.join(programPath, post.slug + ".md"), md);
  return getProgram(post.slug);
}

export async function getProgram(slug: string) {
  const filepath = path.join(programPath, slug + ".md");
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  );
  return { slug, title: attributes.title, html: marked(body) };
}
