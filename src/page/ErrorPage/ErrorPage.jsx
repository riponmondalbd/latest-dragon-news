import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops!</h1>
          <p className="py-6 text-xl font-medium text-[#706F6F]">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-xl font-medium text-[#706F6F]">
            <i>{error.statusText || error.message}</i>
          </p>
          <Link
            className="text-xl font-semibold text-white bg-[#403F3F] py-[9px] px-[43px]"
            to={"/"}
          >
            <button className="mt-9 text-lg">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
