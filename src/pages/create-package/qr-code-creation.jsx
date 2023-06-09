import { useState } from "react";
import { ModalConfirm } from "../../components/ModalConfirm";
import backIcon from "../../assets/Back.png";

export default function QrCodeCreation() {
  const [displayConfirmGoBack, setDisplayConfirmGoBack] = useState(false);
  const showConfirmGoBack = () => setDisplayConfirmGoBack(true);
  const hideConfirmGoBack = () => setDisplayConfirmGoBack(false);

  const [packageID, setPackageID] = useState("Package is NEAR");
  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10">
      <nav className="flex items-center text-4xl font-normal leading-[60px] text-secondary-white">
        <button className="ml-1 flex items-center" onClick={showConfirmGoBack}>
          <img className="mr-1" src={backIcon} alt="" />
          Back
        </button>
      </nav>
      <main className="mt-8">
        <h1 className="text-6xl font-normal leading-[96px] text-secondary-white">
          Print the QR-code
        </h1>
        <div className="flex flex-col ">
          <div className="flex flex-row">
            <div className="w-1/2">
              <h2 className="mt-8 text-5xl font-normal leading-[72px] text-secondary-white">
                Package name
              </h2>
              <p className="mt-8 text-5xl font-normal leading-[72px] text-secondary-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
            </div>
            <div className="m-auto flex items-center justify-center text-3xl font-normal  leading-[48px] text-secondary-white">
              <img
                src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURI(
                  packageID
                )}&choe=UTF-8`}
                alt="QR code for the package"
              />
            </div>
          </div>
          <button
            className="mt-10 h-12 w-44 rounded-lg bg-primary-red text-center text-2xl font-normal leading-[46px] text-secondary-white"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </button>
        </div>
      </main>
      {displayConfirmGoBack && (
        <ModalConfirm
          className="absolute inset-0 z-10 transition-transform"
          message="Are you sure you want to go back?"
          linkToConfirm="/"
          hide={hideConfirmGoBack}
        />
      )}
    </div>
  );
}
