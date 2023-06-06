import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

// ------- Lägg till alla nya poster här:
import * as post1 from "./odling-1.mdx";
import * as post2 from "./narmsta-nyckelbiotop.mdx";
// import * as post2 from "./why-capitalism-works.mdx";
// import * as post3 from "./capitalism-is-gret.mdx";
// import * as post4 from "./en-till-utstallning.mdx";
import { marked } from "marked";
import parseFrontMatter from "front-matter";

// -------- Och här:
const allPosts: Program[] = [
  getPostData(post1),
  getPostData(post2),
  // getPostData(post3),
  // getPostData(post4),
];

export type Program = {
  slug: string;
  title: string;
  markdown: string;
  date: Date;
  default: React.ReactNode;
};

function getPostData(importedPost: any): Program {
  return {
    slug: importedPost.filename.replace(/\.mdx$/, ""),
    title: importedPost.attributes.title,
    date: importedPost.attributes.date,
    default: importedPost.default(),
    markdown: importedPost.markdown,

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

  return (
    <div className="container mx-auto">
      {/* <h1>Program</h1> */}
      <ul className="flex grid-cols-3 flex-col gap-4">
        {sortedPosts.map((post) => (
          <Link key={post.slug} to={post.slug}>
            <li className="hover:underline">{post.title}</li>
            {post?.default?.props?.children.map((c) => {
              if (c === "string") {
                return null;
              }

              // return <>{c}</>;
              // if (typeof c === "object") {
              //   return <>{c}</>;
              // }
            })}
          </Link>
        ))}
      </ul>
    </div>
  );
}
