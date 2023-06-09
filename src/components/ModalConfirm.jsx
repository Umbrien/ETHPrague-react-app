import React from "react";
import { Link } from "react-router-dom";

export const ModalConfirm = ({ message, linkToConfirm, hide }) => {
  return (
    <div className="absolute left-[780px] m-auto mt-32 flex w-1/5 flex-col rounded-md border border-secondary-white bg-secondary-black p-8 align-middle">
      {/* <div className="bg-black fixed inset-0 opacity-50"></div> Overlay */}
      <div className="">
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
