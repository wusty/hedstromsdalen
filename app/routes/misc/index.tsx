import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

// ------- Lägg till alla nya poster här:
import * as post1 from "./att-inventera.mdx";
import * as post2 from "./byggnader-som-inte-ens-kan-bli-ruiner.mdx";
import * as post3 from "./of-other-spaces.mdx";
import * as post4 from "./ett-huvud-pa-ett-silverfat.mdx";
import * as post5 from "./karlstroms-i-oxbron.mdx";
import * as post6 from "./narmsta-nyckelbiotop.mdx";

import { marked } from "marked";
import parseFrontMatter from "front-matter";

// -------- Och här:
const allPosts = [
  getPostData(post1),
  getPostData(post2),
  getPostData(post3),
  getPostData(post4),
  getPostData(post5),
  getPostData(post6),
  // getPostData(post4),
];

export type Program = {
  slug: string;
  title: string;
  markdown: string;
  date: Date;
  default: React.ReactNode;
  preview?: string;
};

function getPostData(importedPost: any): Program {
  return {
    slug: importedPost.filename.replace(/\.mdx$/, ""),
    title: importedPost.attributes.title,
    date: importedPost.attributes.date,
    default: importedPost.default(),
    markdown: importedPost,
    preview: importedPost.attributes.preview,
    // test: parseFrontMatter(importedPost.toString()),
  };
}

export const loader: LoaderFunction = async ({ params }) => {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.

  return json(allPosts);
};

export default function Index() {
  const posts: Program[] = useLoaderData();

  console.log("posts => ", posts);
  // Sort posts by latest date
  const sortedPosts = posts.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  });
  console.log(posts);
  return (
    <div className="container mx-auto">
      {/* <h1>Program</h1> */}
      <ul className="flex grid-cols-3 flex-col gap-4">
        {sortedPosts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>
              <span className="font-semibold">{post.title}</span>
            </Link>
            {post.preview && (
              <p className="max-w-lg italic text-gray-600">
                {post.preview} &nbsp;
                <Link className="text-slate-900" to={post.slug}>
                  Läs mer
                </Link>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
