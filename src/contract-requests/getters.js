import { request } from "near-social-bridge";

export const getIsLoggedIn = (payload) => request("is-logged", payload);
export const getIsAdmin = (payload) => request("is-admin", payload);
export const getWalletAddress = () => request("get-wallet-address");
export const setPrintInput = (payload) => request("set-print-input", payload);
export const makeMeAdmin = () => request("make-me-admin");
export const makeMeUser = () => request("make-me-user");
export const createPackage = (payload) => request("create-package", payload);
export const createReport = (payload) => request("create-report", payload);
export const acceptPackage = (payload) => request("accept-package", payload);
