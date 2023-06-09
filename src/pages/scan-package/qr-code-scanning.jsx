import { useState } from "react";
import { BarcodeScannerComponent } from "../../components/BarcodeScannerComponent";
import { Link } from "react-router-dom";
import backIcon from "../../assets/Back.png";
export default function QrCodeScanning() {
  const [data, setData] = useState("");
  const [isCameraScanning, setIsCameraScanning] = useState(false);
  const turnOnCameraScanning = () => setIsCameraScanning(true);
  const turnOffCameraScanning = () => setIsCameraScanning(false);
  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10">
      <nav className="flex items-center text-4xl font-normal leading-[60px] text-secondary-white">
        <Link to="/" className="ml-1 flex items-center">
          <img className="mr-1" src={backIcon} alt="" />
          Back
        </Link>
      </nav>
      <main className="mt-8 flex flex-col">
        <h1 className=" text-6xl font-normal leading-[96px] text-secondary-white">
          Scan the QR-code
        </h1>
        {/* <h2 className="mt-8 text-5xl font-normal leading-[72px] text-secondary-white">
          Package name
        </h2>
        <p className="mt-8 text-5xl font-normal leading-[72px] text-secondary-white">
          Package description
        </p> */}
        <div className="flex items-center justify-center">
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
              Scan with camera
            </button>
          )}
          {data && <p>{data}</p>}
        </div>
      </main>
    </div>
  );
}
