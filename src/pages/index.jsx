import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <main className="flex flex-col">
        <h1>SustainChain</h1>
        <Link to="/change-role">Change role</Link>
        <div className="flex-row md:flex-col-reverse">
          <div className="flex-col gap-4">
            <div>
              <Link to="/track-package/analytics">Track packages</Link>
            </div>
            <div>
              <Link to="/scan-package/qr-code-scanning">Scan package</Link>
            </div>
          </div>
          <div>
            <Link to="/create-package/creating">Create package</Link>
          </div>
        </div>
      </main>
    </>
  );
}
