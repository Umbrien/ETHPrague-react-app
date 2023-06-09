import React from "react";
import { Link } from "react-router-dom";

export const ModalConfirm = ({ message, linkToConfirm, hide }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="relative w-80 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-lg font-semibold">{message}</h2>
        <div className="flex justify-end gap-2">
          <Link
            to={linkToConfirm}
            className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            Yes
          </Link>
          <button
            className="mr-2 rounded bg-gray-300 px-4 py-2 font-semibold text-gray-800 hover:bg-gray-400"
            onClick={hide}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
