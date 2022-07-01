import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

// ------- Lägg till alla nya poster här:
import * as post1 from "./post-med-exempel.md";
import * as post2 from "./why-capitalism-works.md";
import * as post3 from "./capitalism-is-gret.md";
import * as post4 from "./en-till-utstallning.md";

// -------- Och här:
const allPosts = [
  postFromModule(post1),
  postFromModule(post2),
  postFromModule(post3),
  postFromModule(post4),
];

export type Program = {
  slug: string;
  title: string;
  markdown: string;
  date: Date;
};

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.md$/, ""),
    title: mod.attributes.title,
    date: mod.attributes.date,
  };
}

export const loader: LoaderFunction = async ({ params }) => {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.

  console.log("allPosts => ", allPosts);
  return json(allPosts);
};

export default function Index() {
  const posts: Program[] = useLoaderData();

  // Sort posts by latest date
  const sortedPosts = posts.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  });

  return (
    <div className="container mx-auto">
      <h1>Program</h1>
      <ul className="grid grid-cols-3 gap-4">
        {sortedPosts.map((post) => (
          <Link key={post.slug} to={post.slug}>
            <li className="hover:underline">{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
