import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalConfirm } from "../../components/ModalConfirm";
import backIcon from "../../assets/Back.png";

export default function PackageInfo() {
  //   const [displayConfirmGoBack, setDisplayConfirmGoBack] = useState(false);
  //   const showConfirmGoBack = () => setDisplayConfirmGoBack(true);
  //   const hideConfirmGoBack = () => setDisplayConfirmGoBack(false);

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
          <h1 className=" text-6xl font-normal leading-[96px] text-secondary-white">
            Packages information
          </h1>
          <div className="flex">
            <div className="w-1/2">
              <div className="ml-6">
                <p className="mt-8 text-4xl font-normal leading-[60px] text-secondary-white">
                  title
                </p>
                <p className="mt-8 text-4xl font-normal leading-[60px] text-secondary-white">
                  text
                </p>
              </div>
              <nav className="progressBar">
                <ul className="relative list-none pl-12">
                  <li>
                    <div className="flex items-center">
                      <p className="finalEvent ">Final event</p>
                      <p className="text-2xl">09.06.23 22:33</p>
                    </div>
                    <span className="finalEvent2">
                      0x6AdB19664D0DAc634a2c011439c86a47d1Ba2A51
                    </span>
                    <p className="finalEvent3"></p>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <p className="violatedEvent">Violated event</p>
                      <p className="text-red text-pr-red text-2xl">
                        09.06.23 22:33
                      </p>
                    </div>
                    <span className="violatedEvent">
                      0x6AdB19664D0DAc634a2c011439c86a47d1Ba2A51
                    </span>
                    <p className="text-pr-red text-lg italic">
                      Text from the “report input”
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <p className="handleEvent">Handle event</p>
                      <p className="text-2xl">09.06.23 22:33</p>
                    </div>
                    <span className="handleEvent2">
                      0x6AdB19664D0DAc634a2c011439c86a47d1Ba2A51
                    </span>
                  </li>
                  <li>
                    <p className="normalEvent">Normal event</p>
                    <span>12:45</span>
                  </li>
                  <li>
                    <p className="initialEvent">Initial event</p>
                    <span className="initialEvent2">9:04</span>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="m-auto flex text-4xl font-normal leading-[60px] text-secondary-white">
              <img src="" alt="QR" />
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
