import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext); //return current context value
};

//using local storage cause reloading shits out state value
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chatter")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

//info about auth User

/**
 * authContext => where values will be stored
 * authCOntextProvider => whole domain where contexts will be shared values
 * useAuthContext just a shortCut or
 *    =>  everplace useContext(authContext) to access it returns val
 * const { authUser, setAuthUser } = useAuthContext();
 */
