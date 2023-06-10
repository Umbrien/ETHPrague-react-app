import { useState, useEffect } from "react";
import { BarcodeScannerComponent } from "../../components/BarcodeScannerComponent";
import { Link } from "react-router-dom";
export default function QrCodeScanning() {
  const [data, setData] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(data);
    setIsCopied(true);
  };

  useEffect(() => {
    setIsCopied(false);
  }, [data]);

  const [isCameraScanning, setIsCameraScanning] = useState(false);
  const turnOnCameraScanning = () => setIsCameraScanning(true);
  const turnOffCameraScanning = () => setIsCameraScanning(false);
  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10">
      <nav className="flex items-center text-4xl font-normal leading-[60px] text-secondary-white">
        <Link to="/" className="ml-1 flex items-center">
          <img className="mr-1" src="/back.png" alt="" />
          Back
        </Link>
      </nav>
      <main className="mt-8 flex flex-col">
        <h1 className="text-6xl font-normal leading-[96px] text-secondary-white max-md:text-4xl max-sm:text-center">
          Scan the QR-code
        </h1>
        {/* <h2 className="mt-8 text-5xl font-normal leading-[72px] text-secondary-white">
          Package name
        </h2>
        <p className="mt-8 text-5xl font-normal leading-[72px] text-secondary-white">
          Package description
        </p> */}
        {/* <div className="scan">
          <div className="qrcode"></div>
          <h3>QR Code Scanning...</h3>
          <div className="bord"></div>
        </div> */}
        <div className="mt-4 flex flex-col items-center justify-center">
          {isCameraScanning ? (
            <BarcodeScannerComponent
              width={600}
              height={600}
              onUpdate={(err, result) => {
                if (result) {
                  setData(result.text);
                  turnOffCameraScanning();
                }
              }}
            />
          ) : (
            <button
              className="mt-10 h-12 w-56 rounded-lg bg-primary-red text-center text-2xl font-normal leading-[46px] text-secondary-white"
              onClick={turnOnCameraScanning}
            >
              {data ? "Scan again" : "Scan QR-code"}
            </button>
          )}
          {data && (
            <>
              <p className="mt-8 text-5xl font-normal leading-[72px] text-secondary-white">
                {data}
              </p>
              <button className="text-secondary-white" onClick={copy}>
                {isCopied ? "👌 Copied" : "Copy"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
