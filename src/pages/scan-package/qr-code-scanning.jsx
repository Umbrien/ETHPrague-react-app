import { useState } from "react";
import { BarcodeScannerComponent } from "../../components/BarcodeScannerComponent";

export default function QrCodeScanning() {
  const [data, setData] = useState("");
  const [isCameraScanning, setIsCameraScanning] = useState(false);
  const turnOnCameraScanning = () => setIsCameraScanning(true);
  const turnOffCameraScanning = () => setIsCameraScanning(false);
  return (
    <>
      <nav>
        <button>Go back</button>
      </nav>
      <main>
        <h1>Scan the QR-code</h1>
        <h2>Package name</h2>
        <p>Package description</p>
        <div>
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
            <button onClick={turnOnCameraScanning}>Scan with camera</button>
          )}
          {data && <p>{data}</p>}
        </div>
      </main>
    </>
  );
}
