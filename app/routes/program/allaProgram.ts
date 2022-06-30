import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";

export type PostMarkdownAttributes = {
  title: string;
  date: Date;
};

export function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title && attributes?.date;
}

// relative to the server output not the source!
export const programPath = path.join(__dirname, "../../", "program");
console.log("programPath => ", programPath);
export async function getAllaProgram() {
  const dir = await fs.readdir(programPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(programPath, filename));
      const { attributes } = parseFrontMatter(file.toString());
      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      );

      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        date: attributes.date,
      };
    })
  );
}

export type Post = {
  slug: string;
  title: string;
  markdown: string;
  date: Date;
};
