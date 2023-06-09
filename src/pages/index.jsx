import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <main>
        <h1>ETHPrague-app</h1>
        <Link to="/create-package/creating">Create package</Link>
        <Link to="/scan-package/qr-code-scanning">Scan package</Link>
      </main>
    </>
  );
}
