import { useState } from "react";
import { Link } from "react-router-dom";
export default function QrCodeCreation() {
  const [packageID, setPackageID] = useState("Package is NEAR");
  return (
    <>
      <nav>
        <Link to="/">Go back</Link>
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
    </>
  );
}
