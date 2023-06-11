import { request } from "near-social-bridge";

export const getIsLoggedIn = (payload) => request("is-logged", payload);
export const getIsAdmin = (payload) => request("is-admin", payload);
export const makeMeAdmin = () => request("make-me-admin");
export const makeMeUser = () => request("make-me-user");
export const createPackage = (payload) => request("create-package", payload);
