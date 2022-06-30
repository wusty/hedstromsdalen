import { Link } from "@remix-run/react";
import { FC } from "react";
import { useOptionalUser } from "~/utils";

export const LoginOrSignUp: FC = () => {
  const user = useOptionalUser();

  return (
    <div className="mx-auto sm:flex sm:max-w-none ">
      {user ? (
        <Link
          to="/notes"
          className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500"
        >
          Se anteckningar för {user.email}
        </Link>
      ) : (
        <div className="">
          <Link
            to="/join"
            className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500"
          >
            Skapa konto
          </Link>
          <Link
            to="/login"
            className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500"
          >
            Logga in
          </Link>
        </div>
      )}
    </div>
  );
};
