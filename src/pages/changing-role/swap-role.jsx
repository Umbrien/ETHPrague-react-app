import { Link } from "react-router-dom";
export default function SwapRole() {
  return (
    <div className="relative flex h-1/2 min-h-screen flex-col bg-secondary-black p-5 pl-10 pr-10">
      <nav className="flex items-center text-4xl font-normal leading-[60px] text-secondary-white">
        <Link to="/" className="ml-1 flex items-center">
          <img className="mr-1" src="/back.png" alt="" />
          Back
        </Link>
      </nav>
      <main className="flex flex-col items-center">
        <h2 className="mt-2 w-3/4 text-center text-4xl font-normal leading-[72px] text-secondary-white max-lg:text-4xl max-md:text-3xl max-sm:text-lg">
          Your current role is "user", in the purpose of testing during the
          hackathon, you can make yourself an administrator and be allowed to
          create and manage packages
        </h2>
        <Link
          className="m-auto mt-10 h-12 w-44 rounded-lg bg-primary-red text-center text-2xl font-normal leading-[46px] text-secondary-white"
          to="/"
        >
          Make me admin
        </Link>
      </main>
    </div>
  );
}
