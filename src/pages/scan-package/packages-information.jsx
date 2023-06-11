import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  AcceptedEvent,
  CreatedEvent,
  HandledEvent,
  MovedEvent,
  ReportedEvent,
} from "../../components/Events";
import { acceptPackage, getGqlBranch } from "../../contract-requests/getters";

const wallet = "0x6AdB19664D0DAc634a2c011439c86a47d1Ba2A51";
const date = new Date();
export default function PackageInfo() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    acceptPackage(id)
      .then((res) => {
        console.log("confirm-package", res);
        if (res) {
          setIsConfirmed(true);
        }
      })
      .catch((err) => console.log("error confirming package", err));
  };

  const [gqlBranch, setGqlBranch] = useState(null);

  if (gqlBranch === null) {
    handleGetBranch();
  }

  function handleGetBranch() {
    getGqlBranch(id)
      .then((res) => {
        console.log("getGqlBranch", res);
        setGqlBranch(res);
      })
      .catch((err) => console.log("error getGqlBranch", err));
  }

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
          <h1
            onClick={handleGetBranch}
            className=" text-6xl font-normal leading-[96px] text-secondary-white max-md:text-center max-md:text-4xl"
          >
            Packages information
          </h1>
          <div className="flex items-center max-lg:flex-col max-md:mt-4 max-md:items-center">
            <div className="flex flex-col  max-md:flex-col max-md:items-center">
              <div className="w-1/2 max-sm:w-5/6">
                <p className="mt-8 text-4xl font-normal leading-[60px] text-secondary-white max-md:text-3xl">
                  {gqlBranch?.[0].name || "Package name"}
                </p>
                <p className="mt-8 text-4xl font-normal leading-[60px] text-secondary-white max-md:text-3xl">
                  {gqlBranch?.[0].description || "Package description"}
                </p>
              </div>
              <nav className="progressBar">
                <ul className="relative list-none pl-12">
                  {gqlBranch?.map((snapshot, index) => {
                    if (snapshot.status === 0) {
                      return (
                        <CreatedEvent
                          key={"event-" + index}
                          date={new Date(parseInt(snapshot.created) * 1000)}
                          wallet={snapshot.handler}
                        />
                      );
                    } else if (snapshot.status === 1) {
                      return (
                        <MovedEvent
                          key={"event-" + index}
                          date={new Date(parseInt(snapshot.created) * 1000)}
                          wallet={snapshot.handler}
                        />
                      );
                    } else if (snapshot.status === 2) {
                      return (
                        <HandledEvent
                          key={"event-" + index}
                          date={new Date(parseInt(snapshot.created) * 1000)}
                          wallet={snapshot.handler}
                        />
                      );
                    } else if (snapshot.status === 3) {
                      return (
                        <ReportedEvent
                          key={"event-" + index}
                          date={new Date(parseInt(snapshot.created) * 1000)}
                          wallet={snapshot.handler}
                        />
                      );
                    } else if (snapshot.status === 4) {
                      return (
                        <AcceptedEvent
                          key={"event-" + index}
                          date={new Date(parseInt(snapshot.created) * 1000)}
                          wallet={snapshot.handler}
                        />
                      );
                    }
                  })}
                </ul>
              </nav>
            </div>
            <div className="m-auto flex text-4xl font-normal leading-[60px] text-secondary-white max-md:mt-5">
              <img
                className=""
                src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURI(
                  id || ""
                )}&choe=UTF-8`}
                alt="QR code for the package"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="m-auto flex w-620 items-center justify-center max-md:w-64 max-md:flex-col">
        <button
          onClick={handleConfirm}
          className="m-auto mt-10 h-12 w-44 rounded-lg bg-primary-red text-center text-2xl font-normal leading-[46px] text-secondary-white"
          to="/"
        >
          {isConfirmed ? "👌 Confirmed" : "Confirm"}
        </button>
        <Link
          className="m-auto mt-10 h-12 w-44 rounded-lg bg-primary-red text-center text-2xl font-normal leading-[46px] text-secondary-white"
          to={`/create-package/creating?status=1&parent=${id || 0}`}
        >
          Handle
        </Link>
        <Link
          className="m-auto mt-10 h-12 w-44 rounded-lg bg-primary-red text-center text-2xl font-normal leading-[46px] text-secondary-white"
          to={`/scan-package/report?parent=${id}`}
        >
          Report
        </Link>
      </footer>
    </div>
  );
}
