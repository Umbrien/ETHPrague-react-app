import { Link } from "react-router-dom";
import { ModalInput } from "./ModalInput";
import { useState } from "react";
export const AdminMainPage = () => {
  const [displayConfirmGoBack, setDisplayConfirmGoBack] = useState(false);
  const showConfirmGoBack = () => setDisplayConfirmGoBack(true);
  const hideConfirmGoBack = () => setDisplayConfirmGoBack(false);
  return (
    <div className="flex items-center justify-center p-12 max-lg:flex-col max-lg:p-3 max-md:p-6">
      <div className=" flex items-center justify-center">
        <Link
          className=" h-540 rounded-lg bg-primary-red p-12 text-5xl text-secondary-white max-lg:h-2/3 max-lg:p-8 max-sm:w-64 max-sm:text-2xl"
          to="/create-package/creating"
        >
          <img className="m-auto max-lg:w-32" src="/create.png" alt="" />
          <p className="mt-12 text-center text-primary-white max-lg:mt-6 max-lg:text-4xl max-sm:text-2xl">
            Create package
          </p>
        </Link>
      </div>
      <div className="ml-4 flex flex-col items-center justify-between max-lg:ml-0 max-lg:mt-5">
        <Link
          className=" h-2/3 rounded-lg border-4 border-primary-red bg-secondary-black p-9 text-4xl text-secondary-white max-sm:p-5 max-sm:text-2xl"
          to="/track-package/analytics"
        >
          <img className="m-auto max-sm:w-52" src="/graph.png" alt="" />
          <p className="mt-2 text-center text-primary-red">Track packages</p>
        </Link>
        <button
          className="mt-3 h-2/3 rounded-lg border-4 border-secondary-white  bg-secondary-black p-12 text-4xl text-secondary-white max-sm:w-64 max-sm:p-5 max-sm:text-2xl"
          // to="/scan-package/qr-code-scanning"
          onClick={showConfirmGoBack}
        >
          <img className="m-auto" src="/scan.png" alt="" />
          <p className="mt-2 text-center text-primary-white">Scan package</p>
        </button>
      </div>
      {displayConfirmGoBack && (
        <ModalInput
          message="Input ID"
          linkToConfirm="/"
          hide={hideConfirmGoBack}
        />
      )}
    </div>
  );
};
