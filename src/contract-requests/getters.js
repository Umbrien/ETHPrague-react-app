import { request } from "near-social-bridge";

export const getIsLoggedIn = (payload) => request("is-logged", payload);
export const getIsAdmin = (payload) => request("is-admin", payload);
