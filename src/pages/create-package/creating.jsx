import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalConfirm } from "../../components/ModalConfirm";
import { createPackage, setPrintInput } from "../../contract-requests/getters";

export default function Creating() {
  const [displayConfirmGoBack, setDisplayConfirmGoBack] = useState(false);
  const showConfirmGoBack = () => setDisplayConfirmGoBack(true);
  const hideConfirmGoBack = () => setDisplayConfirmGoBack(false);
  const [displayProceedToPrint, setDisplayProceedToPrint] = useState(false);
  const showProceedToPrint = () => setDisplayProceedToPrint(true);
  const hideProceedToPrint = () => setDisplayProceedToPrint(false);

  const [description, setDescription] = useState("");

  const handleClick = () => {
    createPackage(description).then((res) => {
      console.log("create package", res);

      // TODO: set real new package ID
      setPrintInput(2).then((res) => {
        console.log("set print input", res);
        showProceedToPrint();
      });
    });
  };

  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10">
      <nav className="flex items-center text-4xl font-normal leading-[60px] text-secondary-white">
        <button className="ml-1 flex items-center" onClick={showConfirmGoBack}>
          <img className="mr-1" src="/back.png" alt="" />
          Back
        </button>
      </nav>
      <main className="mt-8 flex flex-col">
        <h1 className="text-6xl font-normal leading-[96px] text-secondary-white max-md:text-4xl max-sm:text-center max-sm:text-3xl">
          Create a package
        </h1>
        <input
          className="border-white mt-8 rounded-lg border bg-input-background p-5 text-3xl font-normal leading-[48px] text-secondary-white"
          type="text"
          placeholder="Package name"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-white mt-8 h-64 rounded-lg border bg-input-background p-5 text-3xl font-normal leading-[48px] text-secondary-white"
          placeholder="Package description"
        ></textarea>
        {/* to="/create-package/qr-code-creation" */}
        <button
          onClick={handleClick}
          className="m-auto mt-10 h-12 w-44 rounded-lg bg-primary-red text-center text-2xl font-normal leading-[46px] text-secondary-white"
        >
          Save
        </button>
      </main>
      {displayConfirmGoBack && (
        <ModalConfirm
          message="If you go back, the information you've entered won't be saved. Are you sure?"
          linkToConfirm="/"
          hide={hideConfirmGoBack}
        />
      )}
      {displayProceedToPrint && (
        <ModalConfirm
          message="👌 Package created! To print, click the button above"
          linkToConfirm="#"
          hide={hideProceedToPrint}
        />
      )}
    </div>
  );
}
