import { Link, useLoaderData } from "@remix-run/react";
import type { Post } from "./allaProgram";
import { getAllaProgram } from "./allaProgram";

export const loader = getAllaProgram;

export default function AllaProgram() {
  const posts: Post[] = useLoaderData();

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
          <Link to={post.slug}>
            <li className="hover:underline" key={post.slug}>
              {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
