import { useState } from "react";
import { ModalConfirm } from "../../components/ModalConfirm";
import { useSearchParams } from "react-router-dom";

export default function QrCodeCreation() {
  const [displayConfirmGoBack, setDisplayConfirmGoBack] = useState(false);
  const showConfirmGoBack = () => setDisplayConfirmGoBack(true);
  const hideConfirmGoBack = () => setDisplayConfirmGoBack(false);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const description = searchParams.get("description");

  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10">
      <nav className="flex items-center text-4xl font-normal leading-[60px] text-secondary-white">
        <button className="ml-1 flex items-center" onClick={showConfirmGoBack}>
          <img className="mr-1" src="/back.png" alt="" />
          Back
        </button>
      </nav>
      <main className="mt-8">
        <h1 className="text-6xl font-normal leading-[96px] text-secondary-white max-md:text-center max-md:text-4xl">
          Print the QR-code
        </h1>
        <div className="flex flex-col max-md:mt-4 max-md:items-center">
          <div className="flex flex-row max-md:flex-col max-md:items-center">
            <div className="w-1/2 max-sm:w-5/6">
              <h2 className="mt-8 text-5xl font-normal leading-[72px] text-secondary-white max-md:text-3xl">
                {name || "Package name"}
              </h2>
              <p className="mt-8 text-5xl font-normal leading-[72px] text-secondary-white max-md:text-3xl">
                {description || "Package description"}
              </p>
            </div>
            <div className="m-auto flex items-center justify-center text-3xl font-normal  leading-[48px] text-secondary-white max-md:mt-6">
              <img
                className="max-md:w-3/4"
                src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURI(
                  id || "Package is NEAR"
                )}&choe=UTF-8`}
                alt="QR code for the package"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="mt-10 h-12 w-44 rounded-lg bg-primary-red text-center text-2xl font-normal leading-[46px] text-secondary-white"
              onClick={() => {
                window.print();
              }}
            >
              Print
            </button>
          </div>
        </div>
      </main>
      {displayConfirmGoBack && (
        <ModalConfirm
          message="Are you sure you want to go back?"
          linkToConfirm="/"
          hide={hideConfirmGoBack}
        />
      )}
    </div>
  );
}
