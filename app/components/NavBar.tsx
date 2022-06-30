import { Link, useLocation, useParams } from "@remix-run/react";
import { LoginOrSignUp } from "~/components/LoginOrSignUp";
import { NavBarLink } from "./NavBarLink";

export const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-500 p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <Link className="flex" to="/">
          <svg
            className="mr-2 h-8 w-8 fill-current"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="text-xl font-semibold tracking-tight">HNK</span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center rounded border border-gray-400 px-3 py-2 text-gray-200 hover:border-white hover:text-white">
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Meny</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow ">
          <NavBarLink name="Kontakt" to="/kontakt" />
          <NavBarLink name="Program" to="/program" />
          <NavBarLink name="Arkiv" to="/arkiv" />
          <NavBarLink name="Misc." to="/misc" />
        </div>
        <LoginOrSignUp />
      </div>
    </nav>
  );
};

export interface INavBarProps {
  name: string;
  to: string;
}
