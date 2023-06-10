import React from "react";
import { Link } from "react-router-dom";

export const ModalConfirm = ({ message, linkToConfirm, hide }) => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-bg-overlay ">
      <div className="w-3/12 rounded-md border border-secondary-white	 bg-secondary-black p-5 max-md:w-3/6 max-sm:w-4/5">
        <h2 className="text-center text-xl text-secondary-white">{message}</h2>
        <div className="flex justify-end gap-2">
          <Link
            to={linkToConfirm}
            className="mt-10 h-12 w-44 rounded-lg bg-primary-red text-center text-2xl font-normal leading-[46px] text-secondary-white"
          >
            Yes
          </Link>
          <button
            className="mt-10 h-12 w-44 rounded-lg bg-primary-red text-center text-2xl font-normal leading-[46px] text-secondary-white"
            onClick={hide}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
