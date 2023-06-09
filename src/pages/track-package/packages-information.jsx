import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalConfirm } from "../../components/ModalConfirm";
import backIcon from "../../assets/Back.png";

export default function PackageInfo() {
  //   const [displayConfirmGoBack, setDisplayConfirmGoBack] = useState(false);
  //   const showConfirmGoBack = () => setDisplayConfirmGoBack(true);
  //   const hideConfirmGoBack = () => setDisplayConfirmGoBack(false);
  const [packageID, setPackageID] = useState("Package is NEAR");

  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10">
      <nav className="flex items-center text-4xl font-normal leading-[60px] text-secondary-white">
        <Link to="/track-package/analytics" className="ml-1 flex items-center">
          <img className="mr-1" src={backIcon} alt="" />
          Back
        </Link>
      </nav>
      <main className="mt-8 flex flex-col">
        <div className="mt-4 flex flex-col">
          <h1 className=" text-6xl font-normal leading-[96px] text-secondary-white max-md:text-center max-md:text-4xl">
            Packages information
          </h1>
          {/* <div className="flex">
            <div className="w-1/2">
              <div className="ml-6"> */}
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
                  <li>
                    <div className="flex items-center ">
                      <p className="finalEvent max-md:text-2xl">Final event</p>
                      <p className="text-2xl">09.06.23 22:33</p>
                    </div>
                    <span className="finalEvent2 break-all">
                      0x6AdB19664D0DAc634a2c011439c86a47d1Ba2A51
                    </span>
                    <p className="finalEvent3"></p>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <p className="violatedEvent max-md:text-2xl">
                        Violated event
                      </p>
                      <p className="text-red text-pr-red text-2xl">
                        09.06.23 22:33
                      </p>
                    </div>
                    <span className="violatedEvent break-all">
                      0x6AdB19664D0DAc634a2c011439c86a47d1Ba2A51
                    </span>
                    <p className="text-pr-red text-lg italic">
                      Text from the “report input”
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <p className="handleEvent max-md:text-2xl">
                        Handle event
                      </p>
                      <p className="text-2xl">09.06.23 22:33</p>
                    </div>
                    <span className="handleEvent2 break-all">
                      0x6AdB19664D0DAc634a2c011439c86a47d1Ba2A51
                    </span>
                  </li>
                  <li>
                    <p className="normalEvent max-md:text-2xl">Normal event</p>
                    <span>12:45</span>
                  </li>
                  <li>
                    <p className="initialEvent max-md:text-2xl">
                      Initial event
                    </p>
                    <span className="initialEvent2">9:04</span>
                  </li>
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
      {/* {displayConfirmGoBack && (
        <ModalConfirm
          message="Are you sure you want to go back?"
          linkToConfirm="/"
          hide={hideConfirmGoBack}
        />
      )} */}
    </div>
  );
}
