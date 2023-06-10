import { useState } from "react";
import { Link } from "react-router-dom";
export default function QrCodeScanning() {
  const [data, setData] = useState("");
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
          Change role
        </h1>
        <p className="mt-8 text-xl font-normal leading-[72px] text-secondary-white">
          Your current role is "admin", in the purpose of testing during the
          hackathon, you can make yourself back a user, and you will be able
          only to receive packages
        </p>
        <button className="text-secondary-white">Make me user</button>
      </main>
    </div>
  );
}
