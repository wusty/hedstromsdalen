import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import baseStyles from "./styles/base.css";
import { getUser } from "./session.server";
import { NavBar } from "./components/NavBar";

export const meta: MetaFunction = () => {
  return { title: "Hedströmsdalen" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: baseStyles },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  return json({
    user: await getUser(request),
  });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <NavBar />
        <div className="container pt-20 pb-48">
          <div className="ml-6 mr-6 max-w-sm sm:max-w-lg md:ml-12 md:mr-12 md:max-w-4xl lg:ml-48 lg:mr-48">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
