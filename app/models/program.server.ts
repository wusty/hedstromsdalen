type Program = {
  slug: string;
  title: string;
};

export async function getPosts(): Promise<Array<Program>> {
  return [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
    },
  ];
}
