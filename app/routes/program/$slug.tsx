import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

import { getProgram } from "./program";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getProgram(params.slug);
};

export default function ProgramSlug() {
  const post = useLoaderData();
  console.log("post => ", post);
  return (
    <div className="container mx-auto max-w-4xl">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
