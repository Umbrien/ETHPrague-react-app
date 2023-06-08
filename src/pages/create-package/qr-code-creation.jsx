import { useState } from "react";
import { ModalConfirm } from "../../components/ModalConfirm";
export default function QrCodeCreation() {
  const [displayConfirmGoBack, setDisplayConfirmGoBack] = useState(false);
  const showConfirmGoBack = () => setDisplayConfirmGoBack(true);
  const hideConfirmGoBack = () => setDisplayConfirmGoBack(false);

  const [packageID, setPackageID] = useState("Package is NEAR");
  return (
    <>
      <nav>
        <button onClick={showConfirmGoBack}>Go back</button>
      </nav>
      <main>
        <h1>Print the QR-code</h1>
        <h2>Package name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
        <div>
          <img
            src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURI(
              packageID
            )}&choe=UTF-8`}
            alt="QR code for the package"
          />
        </div>
        <button
          onClick={() => {
            window.print();
          }}
        >
          Print
        </button>
      </main>
      {displayConfirmGoBack && (
        <ModalConfirm
          message="Are you sure you want to go back?"
          linkToConfirm="/"
          hide={hideConfirmGoBack}
        />
      )}
    </>
  );
}
