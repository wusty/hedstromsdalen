import { Link } from "@remix-run/react";
import { FC } from "react";
import { useOptionalUser } from "~/utils";

export const LoginOrSignUp: FC = () => {
  const user = useOptionalUser();

  return (
    <div className="sm:flex sm:max-w-none md:max-w-none lg:mx-auto ">
      {user ? (
        <Link
          to="/notes"
          className="inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500"
        >
          Se anteckningar för {user.email}
        </Link>
      ) : (
        <>
          <Link
            to="/join"
            className="mr-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500"
          >
            Skapa konto
          </Link>
          <Link
            to="/login"
            className="inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500"
          >
            Logga in
          </Link>
        </>
      )}
    </div>
  );
};
