import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  return (
    <AuthContext.Provider
      value={{
        token: token,
        setToken: setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
