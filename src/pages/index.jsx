import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <main className="flex flex-col">
        <h1>ETHPrague-app</h1>
        <Link to="/create-package/creating">Create package</Link>
        <Link to="/track-package/analytics">Packages analytics</Link>
        <Link to="/scan-package/qr-code-scanning">Scan package</Link>
        <Link to="/scan-package/qr-code-scanning">Scan package</Link>
      </main>
    </>
  );
}
