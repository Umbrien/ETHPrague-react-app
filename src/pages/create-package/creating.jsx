import { Link } from "react-router-dom";
export default function Creating() {
  return (
    <>
      <nav>
        <Link to="/">Go back</Link>
      </nav>
      <main>
        <h1>Create a package</h1>
        <input type="text" placeholder="Package name" />
        <textarea placeholder="Package description"></textarea>
        <Link to="/create-package/qr-code-creation">Save</Link>
      </main>
    </>
  );
}
