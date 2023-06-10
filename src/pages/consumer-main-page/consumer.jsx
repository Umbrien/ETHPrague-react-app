import { Link } from "react-router-dom";
export default function Swap() {
  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10">
      <nav className="flex items-center justify-between text-4xl font-normal leading-[60px] text-primary-red max-[430px]:flex-col">
        <Link
          to="/changing-role/swap-role"
          className="ml-1 flex h-14 w-52 items-center justify-center rounded-xl border border-primary-red text-center text-xl font-normal max-sm:h-10 max-sm:w-40 max-sm:text-lg"
        >
          Change my role
        </Link>
        <Link
          to="/"
          className=" flex h-14 w-52 items-center justify-center rounded-xl border border-primary-red text-center text-xl font-normal max-sm:h-10 max-sm:w-40 max-sm:text-lg max-[430px]:mt-6"
        >
          Wallet
        </Link>
      </nav>
      <main className="flex flex-col items-center">
        {/* <h1 className="text-6xl font-normal leading-[96px] text-secondary-white max-md:text-4xl max-sm:text-center">
          ETHPrague-app
        </h1> */}
        <div className="flex items-center justify-center p-12 max-lg:flex-col max-lg:p-3 max-md:p-6">
          <div className="ml-4 flex flex-col items-center justify-between max-lg:mt-5">
            <Link
              className=" text-white mt-3  h-2/3  w-full  rounded-lg bg-primary-red p-12 text-4xl max-sm:w-64 max-sm:p-5 max-sm:text-2xl"
              to="/scan-package/qr-code-scanning"
            >
              <img className="m-auto" src="/scan-user.png" alt="" />
              <p className="mt-10 text-center">Scan package</p>
            </Link>
          </div>
        </div>
        <h1 className="flex flex-row items-center text-6xl font-normal leading-[96px] text-primary-red max-md:text-4xl  max-sm:mt-3 max-sm:text-center max-sm:text-lg">
          <img className="max-sm:w-20 " src="/logo.png" alt="" />
          SustainChain
        </h1>
        <h2 className="mt-2  text-center text-5xl font-bold leading-[72px] text-secondary-white max-lg:text-4xl max-md:text-3xl max-sm:text-lg">
          <span className="text-primary-red">Sustainable.</span>
          Transparent.
          <span className="text-primary-red">Empowering</span>
        </h2>
      </main>
    </div>
  );
}
