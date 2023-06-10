import { Link } from "react-router-dom";
export const ConsumerMainPage = () => {
  return (
    <div className="flex items-center justify-center p-12 max-lg:flex-col max-lg:p-3 max-md:p-6">
      <div className="ml-4 flex flex-col items-center justify-between max-lg:mt-5">
        <Link
          className=" text-white mt-3  h-520  w-520 rounded-lg bg-primary-red p-12 text-4xl max-lg:h-420 max-lg:w-420 max-sm:h-320  max-sm:w-64 max-sm:p-5 max-sm:text-2xl "
          to="/scan-package/qr-code-scanning"
        >
          <img
            className="m-auto mt-10 max-lg:mt-2"
            src="/scan-user.png"
            alt=""
          />
          <p className="mt-16 text-center text-5xl text-primary-white max-lg:mt-8 max-md:mt-5 max-sm:text-3xl">
            Scan package
          </p>
        </Link>
      </div>
    </div>
  );
};
