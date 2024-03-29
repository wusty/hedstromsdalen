import { LoaderFunction, redirect } from "@remix-run/node";
import { NavBar } from "~/components/NavBar";
// import hapsash_idea from "public/img/hapsash_idea.png";

export const loader: LoaderFunction = async ({ params }) => {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.

  return redirect("/aktuellt");
};

export default function Index() {
  return (
    <p></p>
    // <img src={hapsash_idea} />
    // <NavBar />
    // <Info user={user} />
  );
}

const _exampleCode2 = () => {
  <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
    <div className="relative sm:pb-16 sm:pt-8">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://user-images.githubusercontent.com/8431042/161311608-f5d43ab2-85b4-40c5-9dea-065985e5adf5.jpeg"
              alt="BTS playing on stage with the group leaving in action poses"
            />
            <div className="absolute inset-0 bg-[color:rgba(139,92,246,0.5)] mix-blend-multiply" />
          </div>
          <div className="lg:pb-18 relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pt-32">
            <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
              <span className="block uppercase text-violet-500 drop-shadow-md">
                K-Pop Stack
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
              Check the README.md file for instructions on how to get this
              project deployed.
            </p>
            <a href="https://remix.run">
              <img
                src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
                alt="Remix"
                className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>;
};

const _exampleCode = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <div className="mt-6 flex flex-wrap justify-center gap-8">
        {[
          {
            src: "https://user-images.githubusercontent.com/8431042/161311102-fad29f2b-ffd4-4a24-aa4e-92f3fda526a7.svg",
            alt: "Netlify",
            href: "https://netlify.com",
          },
          {
            src: "https://user-images.githubusercontent.com/8431042/158711352-746c52cf-433e-4823-987a-c9d6f4349ce7.svg",
            alt: "Supabase",
            href: "https://supabase.com",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
            alt: "Tailwind",
            href: "https://tailwindcss.com",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
            alt: "Cypress",
            href: "https://www.cypress.io",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
            alt: "Testing Library",
            href: "https://testing-library.com",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
            alt: "Prettier",
            href: "https://prettier.io",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
            alt: "ESLint",
            href: "https://eslint.org",
          },
          {
            src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
            alt: "TypeScript",
            href: "https://typescriptlang.org",
          },
        ].map((img) => (
          <a
            key={img.href}
            href={img.href}
            className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
          >
            <img alt={img.alt} src={img.src} />
          </a>
        ))}
      </div>
    </div>
  );
};
