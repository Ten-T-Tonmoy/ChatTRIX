import { createContext, useContext, useState } from "react";

export const authContext = createContext();

export const useAuthContext = () => {
  return useContext(authContext); //return current context value
};
