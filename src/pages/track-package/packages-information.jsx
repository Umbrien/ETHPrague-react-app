import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AcceptedEvent,
  CreatedEvent,
  HandledEvent,
  MovedEvent,
  ReportedEvent,
} from "../../components/Events";

const wallet = "0x6AdB19664D0DAc634a2c011439c86a47d1Ba2A51";
const date = new Date();
export default function PackageInfo() {
  const [packageID, setPackageID] = useState("Package is NEAR");

  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10">
      <nav className="flex items-center text-4xl font-normal leading-[60px] text-secondary-white">
        <Link to="/track-package/analytics" className="ml-1 flex items-center">
          <img className="mr-1" src="/back.png" alt="" />
          Back
        </Link>
      </nav>
      <main className="mt-8 flex flex-col">
        <div className="mt-4 flex flex-col">
          <h1 className=" text-6xl font-normal leading-[96px] text-secondary-white max-md:text-center max-md:text-4xl">
            Packages information
          </h1>
          <div className="flex items-center max-lg:flex-col max-md:mt-4 max-md:items-center">
            <div className="flex flex-col  max-md:flex-col max-md:items-center">
              <div className="w-1/2 max-sm:w-5/6">
                <p className="mt-8 text-4xl font-normal leading-[60px] text-secondary-white max-md:text-3xl">
                  title
                </p>
                <p className="mt-8 text-4xl font-normal leading-[60px] text-secondary-white max-md:text-3xl">
                  text
                </p>
              </div>
              <nav className="progressBar">
                <ul className="relative list-none pl-12">
                  <AcceptedEvent date={date} wallet={wallet} />
                  <ReportedEvent date={date} wallet={wallet} />
                  <HandledEvent date={date} wallet={wallet} />
                  <MovedEvent date={date} wallet={wallet} />
                  <CreatedEvent date={date} wallet={wallet} />
                </ul>
              </nav>
            </div>
            <div className="m-auto flex text-4xl font-normal leading-[60px] text-secondary-white max-md:mt-5">
              <img
                className="max-md:w-3/4"
                src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURI(
                  packageID
                )}&choe=UTF-8`}
                alt="QR code for the package"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
