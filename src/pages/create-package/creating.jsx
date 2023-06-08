import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalConfirm } from "../../components/ModalConfirm";

export default function Creating() {
  const [displayConfirmGoBack, setDisplayConfirmGoBack] = useState(false);
  const showConfirmGoBack = () => setDisplayConfirmGoBack(true);
  const hideConfirmGoBack = () => setDisplayConfirmGoBack(false);

  return (
    <>
      <nav>
        <button onClick={showConfirmGoBack}>Go back</button>
      </nav>
      <main>
        <h1>Create a package</h1>
        <input type="text" placeholder="Package name" />
        <textarea placeholder="Package description"></textarea>
        <Link to="/create-package/qr-code-creation">Save</Link>
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
