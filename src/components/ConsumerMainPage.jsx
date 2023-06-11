import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalInput } from "./ModalInput";
export const ConsumerMainPage = () => {
  const [displayConfirmGoBack, setDisplayConfirmGoBack] = useState(false);
  const showConfirmGoBack = () => setDisplayConfirmGoBack(true);
  const hideConfirmGoBack = () => setDisplayConfirmGoBack(false);
  const [modalInputValue, setModalInputValue] = useState("");

  return (
    <div className="flex items-center justify-center p-12 max-lg:flex-col max-lg:p-3 max-md:p-6">
      <div className="ml-4 flex flex-col items-center justify-between max-lg:mt-5">
        <button
          onClick={showConfirmGoBack}
          className=" text-white mt-3  h-520  w-520 rounded-lg bg-primary-red p-12 text-4xl max-lg:h-420 max-lg:w-420 max-sm:h-320  max-sm:w-64 max-sm:p-5 max-sm:text-2xl "
        >
          <img
            className="m-auto mt-10 max-lg:mt-2"
            src="/scan-user.png"
            alt=""
          />
          <p className="mt-16 text-center text-5xl text-primary-white max-lg:mt-8 max-md:mt-5 max-sm:text-3xl">
            Scan package
          </p>
        </button>
      </div>
      {displayConfirmGoBack && (
        <ModalInput
          message={`Please scan QR code by clicking "Scan package" button below, then paste ID here`}
          linkToConfirm={`/track-package/packages-information?id=${
            parseInt(modalInputValue) > 0 ? modalInputValue : ""
          }`}
          hide={hideConfirmGoBack}
          state={modalInputValue}
          setState={setModalInputValue}
        />
      )}
    </div>
  );
};
