import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getIsAdmin,
  makeMeAdmin,
  makeMeUser,
} from "../contract-requests/getters";

const textForAdmin = `Your current role is "admin", in the purpose of testing during the
hackathon, you can make yourself back a user, and you will be able
only to receive packages`;

const textForUser = `Your current role is "user", in the purpose of testing during the
hackathon, you can make yourself an administrator and be allowed to
create and manage packages`;

export default function ChangeRole() {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    getIsAdmin()
      .then((res) => {
        console.log("is admin", res);
        setIsAdmin(res);
      })
      .catch((err) => console.log("error getting is admin in iframe", err));
  }, []);

  const handleMakeMeAdmin = () => {
    makeMeAdmin()
      .then((res) => {
        console.log("make me admin", res);
        if (res) {
          setIsAdmin(true);
        }
      })
      .catch((err) => console.log("error making me admin in iframe", err));
  };

  const handleMakeMeUser = () => {
    makeMeUser()
      .then((res) => {
        console.log("make me user", res);
        if (res) {
          setIsAdmin(false);
        }
      })
      .catch((err) => console.log("error making me user in iframe", err));
  };

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
          {isAdmin !== null && (isAdmin ? textForAdmin : textForUser)}
          {isAdmin === null && "Loading..."}
        </h2>
        <button
          className="m-auto mt-10 h-12 w-44 rounded-lg bg-primary-red text-center text-2xl font-normal leading-[46px] text-secondary-white"
          onClick={
            isAdmin !== null && (isAdmin ? handleMakeMeUser : handleMakeMeAdmin)
          }
        >
          {isAdmin !== null && `Make me ${isAdmin ? "user" : "admin"}`}
          {isAdmin === null && "Loading..."}
        </button>
      </main>
    </div>
  );
}
