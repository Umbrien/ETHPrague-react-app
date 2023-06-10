import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { request } from "near-social-bridge";
import { ConsumerMainPage } from "../components/ConsumerMainPage";
import { AdminMainPage } from "../components/AdminMainPage";

const getIsLoggedIn = (payload) => request("is-logged", payload);
const getIsAdmin = (payload) => request("is-admin", payload);

export default function Root() {
  const [isLogged, setIsLogged] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [isForceRefetch, setIsForceRefetch] = useState(false);
  const refetch = () => setIsForceRefetch((r) => !r);

  const isStartedFetchingLogin = useRef(false);
  const isStartedFetchingAdmin = useRef(false);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    refetch();
  }, [isLogged, isAdmin]);

  if (isLogged === null && !isStartedFetchingLogin.current) {
    isStartedFetchingLogin.current = true;
    getIsLoggedIn()
      .then((res) => {
        setIsLogged(res);
      })
      .catch((err) => console.log("error getting is logged in iframe", err));
  }

  if (
    isLogged !== null &&
    isAdmin === null &&
    !isStartedFetchingAdmin.current
  ) {
    isStartedFetchingAdmin.current = true;
    getIsAdmin()
      .then((res) => {
        console.log("is admin", res);
        setIsAdmin(res);
      })
      .catch((err) => console.log("error getting is admin in iframe", err));
  }

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
        {!isLogged && <ConsumerMainPage />}
        {isLogged && !isAdmin && <ConsumerMainPage />}
        {isLogged && isAdmin && <AdminMainPage />}
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
