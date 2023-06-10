import { Link } from "react-router-dom";
import { request } from "near-social-bridge";
const getIsLoggedIn = (payload) => request("is-logged", payload);

getIsLoggedIn()
  .then((res) => console.log("response is", res))
  .catch((err) => console.log("error getting is logged in iframe", err));
export default function Root() {
  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10">
      <nav className="flex items-center justify-between text-4xl font-normal leading-[60px] text-primary-red max-[430px]:flex-col">
        <Link
          to="/changing-role/makemeuser"
          className="ml-1 flex h-14 w-52 items-center justify-center rounded-xl border border-primary-red text-center text-xl font-normal max-sm:h-10 max-sm:w-40 max-sm:text-lg"
        >
          Change my role
        </Link>
        <Link
          to="/track-package/packages-information"
          className=" flex h-14 w-52 items-center justify-center rounded-xl border border-primary-red text-center text-xl font-normal max-sm:h-10 max-sm:w-40 max-sm:text-lg max-[430px]:mt-6"
        >
          Wallet!
        </Link>
      </nav>
      <main className="flex  flex-col items-center	max-lg:mt-14">
        <div className="flex items-center justify-center p-12 max-lg:flex-col max-lg:p-3 max-md:p-6">
          <div className=" flex items-center justify-center">
            <Link
              className=" h-540 rounded-lg bg-primary-red p-12 text-5xl text-secondary-white max-lg:h-2/3 max-lg:p-8 max-sm:w-64 max-sm:text-2xl"
              to="/create-package/creating"
            >
              <img className="m-auto max-lg:w-32" src="/create.png" alt="" />
              <p className="mt-12 text-center text-primary-white max-lg:mt-6 max-lg:text-4xl max-sm:text-2xl">
                Create package
              </p>
            </Link>
          </div>
          <div className="ml-4 flex flex-col items-center justify-between max-lg:ml-0 max-lg:mt-5">
            <Link
              className=" h-2/3 rounded-lg border-4 border-primary-red bg-secondary-black p-9 text-4xl text-secondary-white max-sm:p-5 max-sm:text-2xl"
              to="/track-package/analytics"
            >
              <img className="m-auto max-sm:w-52" src="/graph.png" alt="" />
              <p className="mt-2 text-center text-primary-red">
                Track packages
              </p>
            </Link>
            <Link
              className="mt-3 h-2/3 rounded-lg border-4 border-secondary-white  bg-secondary-black p-12 text-4xl text-secondary-white max-sm:w-64 max-sm:p-5 max-sm:text-2xl"
              to="/scan-package/qr-code-scanning"
            >
              <img className="m-auto" src="/scan.png" alt="" />
              <p className="mt-2 text-center text-primary-white">
                Scan package
              </p>
            </Link>
          </div>
        </div>
        <h1 className="flex flex-row items-center justify-center text-6xl font-normal leading-[96px] text-primary-red max-md:text-4xl  max-sm:mt-3 max-sm:text-center max-sm:text-xl">
          <img className="mr-2 w-20 max-sm:w-20" src="/logo.png" alt="" />
          SustainChain
        </h1>
        <h2 className="max-[332px]:  mt-2 justify-center text-center text-5xl font-bold leading-[72px] text-secondary-white max-lg:text-4xl max-md:text-3xl max-sm:text-lg max-[332px]:flex max-[332px]:flex-col max-[332px]:items-center">
          <span className="mr-2 text-primary-red ">Sustainable.</span>
          <span className="mr-2 text-primary-white max-[332px]:mr-0">
            Transparent.
          </span>
          <span className="text-primary-red">Empowering.</span>
        </h2>
      </main>
    </div>
  );
}
