import { Link, useLocation } from "@remix-run/react";
import { FC } from "react";
import { INavBarProps } from "./NavBar";

export const NavBarLink: FC<INavBarProps> = ({ name, to }) => {
  const location = useLocation();
  const isCurrentPage = location.pathname === to;
  return (
    <Link
      to={to}
      className={`mt-2 mb-2 mr-4 block last:mr-0 hover:underline lg:inline-block ${
        isCurrentPage && "font-bold"
      }`}
    >
      {name}
    </Link>
  );
};
